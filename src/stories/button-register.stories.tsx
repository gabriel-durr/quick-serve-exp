import { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'
import {
  ButtonSubmit,
  ButtonSubmitProps
} from '~/app/(authentication)/register/components/register-form/button-submit'

export default {
  title: 'Button Register User',
  component: ButtonSubmit,
  args: { w: '384px' },
  tags: ['autodocs'],
  argTypes: { onClick: { action: 'clicked' } }
} as Meta<ButtonSubmitProps>

export const ButtonStandard: StoryObj<ButtonSubmitProps> = {}

export const ButtonSubmitting: StoryObj<ButtonSubmitProps> = {
  argTypes: { onClick: { action: 'clicked' } },
  render: function useFn(args) {
    const [isLoading, setIsLoading] = useState(false)

    async function handleClick() {
      setIsLoading(true)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsLoading(false)
    }

    return <ButtonSubmit {...args} isSubmitting={isLoading} onClick={handleClick} />
  }
}

export const ButtonWithError: StoryObj<ButtonSubmitProps> = {
  args: { isDisabled: true }
}
