'use client'

import { ReactNode } from 'react'

import { StylesProvider } from './styles-provider'
import { NextAuthProvider } from './next-auth-provider'

export const Providers = ({ children }: Record<'children', ReactNode>) => {
  return (
    <StylesProvider>
      <NextAuthProvider>{children}</NextAuthProvider>
    </StylesProvider>
  )
}
