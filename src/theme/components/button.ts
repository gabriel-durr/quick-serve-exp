import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const qseSolidBtn = defineStyle({
  h: 10,
  w: '384px',
  rounded: 'md',
  fontSize: 14,
  fontFamily: 'heading',
  letterSpacing: '1.2px',
  color: 'whiteAlpha.900',
  bg: 'qse.black',
  _dark: { bg: 'qse.almostWhite', color: 'gray.900' },
  textTransform: 'uppercase',
  _disabled: { bg: 'charcoal' },
  _hover: {
    bg: 'qse.black',
    filter: 'contrast(90%)',
    transition: 'all .5s ease'
  }
})

export const buttonTheme = defineStyleConfig({
  variants: { qseSolidBtn }
})
