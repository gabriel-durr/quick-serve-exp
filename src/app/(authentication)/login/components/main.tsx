'use client'

import { Heading, Stack, Box, VStack, HStack, Image } from '@chakra-ui/react'

import { LoginForm } from './login-form'
import { Ordering } from '~/animations/ordering'
import { OrAuth } from '../../components/or-auth'
import { ChangeAuthPages } from '../../components/change-auth-pages'
import { SiginWithGoogle } from '../../components/sigin-with-google'

export const Main = () => {
  return (
    <Stack
      w="100%"
      spacing="0"
      bg="qse.almostWhite"
      align="center"
      justify="center"
      css={{
        height: ['100vh', '100dvh']
      }}
    >
      <HStack>
        <Ordering styles={{ width: '350px' }} />
        <VStack pos="relative" w="max" rounded="xl" p="28" shadow="sm">
          <Image alt="qse logo" src="/qse-brand.png" width="62px" pos="absolute" left="0" top="0" />
          <Heading
            as="h1"
            textAlign="center"
            fontFamily="heading"
            size="xl"
            color="gray.600"
            lineHeight="58px"
            mb={8}
          >
            Boas-vindas de volta,
            <br />
            Saboreie a praticidade!
          </Heading>

          <LoginForm />

          <Box>
            <OrAuth />
            <VStack spacing="14">
              <SiginWithGoogle title="Fazer login com" />
              <ChangeAuthPages
                href="/register"
                titleLink="Registre-se"
                titleQuest="Não tem uma conta?"
              />
            </VStack>
          </Box>
        </VStack>
      </HStack>
    </Stack>
  )
}
