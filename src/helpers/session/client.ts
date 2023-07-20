'use client'

import { useSession, UseSessionOptions } from 'next-auth/react'

type UseGetSessionProps = UseSessionOptions<true | false>

export const useGetClientSession = (props?: UseGetSessionProps) => {
  const session = useSession(props)

  return session
}
