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

export type InputFulllNameProps = InputProps & {
  register: UseFormRegisterReturn<'fullName'>
  errors?: FieldErrors<{ fullName: string }>
}

export const InputFullName = ({ errors, register, ...props }: InputFulllNameProps) => {
  const hasFirstNameError = !!errors?.fullName

  return (
    <FormControl isInvalid={hasFirstNameError}>
      <InputGroup>
        <InputLeftElement color="gray.300">
          <Icons.User />
        </InputLeftElement>

        <Input
          variant="qseInput"
          isInvalid
          errorBorderColor="red.300"
          placeholder="Nome Completo"
          {...register}
          {...props}
        />
      </InputGroup>

      {hasFirstNameError && <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>}
    </FormControl>
  )
}
