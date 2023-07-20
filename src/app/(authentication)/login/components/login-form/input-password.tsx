import { LoginFormInputs } from '.'

import {
  Input,
  useBoolean,
  InputGroup,
  FormControl,
  FormErrorMessage,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react'

import { Icons } from '~/app/components/icons'

type InputPasswordProps = LoginFormInputs

export const InputPassword = ({ errors, register }: InputPasswordProps) => {
  const [isVisible, setVisible] = useBoolean(false)

  return (
    <FormControl isInvalid={!!errors.password}>
      <InputGroup>
        <InputLeftElement color="gray.300">
          <Icons.Lock />
        </InputLeftElement>
        <Input
          type={isVisible ? 'text' : 'password'}
          variant="tcsaInput"
          placeholder="Password"
          {...register('password')}
        />

        <InputRightElement cursor="pointer" color="gray.400" onClick={setVisible.toggle}>
          {isVisible ? <Icons.Show /> : <Icons.Hide />}
        </InputRightElement>
      </InputGroup>

      <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
    </FormControl>
  )
}
