import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form'

import {
  Input,
  InputGroup,
  FormControl,
  FormErrorMessage,
  InputLeftElement,
  InputProps
} from '@chakra-ui/react'

import { Icons } from '~/app/components/icons'

export type InputLastNameProps = InputProps & {
  register: UseFormRegisterReturn<'lastName'>
  errors?: FieldErrors<{ lastName: string }>
}

export const InputLastName = ({ errors, register }: InputLastNameProps) => {
  const hasLastNameError = !!errors?.lastName

  return (
    <FormControl isInvalid={hasLastNameError}>
      <InputGroup>
        <InputLeftElement color="gray.300">
          <Icons.User />
        </InputLeftElement>
        <Input variant="tcsaInput" placeholder="Last name" {...register} />
      </InputGroup>

      {hasLastNameError && <FormErrorMessage>{errors?.lastName?.message}</FormErrorMessage>}
    </FormControl>
  )
}
