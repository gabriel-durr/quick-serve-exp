import { useForm } from 'react-hook-form'
import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { type RegisterFormProps } from '~/utils/login-schema'

import {
  InputEmail,
  InputEmailProps
} from '~/app/(authentication)/register/components/register-form/input-email'
import { FormControl, FormErrorMessage } from '@chakra-ui/react'
import { useState } from 'react'

export default {
  title: 'Input Email',
  component: InputEmail,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const {
        register,
        formState: { errors }
      } = useForm<RegisterFormProps>()

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        action('Writing to input')(event)
      }

      return Story({
        args: {
          errors,
          register: register('email', { onChange: handleChange })
        }
      })
    }
  ]
} as Meta<InputEmailProps>

export const InputEmailStandard: StoryObj<InputEmailProps> = {}

export const InputEmailWithError: StoryObj<InputEmailProps> = {
  args: {
    errors: { email: { type: 'required', message: 'Email Required' } }
  },
  render: function useFn(_) {
    const [isInvalid, setIsIvalid] = useState('')

    const {
      register,
      formState: { errors }
    } = useForm<RegisterFormProps>()

    return (
      <FormControl isInvalid={!isInvalid.length}>
        <InputEmail
          errors={errors}
          register={register('email', { onChange: (e) => setIsIvalid(e.target.value) })}
        />
        <FormErrorMessage>Email required</FormErrorMessage>
      </FormControl>
    )
  }
}
