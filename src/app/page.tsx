import { redirect } from 'next/navigation'

import { prisma } from '~/server/db'
import { Main } from './components/main'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { getCurrentUser } from '~/helpers/session/server-side'

async function Home() {
  const user = await getCurrentUser()

  const res = await prisma.user.findUnique({
    where: { email: user?.email! },
    select: { qrStatus: true }
  })

  const qrStatus = res?.qrStatus

  if (!qrStatus) redirect('/verify-qr-code')

  return qrStatus ? (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  ) : null
}

export default Home
