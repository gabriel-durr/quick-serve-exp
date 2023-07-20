'use client'
import { Button, Center, useColorMode } from '@chakra-ui/react'

import { Icons } from '~/app/components/icons'

export const DarkMode = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  const currentMode = colorMode === 'dark'

  return (
    <Button variant="unstyled" rounded="full" onClick={() => toggleColorMode()}>
      <Center>{currentMode ? <Icons.Moon width="22px" /> : <Icons.Sun />}</Center>
    </Button>
  )
}
