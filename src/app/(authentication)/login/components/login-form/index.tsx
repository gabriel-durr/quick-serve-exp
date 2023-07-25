'use client'

import { signIn } from 'next-auth/react'
import { SyncLoader } from 'react-spinners'
import { zodResolver } from '@hookform/resolvers/zod'
import { VStack, Button, useToast } from '@chakra-ui/react'
import { useForm, UseFormRegister, FieldErrors } from 'react-hook-form'

import { InputEmail } from './input-email'
import { InputPassword } from './input-password'
import { signInForm, type SignInFormProps } from '~/utils/login-schema'

export type LoginFormInputs = {
  errors: FieldErrors<SignInFormProps>
  register: UseFormRegister<SignInFormProps>
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid, isSubmitting }
  } = useForm<SignInFormProps>({ resolver: zodResolver(signInForm) })

  const toast = useToast({ position: 'top', isClosable: true })

  const isErrorExists = Boolean(Object.keys(errors).length)
  const isDisabled = (isSubmitted && !isValid) || isErrorExists

  async function onSubmit({ email, password }: SignInFormProps) {
    try {
      const status = await signIn('credentials', {
        email,
        password,
        redirect: false
      })

      const allowedStatus = [404, 401]
      const error = JSON.parse(status?.error!) as { status: number; message: string }

      const statusExists = allowedStatus.includes(error.status)

      if (statusExists) {
        toast({ title: error.message, status: 'error' })
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <VStack as="form" spacing="20" w="96" onSubmit={handleSubmit(onSubmit)}>
      <VStack w="100%" spacing="4" flex="1">
        <InputEmail errors={errors} register={register} />

        <InputPassword errors={errors} register={register} />
      </VStack>
      <Button
        type="submit"
        variant="qseSolidBtn"
        w="full"
        isDisabled={isDisabled}
        isLoading={isSubmitting}
        spinner={<SyncLoader size={4} color="pink" />}
      >
        Login
      </Button>
    </VStack>
  )
}
