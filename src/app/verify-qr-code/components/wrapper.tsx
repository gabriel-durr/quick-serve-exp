'use client'

import { Suspense } from 'react'
import { signOut } from 'next-auth/react'
import { VStack, Heading, Text, Button } from '@chakra-ui/react'

import { QrCode } from './qr-code'
import { PinInputs } from './pin-inputs'
import { Icons } from '~/app/components/icons'
import { useQrManage } from '~/hooks/use-qr-manage'
import { QseLoading } from '~/animations/qse-loading'

export const Wrapper = async () => {
  const { generateOtpAuth } = useQrManage()

  const otpAuthUrl = await generateOtpAuth()

  async function handleSignOut() {
    try {
      await signOut()
    } catch (error) {
      console.error('SignOut Error:', error)
    }
  }

  return (
    <VStack
      minW="100vw"
      minH="100vh"
      bg="white"
      py={32}
      align="center"
      pos="relative"
      color="gray.900"
    >
      <Button
        pos="absolute"
        variant="unstyled"
        top={8}
        right={28}
        borderRadius="full"
        onClick={handleSignOut}
      >
        <Icons.Logout />
      </Button>
      <Suspense fallback={<QseLoading />}>
        {otpAuthUrl && (
          <VStack spacing={12}>
            <Heading
              as="h1"
              mb={8}
              size="lg"
              lineHeight="28px"
              textAlign="center"
              fontFamily="heading"
            >
              I Scanned for validation
              <br />
              <Text as="span" fontSize="sm" fontWeight="normal">
                This is important for the security of your data
              </Text>
            </Heading>

            <QrCode otpAuthUrl={otpAuthUrl} />
            <PinInputs />
          </VStack>
        )}
      </Suspense>
    </VStack>
  )
}
