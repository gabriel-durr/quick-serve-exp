import { useForm } from 'react-hook-form'
import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { type RegisterFormProps } from '~/utils/login-schema'

import {
  InputLastName,
  InputLastNameProps
} from '~/app/(authentication)/register/components/register-form/input-last-name'
import { FormControl, FormErrorMessage } from '@chakra-ui/react'
import { useState } from 'react'

export default {
  title: 'Input Last Name',
  component: InputLastName,
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
          register: register('lastName', { onChange: handleChange })
        }
      })
    }
  ]
} as Meta<InputLastNameProps>

export const InputEmailStandard: StoryObj<InputLastNameProps> = {}

export const InputEmailWithError: StoryObj<InputLastNameProps> = {
  args: {
    errors: { lastName: { type: 'required', message: 'Last Name Required' } }
  },
  render: function useFn(_) {
    const {
      register,
      formState: { errors }
    } = useForm<RegisterFormProps>()

    const [isInvalid, setIsIvalid] = useState('')

    return (
      <FormControl isInvalid={!isInvalid.length}>
        <InputLastName
          errors={errors}
          register={register('lastName', { onChange: (e) => setIsIvalid(e.target.value) })}
        />
        <FormErrorMessage>Last name required</FormErrorMessage>
      </FormControl>
    )
  }
}
