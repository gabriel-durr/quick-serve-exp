import { type GetServerSidePropsContext } from 'next'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { getServerSession, type NextAuthOptions } from 'next-auth'

import bcrypt from 'bcrypt'

import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

import { env } from '~/env'
import { api } from '~/server/api'
import { prisma } from '~/server/db'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login'
  },
  session: { strategy: 'jwt' },
  events: {
    async signOut({ token }) {
      await api.post('/qr-status', { secret: token.secret, type: 'inactive' })
    }
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.role = token.role
        session.user.image = token.picture
        session.user.secret = token.secret
      }

      return session
    },

    async jwt({ token, user }) {
      const dbUser = await prisma.user.findUnique({ where: { email: token.email! } })

      if (!dbUser) {
        token.id = user!.id
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        role: dbUser.role,
        email: dbUser.email,
        picture: dbUser.image,
        secret: dbUser.secret
      }
    }
  },

  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    }),

    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET
    }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'email@email.com' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
          select: { id: true, name: true, email: true, password: true }
        })

        if (!user) throw new Error(JSON.stringify({ message: 'User not found', status: 404 }))

        const checkPassword = await bcrypt.compare(credentials?.password!, user.password!!)

        if (!checkPassword)
          throw new Error(
            JSON.stringify({ message: `User name or Password doesn't match`, status: 401 })
          )

        return { id: user.id, name: user.name, email: user.email }
      }
    })
  ]
}

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext['req']
  res: GetServerSidePropsContext['res']
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions)
}
