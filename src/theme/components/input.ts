import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
)

const qseInput = definePartsStyle({
  field: {
    h: 10,
    w: '384px',
    pl: 14,
    rounded: 'sm',
    border: 'none',
    bg: 'transparent',
    borderBottom: '1px solid',
    borderBottomColor: 'qse.lightGray',
    errorBorderColor: 'red.600',
    _placeholder: {
      transition: 'all ease .4s'
    },
    _focus: {
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
