import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form'

import {
  Input,
  InputGroup,
  FormControl,
  FormErrorMessage,
  InputLeftElement,
  InputProps
} from '@chakra-ui/react'

import { Icons } from '~/app/components/icons'

export type InputFirstNameProps = InputProps & {
  register: UseFormRegisterReturn<'firstName'>
  errors?: FieldErrors<{ firstName: string }>
}

export const InputFirstName = ({ errors, register, ...props }: InputFirstNameProps) => {
  const hasFirstNameError = !!errors?.firstName

  return (
    <FormControl isInvalid={hasFirstNameError}>
      <InputGroup>
        <InputLeftElement color="gray.300">
          <Icons.User />
        </InputLeftElement>

        <Input
          variant="tcsaInput"
          isInvalid
          errorBorderColor="red.300"
          placeholder="First Name"
          {...register}
          {...props}
        />
      </InputGroup>

      {hasFirstNameError && <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>}
    </FormControl>
  )
}
