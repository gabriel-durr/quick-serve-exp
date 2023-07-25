import { signIn } from 'next-auth/react'
import { Button } from '@chakra-ui/react'

import { Icons } from '~/app/components/icons'

type SiginWithGoogleProps = {
  title: string
}

export const SiginWithGoogle = ({ title }: SiginWithGoogleProps) => {
  async function handleOnSigIn(provider: string) {
    try {
      await signIn(provider, { redirect: false })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Button
      variant="qseSolidBtn"
      bg="transparent"
      border="1px solid gray"
      gap="4"
      color="gray.700"
      _hover={{ bg: 'gray.50' }}
      rightIcon={<Icons.Google style={{ marginBottom: '4px' }} />}
      onClick={() => handleOnSigIn('google')}
    >
      {title}
    </Button>
  )
}
