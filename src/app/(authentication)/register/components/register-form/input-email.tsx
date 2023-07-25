import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form'

import {
  Input,
  InputProps,
  InputGroup,
  FormControl,
  InputLeftElement,
  FormErrorMessage
} from '@chakra-ui/react'

import { Icons } from '~/app/components/icons'

export type InputEmailProps = InputProps & {
  register: UseFormRegisterReturn<'email'>
  errors?: FieldErrors<{ email: string }>
}

export const InputEmail = ({ errors, register }: InputEmailProps) => {
  const hasMailError = !!errors?.email

  return (
    <FormControl isInvalid={hasMailError}>
      <InputGroup>
        <InputLeftElement color="gray.300">
          <Icons.Message />
        </InputLeftElement>

        <Input variant="qseInput" placeholder="E-mail" {...register} />
      </InputGroup>

      {hasMailError && <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>}
    </FormControl>
  )
}
