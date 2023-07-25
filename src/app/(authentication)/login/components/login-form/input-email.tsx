import { LoginFormInputs } from '.'

import {
  Input,
  InputGroup,
  FormControl,
  FormErrorMessage,
  InputLeftElement
} from '@chakra-ui/react'

import { Icons } from '~/app/components/icons'

type InputEmailProps = LoginFormInputs

export const InputEmail = ({ errors, register }: InputEmailProps) => (
  <FormControl isInvalid={!!errors.email}>
    <InputGroup>
      <InputLeftElement color="gray.300">
        <Icons.Message />
      </InputLeftElement>

      <Input variant="qseInput" placeholder="Email" {...register('email')} />
    </InputGroup>

    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
  </FormControl>
)
