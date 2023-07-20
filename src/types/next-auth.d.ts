import { JWT } from 'next-auth/jwt'
import { Role, User } from '@prisma/client'
import NextAuth, { DefaultSession } from 'next-auth'

type UserId = string
type secret = User['secret']

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId
    role: Role
    secret: secret
  }
}

declare module 'next-auth' {
  interface Session {
    user: {
      id: UserId
      role: Role
      secret: secret
    } & DefaultSession['user']
  }
}
