'use client'

import { Icons } from '~/app/components/icons'

import { signOut } from 'next-auth/react'
import { IconButton } from '@chakra-ui/react'

export const SignOut = () => {
  async function handleSignOut() {
    try {
      await signOut()
    } catch (error) {
      console.error('SignOut Error:', error)
    }
  }

  return (
    <IconButton
      variant="unstyled"
      rounded="md"
      p="8px 12px"
      fontSize="md"
      color="qse.rubi"
      aria-label="button de sair da conta"
      icon={<Icons.Logout color="qse.rubi" width="24px" />}
      _hover={{ transition: 'all .2s ease', filter: 'contrast(3)' }}
      onClick={handleSignOut}
    />
  )
}
