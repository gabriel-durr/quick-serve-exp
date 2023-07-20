'use client'

import { useRouter } from 'next/navigation'
import { useEffect, Fragment } from 'react'

import Template from './components/template'
import { useGetClientSession } from '~/helpers/session/client'

const LoginPage = () => {
  const router = useRouter()

  const { status } = useGetClientSession()

  useEffect(() => {
    if (status === 'authenticated') router.push('/')
  }, [router, status])

  return status === 'unauthenticated' ? <Template /> : <Fragment />
}

export default LoginPage
