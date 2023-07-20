'use client'

import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'

import { signOut } from 'next-auth/react'
import { Icons } from '~/app/components/icons'
import { Settings } from './settings'

export const MoreOptions = () => {
  async function handleSignOut() {
    try {
      await signOut()
    } catch (error) {
      console.error('SignOut Error:', error)
    }
  }

  return (
    <Menu offset={[-40, 0]}>
      {({ isOpen }) => (
        <>
          <MenuButton
            variant="unstyled"
            isActive={isOpen}
            as={Button}
            rightIcon={<Icons.MoreVertical />}
          />
          <MenuList
            minW="max"
            display="flex"
            flexDir="column"
            px={2}
            gap={1}
            bg="whiteAlpha.700"
            _dark={{ bg: 'blackAlpha.700' }}
          >
            <Settings />

            <MenuItem
              py={2}
              rounded="md"
              bg="blackAlpha.900"
              _dark={{ bg: 'whiteAlpha.900' }}
              gap={4}
              _hover={{
                color: 'qse.rubi',
                transition: 'color .2s ease',
                filter: 'brightness(.9)'
              }}
              onClick={handleSignOut}
            >
              <Icons.Logout color="qse.rubi" />
              Logout
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  )
}
