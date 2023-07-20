'use client'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import { ReactNode } from 'react'

import theme from '~/theme'

export const StylesProvider = ({ children }: Record<'children', ReactNode>) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
      {children}
    </ChakraProvider>
  )
}
