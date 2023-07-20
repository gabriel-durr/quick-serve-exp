import { Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

export const RedirectLogin = () => {
  return (
    <Text
      w="full"
      fontFamily="heading"
      fontSize="sm"
      textAlign="center"
      color="gray.500"
      _dark={{ color: 'gray.50' }}
    >
      Already have an account? &nbsp;
      <Link
        href="/login"
        fontWeight="bold"
        fontSize="md"
        color="gray.700"
        _dark={{ color: 'gray.100' }}
      >
        Login
      </Link>
    </Text>
  )
}
