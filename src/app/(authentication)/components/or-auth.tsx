import { Text } from '@chakra-ui/react'

export const OrAuth = () => {
  return (
    <Text
      w={96}
      my="8"
      gap={3}
      display="flex"
      alignItems="center"
      lineHeight="20px"
      _before={{
        content: '""',
        flex: 1,
        borderBottom: '1px solid',
        borderColor: '#e6e6e6'
      }}
      _after={{
        content: '""',
        flex: 1,
        borderBottom: '1px solid',
        borderColor: '#e6e6e6'
      }}
    >
      Ou
    </Text>
  )
}
