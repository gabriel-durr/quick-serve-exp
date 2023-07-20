import { useForm } from 'react-hook-form'
import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { type RegisterFormProps } from '~/utils/login-schema'

import {
  InputFirstName,
  InputFirstNameProps
} from '~/app/(authentication)/register/components/register-form/input-first-name'
import { FormControl, FormErrorMessage } from '@chakra-ui/react'
import { useState } from 'react'

export default {
  title: 'Input First Name',
  component: InputFirstName,
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
          register: register('firstName', { onChange: handleChange })
        }
      })
    }
  ]
} as Meta<InputFirstNameProps>

export const InputEmailStandard: StoryObj<InputFirstNameProps> = {}

export const InputEmailWithError: StoryObj<InputFirstNameProps> = {
  args: {
    errors: { firstName: { type: 'required', message: 'First Name Required' } }
  },
  render: function useFn(_) {
    const {
      register,
      formState: { errors }
    } = useForm<RegisterFormProps>()

    const [isInvalid, setIsIvalid] = useState('')

    return (
      <FormControl isInvalid={!isInvalid.length}>
        <InputFirstName
          errors={errors}
          register={register('firstName', { onChange: (e) => setIsIvalid(e.target.value) })}
        />
        <FormErrorMessage>First name required</FormErrorMessage>
      </FormControl>
    )
  }
}
