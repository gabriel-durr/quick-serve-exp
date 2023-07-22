import { Icons } from '~/app/components/icons'

import { signOut } from 'next-auth/react'
import { MenuItem } from '@chakra-ui/react'

export const SignOut = () => {
  async function handleSignOut() {
    try {
      console.log('clicado')
      await signOut()
    } catch (error) {
      console.error('SignOut Error:', error)
    }
  }

  return (
    <MenuItem
      rounded="md"
      bg="blackAlpha.900"
      onClick={handleSignOut}
      gap={4}
      _dark={{ bg: 'whiteAlpha.900' }}
      _hover={{ color: 'qse.rubi', transition: 'all .2s ease', filter: 'brightness(.9)' }}
    >
      <Icons.Logout color="qse.rubi" />
      Logout
    </MenuItem>
  )
}
