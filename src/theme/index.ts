import { colors } from './colors'
import { inputTheme, buttonTheme, headingTheme } from './components'

import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      fontFamily: 'body',
      overflowX: 'hidden',
      color: mode('gray.900', 'gray.100')(props),
      bg: mode('qse.almostWhite', 'qse.black')(props)
    },
    a: {
      color: mode('gray.900', 'gray.100')(props),
      fontFamily: 'heading',
      _hover: {
        transition: 'all 0.4s',
        filter: 'opacity(0.8)',
        textDecoration: 'none !important'
      }
    },
    '*:focus': {
      outline: 'none !important'
    },
    '*:focus-visible': {
      boxShadow: `0 0.5px 12px -2px ${mode('qse.almostWhite', 'qse.black')(props)} !important`,
      border: `1px solid ${mode('qse.almostWhite', 'qse.black')(props)} !important`
    },
    scrollBehavior: 'smooth',
    '*::-webkit-scrollbar': {
      w: '6px',
      bg: mode('gray.100', 'gray.900')(props)
    },
    '*::-webkit-scrollbar-thumb': {
      bg: mode('gray.900', 'gray.700')(props),
      borderRadius: '2px'
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteSpace.500')(props)
    }
  })
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

/**
 *  Responsive Screens:
 * - base: mobile small
 * - sm (393px): mobile
 * - md (768px): tablet
 * - lg (960px): laptopt / hd-screen
 * - xl (1500px): desktop
 *
 * @see https://chakra-ui.com/docs/styled-system/responsive-styles
 */

const breakpoints = {
  sm: '24.563em',
  md: '48em',
  lg: '60em',
  xl: '93.75em'
}

const fonts = {
  heading: 'Roboto, sans-serif',
  body: 'Roboto, sans-serif'
}

const theme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  breakpoints,
  components: {
    Input: inputTheme,
    Button: buttonTheme,
    Heading: headingTheme
  }
})

export default theme
