import { Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

export const RedirectRegister = () => {
  return (
    <Text
      w="full"
      fontFamily="heading"
      fontSize="sm"
      textAlign="center"
      color="gray.500"
      _dark={{ color: 'gray.50' }}
    >
      Don’t have an account yet? &nbsp;
      <Link
        href="/register"
        fontWeight="bold"
        fontSize="md"
        color="gray.700"
        _dark={{ color: 'gray.100' }}
      >
        Register
      </Link>
    </Text>
  )
}
