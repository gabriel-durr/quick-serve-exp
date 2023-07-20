'use client'

import { useEffect, Fragment } from 'react'
import { useRouter } from 'next/navigation'

import Template from './components/template'
import { useGetClientSession } from '~/helpers/session/client'

const RegisterPage = () => {
  const router = useRouter()
  const { status } = useGetClientSession()

  useEffect(() => {
    if (status === 'authenticated') router.push('/')
  }, [status, router])

  return status === 'unauthenticated' ? <Template /> : <Fragment />
}

export default RegisterPage
