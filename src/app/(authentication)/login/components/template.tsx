'use client'

import { Heading, Text, Stack, Box } from '@chakra-ui/react'

import { LoginForm } from './login-form'
import { OrAuth } from '../../components/or-auth'
import { RedirectRegister } from './redirect-register'
import { WrapperAuthProviders } from '../../components/wrapper-auth-providers'

const Template = () => {
  return (
    <Stack
      spacing="0"
      pt={14}
      pb="14"
      px="6"
      w="100%"
      align="center"
      css={{
        height: ['100vh', '100dvh']
      }}
    >
      <Heading as="h1" textAlign="center" fontFamily="heading" size="lg" lineHeight="28px" mb={8}>
        Welcome back
        <br />
        <Text as="span" fontSize="sm" fontWeight="normal">
          Sign in to your account
        </Text>
      </Heading>

      <LoginForm />

      <Box>
        <OrAuth />
        <WrapperAuthProviders />
        <RedirectRegister />
      </Box>
    </Stack>
  )
}

export default Template
