import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const qseSolidBtn = defineStyle({
  h: 12,
  w: '384px',
  rounded: 'md',
  fontSize: 14,
  fontFamily: 'heading',
  letterSpacing: '1.2px',
  color: 'whiteAlpha.900',
  bg: 'qse.rubi',
  textTransform: 'uppercase',
  _disabled: { bg: 'charcoal' },
  _hover: {
    bg: 'qse.rubi',
    filter: 'contrast(1.6)',
    transition: 'all .2s ease'
  }
})

export const buttonTheme = defineStyleConfig({
  variants: { qseSolidBtn }
})
