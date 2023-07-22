import { useEffect, useState } from 'react'
import speakeasy from '@levminer/speakeasy'

import { api } from '~/server/api'
import { useGetClientSession } from '~/helpers/session/client'

export const useQrManage = () => {
  const { data: session } = useGetClientSession()
  const [secret, setSecret] = useState(session?.user.secret)

  const generateOtpAuth = async () => {
    if (secret === null) {
      try {
        const res = await api.post('/gen-secret', { email: session?.user.email })

        if (!res.data.secret) throw new Error('No Secret Returned')

        setSecret(res.data.secret)
      } catch (error) {
        console.error(error)
      }
    }

    if (secret) {
      const thirtySeconds = 30

      const otpAuthUrl = speakeasy.otpauthURL({
        secret: secret,
        label: 'QUICK SERVE EXP',
        issuer: 'QUICK SERVE EXP',
        algorithm: 'sha1',
        period: thirtySeconds
      })

      return otpAuthUrl
    }
  }

  const validateOtpCode = async ({ token }: Record<'token', string>) => {
    const isValid = speakeasy.totp.verify({
      token,
      secret: secret!,
      encoding: 'ascii',
      algorithm: 'sha1'
    })

    if (!isValid) throw new Error('The entered PIN did not pass validation')

    return isValid
  }

  const changeQrStatus = async (type: 'active' | 'inactive'): Promise<boolean> => {
    const res = await api.post('/qr-status', { secret, type })

    return res.data.qrStatus
  }

  const getQrStatus = async (): Promise<boolean> => {
    const res = await api.get('/qr-status')

    return res.data.qrStatus
  }

  useEffect(() => {
    setSecret(session?.user.secret)
  }, [session])

  return { generateOtpAuth, validateOtpCode, changeQrStatus, getQrStatus }
}
