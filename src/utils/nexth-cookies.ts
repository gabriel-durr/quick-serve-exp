'use server'

import { cookies } from 'next/headers'
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies/index'

const saveCookie = async ({ name, value, maxAge, ...props }: ResponseCookie) => {
  cookies().set({ name, value, maxAge, ...props })
}

const getCookie = async (name: string) => {
  const cookie = cookies().get(name)

  return cookie
}

export { saveCookie, getCookie }
