import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form'

import NextLink from 'next/link'
import {
  Text,
  Link,
  Checkbox,
  FormLabel,
  FormControl,
  CheckboxProps,
  FormErrorMessage
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
          <Text fontSize="15px" p={2} lineHeight={4} color="gray.400">
            Li e concordo com os termos
            <Link as={NextLink} href="#" fontSize="13.8px" color="qse.pink" pl="8px">
              Termos de uso
            </Link>
          </Text>
        </Checkbox>
      </FormLabel>

      {hasTermsError && <FormErrorMessage>{errors?.terms?.message}</FormErrorMessage>}
    </FormControl>
  )
}
