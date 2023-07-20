import { getServerSession as rootGetServerSession } from 'next-auth/next'

import { authOptions } from '~/server/auth'

export async function getServerSession() {
  return await rootGetServerSession(authOptions)
}

export async function getCurrentUser() {
  const session = await getServerSession()

  return session?.user
}
