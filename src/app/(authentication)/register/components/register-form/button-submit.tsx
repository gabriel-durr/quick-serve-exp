'use client'

import { Button, ButtonProps } from '@chakra-ui/react'
import { SyncLoader } from 'react-spinners'

export type ButtonSubmitProps = ButtonProps & {
  isDisabled: boolean
  isSubmitting: boolean
}

export const ButtonSubmit = ({ isDisabled, isSubmitting, ...props }: ButtonSubmitProps) => {
  return (
    <Button
      type="submit"
      variant="qseSolidBtn"
      role="button"
      w="full"
      bg="black"
      isDisabled={isDisabled}
      isLoading={isSubmitting}
      spinner={<SyncLoader size={4} color="pink" />}
      {...props}
    >
      Register
    </Button>
  )
}
