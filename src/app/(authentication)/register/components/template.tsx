'use client'

import { Box, Heading, Text, VStack } from '@chakra-ui/react'

import { RegisterForm } from './register-form'
import { RedirectLogin } from './redirect-login'
import { OrAuth } from '../../components/or-auth'
import { WrapperAuthProviders } from '../../components/wrapper-auth-providers'

const Template = () => {
  return (
    <VStack
      w="100%"
      align="center"
      spacing="0"
      pt={14}
      pb={14}
      px={6}
      css={{
        height: ['100vh', '100dvh']
      }}
    >
      <Heading as="h1" textAlign="center" fontFamily="heading" size="lg" lineHeight="28px" mb="8">
        Create an Account
        <br />
        <Text as="span" fontSize="sm" fontFamily="body" fontWeight="normal">
          Join the{' '}
          <Text letterSpacing="tight" as="span" fontFamily="mono">
            {' '}
            QUICK SERVE EXP 🥰
          </Text>
        </Text>
      </Heading>

      <RegisterForm />

      <Box>
        <OrAuth />

        <WrapperAuthProviders />
        <RedirectLogin />
      </Box>
    </VStack>
  )
}

export default Template
