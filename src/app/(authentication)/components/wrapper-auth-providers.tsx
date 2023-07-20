import { signIn } from 'next-auth/react'
import { HStack, Button } from '@chakra-ui/react'

import { Icons } from '~/app/components/icons'

export const WrapperAuthProviders = () => {
  async function handleOnSigIn(provider: string) {
    try {
      await signIn(provider, { redirect: false })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <HStack w="full" justify="center" spacing={8} mt="2" mb="7">
      <Button onClick={() => handleOnSigIn('google')} h="auto" variant="unstyled">
        <Icons.Google />
      </Button>

      <Button onClick={() => handleOnSigIn('github')} h="auto" variant="unstyled">
        <Icons.Github />
      </Button>
    </HStack>
  )
}
