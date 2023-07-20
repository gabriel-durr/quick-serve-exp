'use client'

import { Flex } from '@chakra-ui/react'
import { ActiveLink } from './active-link'

type MenuDataTypes = {
  id: number
  label: string
  href: string
}[]

const menuData: MenuDataTypes = [
  { id: 1, label: 'home', href: '/' },
  { id: 2, label: 'about', href: '#' },
  { id: 3, label: 'location', href: '#' },
  { id: 4, label: 'contact', href: '#' }
]

export const NavBar = () => {
  return (
    <Flex px={6} gap={10}>
      {menuData.map(({ id, label, href }) => (
        <ActiveLink key={id} href={href}>
          {label}
        </ActiveLink>
      ))}
    </Flex>
  )
}
