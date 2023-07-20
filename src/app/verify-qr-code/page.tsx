import { redirect } from 'next/navigation'

import { prisma } from '~/server/db'
import { Wrapper } from './components/wrapper'
import { getCurrentUser } from '~/helpers/session/server-side'

async function VerifyQrCode() {
  const user = await getCurrentUser()

  const res = await prisma.user.findUnique({
    where: { email: user?.email! },
    select: { qrStatus: true }
  })

  const qrStatus = res?.qrStatus

  if (qrStatus) redirect('/')

  return !qrStatus ? <Wrapper /> : null
}

export default VerifyQrCode
