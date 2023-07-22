'use client'

import { Menu, MenuButton, MenuList, MenuDivider, Button } from '@chakra-ui/react'

import { SignOut } from './sign-out'
import { Settings } from './settings'
import { Icons } from '~/app/components/icons'

export const MoreOptions = () => {
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
            bg="whiteAlpha.700"
            _dark={{ bg: 'blackAlpha.700' }}
          >
            <Settings />
            <MenuDivider />
            <SignOut />
          </MenuList>
        </>
      )}
    </Menu>
  )
}
