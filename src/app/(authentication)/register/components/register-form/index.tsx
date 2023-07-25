'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { VStack, useToast } from '@chakra-ui/react'

import { api } from '~/server/api'
import { InputEmail } from './input-email'
import { ButtonSubmit } from './button-submit'
import { InputPassword } from './input-password'
import { CheckboxTerms } from './checkbox-terms'
import { InputFullName } from './input-full-name'
import { registerForm, RegisterFormProps } from '~/utils/login-schema'

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid, isSubmitting }
  } = useForm<RegisterFormProps>({ resolver: zodResolver(registerForm) })

  const router = useRouter()
  const toast = useToast({ position: 'top' })

  const isErrorExists = Boolean(Object.keys(errors).length)
  const isDisabled = (isSubmitted && !isValid) || isErrorExists

  async function onSubmit({ fullName, email, password }: RegisterFormProps) {
    try {
      const res = await api.post('/sign-up', { fullName, email, password })

      if (res.status === 201) router.push('/login')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast({ title: error.response?.data, status: 'error' })
      }
    }
  }

  return (
    <VStack as="form" noValidate spacing="20" w="96" onSubmit={handleSubmit(onSubmit)}>
      <VStack w="100%" spacing="4" flex="1">
        <InputFullName errors={errors} register={register('fullName')} />

        <InputEmail errors={errors} register={register('email')} />

        <InputPassword errors={errors} register={register('password')} />

        <CheckboxTerms errors={errors} register={register('terms')} />
      </VStack>

      <ButtonSubmit isDisabled={isDisabled} isSubmitting={isSubmitting} />
    </VStack>
  )
}
