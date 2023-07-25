import { useForm } from 'react-hook-form'
import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { type RegisterFormProps } from '~/utils/login-schema'

import {
  InputFullName,
  InputFulllNameProps
} from '~/app/(authentication)/register/components/register-form/input-full-name'
import { FormControl, FormErrorMessage } from '@chakra-ui/react'
import { useState } from 'react'

export default {
  title: 'Input First Name',
  component: InputFullName,
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
          register: register('fullName', { onChange: handleChange })
        }
      })
    }
  ]
} as Meta<InputFulllNameProps>

export const InputEmailStandard: StoryObj<InputFulllNameProps> = {}

export const InputEmailWithError: StoryObj<InputFulllNameProps> = {
  args: {
    errors: { fullName: { type: 'required', message: 'First Name Required' } }
  },
  render: function useFn(_) {
    const {
      register,
      formState: { errors }
    } = useForm<RegisterFormProps>()

    const [isInvalid, setIsIvalid] = useState('')

    return (
      <FormControl isInvalid={!isInvalid.length}>
        <InputFullName
          errors={errors}
          register={register('fullName', { onChange: (e) => setIsIvalid(e.target.value) })}
        />
        <FormErrorMessage>First name required</FormErrorMessage>
      </FormControl>
    )
  }
}
