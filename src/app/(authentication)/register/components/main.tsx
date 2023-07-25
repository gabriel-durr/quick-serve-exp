'use client'

import { Heading, Stack, Box, VStack, HStack, Image } from '@chakra-ui/react'

import { RegisterForm } from './register-form'
import { OrAuth } from '../../components/or-auth'
import { SellingProducts } from '~/animations/selling-products'
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
        <SellingProducts styles={{ width: '200px' }} />
        <VStack pos="relative" w="max" rounded="xl" p="24" shadow="sm">
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
            Junte-se à nossa família de sabores!
          </Heading>

          <RegisterForm />

          <Box>
            <OrAuth />
            <VStack spacing="14">
              <SiginWithGoogle title="Criar conta com" />
              <ChangeAuthPages href="/login" titleLink="Entrar" titleQuest="Já tem uma conta?" />
            </VStack>
          </Box>
        </VStack>
      </HStack>
    </Stack>
  )
}
