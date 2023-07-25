import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
)

const qseInput = definePartsStyle({
  field: {
    h: 12,
    w: '384px',
    pl: 14,
    rounded: 'md',
    border: 'none',
    bg: 'gray.100',
    borderBottom: '1px solid',
    borderBottomColor: 'qse.lightGray',
    errorBorderColor: 'red.600',
    _placeholder: {
      transition: 'all ease .4s'
    },
    _focus: {
      bg: 'gray.200',
      '&::placeholder': {
        pl: '12px',
        transition: 'all ease .4s'
      }
    },
    _light: {
      borderBottomColor: 'qse.grayish'
    }
  }
})

export const inputTheme = defineMultiStyleConfig({
  variants: { qseInput }
})
