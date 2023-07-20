import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

import { env } from '~/env'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: env.NEXTAUTH_SECRET })
  const path = request.nextUrl.pathname
  const isAdmin = token?.role === 'ADMIN'

  if (!token && path !== '/login') return NextResponse.redirect(new URL('/login', request.url))

  if (!isAdmin && path === '/admin') return NextResponse.redirect(new URL('/', request.url))

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/verify-qr-code', '/profile', '/admin']
}
