import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const primary = defineStyle({
  color: 'gray.100',
  fontFamily: 'heading',
  textTransform: 'uppercase',
  fontSize: ['1.12rem', '1.12rem', '1.15rem'],
  letterSpacing: 'wide',

  _light: {
    color: 'gray.900'
  }
})

export const headingTheme = defineStyleConfig({
  variants: { primary }
})
