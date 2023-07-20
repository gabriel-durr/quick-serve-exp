'use client'

import { useState } from 'react'
import { Button, HStack, PinInput, PinInputField, Stack, useToast } from '@chakra-ui/react'

import { useRouter } from 'next/navigation'

import { useQrManage } from '~/hooks/use-qr-manage'

export const PinInputs = () => {
  const router = useRouter()
  const toast = useToast({ isClosable: true, position: 'top' })

  const { validateOtpCode, changeQrStatus } = useQrManage()

  const [pinValues, setPinValues] = useState(['', '', '', '', '', ''])

  function handlePinChange(value: string, index: number) {
    const newPinValues = [...pinValues]
    newPinValues[index] = value
    setPinValues(newPinValues)
  }

  async function handleOnSubmitPin() {
    const pinCode = pinValues.join('')

    try {
      const isValid = await validateOtpCode({ token: pinCode })

      if (isValid) {
        await changeQrStatus('active')

        router.refresh()

        toast({ title: 'PIN validated sucessfully, session released 🎉' })
      }
    } catch (err) {
      toast({ title: 'Error validating PIN, please try again.', status: 'error' })
    }
  }

  const isEmptyPin = pinValues.some((pin) => pin === '')

  return (
    <Stack direction="row" spacing={6} shadow="sm" bg="blackAlpha.50" p={6} rounded="md">
      <HStack>
        <PinInput otp>
          {pinValues.map((value, index) => (
            <PinInputField
              key={index}
              value={value}
              onChange={(e) => handlePinChange(e.target.value, index)}
            />
          ))}
        </PinInput>
      </HStack>

      <Button isDisabled={isEmptyPin} colorScheme="green" onClick={handleOnSubmitPin}>
        Confirm
      </Button>
    </Stack>
  )
}
