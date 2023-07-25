import { Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

type ChangeAuthPagesProps = {
  titleQuest: string
  titleLink: string
  href: string
}

export const ChangeAuthPages = ({ titleQuest, titleLink, href }: ChangeAuthPagesProps) => {
  return (
    <Text
      w="full"
      fontFamily="heading"
      fontSize="md"
      textAlign="center"
      color="gray.500"
      _dark={{ color: 'gray.50' }}
    >
      {titleQuest} &nbsp;
      <Link
        href={href}
        fontWeight="bold"
        fontSize="md"
        color="gray.700"
        _dark={{ color: 'gray.100' }}
      >
        {titleLink}
      </Link>
    </Text>
  )
}
