import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form'

import {
  Checkbox,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  CheckboxProps
} from '@chakra-ui/react'

export type CheckboxTermsProps = CheckboxProps & {
  register: UseFormRegisterReturn<'terms'>
  errors?: FieldErrors<{ terms: string }>
}

export const CheckboxTerms = ({ errors, register }: CheckboxTermsProps) => {
  const hasTermsError = !!errors?.terms

  return (
    <FormControl isInvalid={hasTermsError}>
      <FormLabel>
        <Checkbox
          display="flex"
          alignItems="center"
          aria-checked={hasTermsError ? 'true' : 'false'}
          {...register}
        >
          <Text fontSize="sm" p={2} lineHeight={4} fontFamily="mono" color="gray.400">
            By continuing you accept our Privacy Policy and Term of Use
          </Text>
        </Checkbox>
      </FormLabel>

      {hasTermsError && <FormErrorMessage>{errors?.terms?.message}</FormErrorMessage>}
    </FormControl>
  )
}
