'use client'

import { useRouter } from 'next/navigation'
import { Flex, HStack, Image, FlexProps, Avatar, Box } from '@chakra-ui/react'

import { NavBar } from './nav-bar'
import { SignOut } from './sign-out'
import { DarkMode } from './dark-mode'
import { useGetClientSession } from '~/helpers/session/client'

export const Header = ({ ...props }: FlexProps) => {
  const router = useRouter()
  const { data: session } = useGetClientSession()

  const user = session?.user

  function handleClickProfile() {
    router.push('/profile')
  }

  return (
    <Flex
      as="header"
      px={32}
      w="full"
      h="100px"
      bg="gray.50"
      color="gray.800"
      align="center"
      justify="space-between"
      _dark={{ bg: 'qse.blackMd', color: 'gray.50' }}
      {...props}
    >
      <Box h={16} w="200px">
        <Image boxSize="full" alt="QUICK SERVE EXP LOGO" src="qse-brand.png" objectFit="contain" />
      </Box>

      <NavBar />

      <HStack spacing={8}>
        <Avatar
          pos="relative"
          size="md"
          overflow="hidden"
          cursor="pointer"
          name={user?.name ?? ''}
          src={user?.image ?? ''}
          onClick={handleClickProfile}
          _hover={{
            '&::before': {
              content: '"Perfil"',
              bottom: 0,
              fontSize: 10,
              pos: 'absolute',
              w: 'full',
              h: 8,
              bg: 'blackAlpha.500'
            }
          }}
        />
        <HStack spacing={32}>
          <SignOut />
          <DarkMode />
        </HStack>
      </HStack>
    </Flex>
  )
}
