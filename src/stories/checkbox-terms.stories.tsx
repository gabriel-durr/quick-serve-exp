import { useForm } from 'react-hook-form'
import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { useState } from 'react'

import { type RegisterFormProps } from '~/utils/login-schema'

import {
  CheckboxTerms,
  CheckboxTermsProps
} from '~/app/(authentication)/register/components/register-form/checkbox-terms'
import { FormControl, FormErrorMessage } from '@chakra-ui/react'

export default {
  title: 'Input Checkbox Terms',
  component: CheckboxTerms,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const {
        register,
        formState: { errors }
      } = useForm<RegisterFormProps>()

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked
        action(checked ? 'checked' : 'unchecked')(event)
      }

      return Story({
        args: {
          errors,
          register: register('terms', { onChange: handleChange })
        }
      })
    }
  ]
} as Meta<CheckboxTermsProps>

export const CheckboxStandard: StoryObj<CheckboxTermsProps> = {}

export const CheckboxWithError: StoryObj<CheckboxTermsProps> = {
  args: {
    errors: { terms: { type: 'required', message: 'You must check the terms box' } }
  },
  render: function useFn(_) {
    const [isInvalid, setIsIvalid] = useState(false)

    const {
      register,
      formState: { errors }
    } = useForm<RegisterFormProps>()

    return (
      <FormControl isInvalid={!isInvalid}>
        <CheckboxTerms
          errors={errors}
          register={register('terms', { onChange: () => setIsIvalid(!isInvalid) })}
        />
        <FormErrorMessage>You must check the terms box</FormErrorMessage>
      </FormControl>
    )
  }
}
