import speakeasy from '@levminer/speakeasy'

export const generateOtpSecret = (): string => {
  const secretGen = speakeasy.generateSecret()
  const secret = secretGen.ascii

  return secret
}
