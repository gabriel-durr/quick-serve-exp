'use client'

import { usePathname, useRouter } from 'next/navigation'
import { PropsWithChildren, MouseEvent } from 'react'

import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

type ActiveLinkProps = {
  href: string
}

export const ActiveLink = ({ children, href }: PropsWithChildren<ActiveLinkProps>) => {
  const router = useRouter()
  const isActivePath = usePathname() === href

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Link
      as={NextLink}
      href={href}
      fontSize={16}
      lineHeight="shorter"
      textTransform="uppercase"
      fontFamily="heading"
      fontWeight="medium"
      color={isActivePath ? 'qse.rubi' : 'gray.500'}
      _dark={{ color: isActivePath ? 'qse.rubi' : 'gray.500' }}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}
