import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form'

import {
  Input,
  InputGroup,
  useBoolean,
  InputProps,
  FormControl,
  FormErrorMessage,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react'

import { Icons } from '~/app/components/icons'

type InputPasswordProps = InputProps & {
  register: UseFormRegisterReturn<'password'>
  errors?: FieldErrors<{ password: string }>
}

export const InputPassword = ({ errors, register }: InputPasswordProps) => {
  const [isVisible, setVisible] = useBoolean(false)

  const hasPasswordError = !!errors?.password

  return (
    <FormControl isInvalid={hasPasswordError}>
      <InputGroup>
        <InputLeftElement color="gray.300">
          <Icons.Lock />
        </InputLeftElement>
        <Input
          type={isVisible ? 'text' : 'password'}
          variant="qseInput"
          placeholder="Senha"
          {...register}
        />

        <InputRightElement cursor="pointer" color="gray.400" onClick={setVisible.toggle}>
          {isVisible ? <Icons.Show /> : <Icons.Hide />}
        </InputRightElement>
      </InputGroup>

      {hasPasswordError && <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>}
    </FormControl>
  )
}
