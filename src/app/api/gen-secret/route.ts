import { NextResponse } from 'next/server'

import { prisma } from '~/server/db'
import { generateOtpSecret } from '~/utils/generate-otp-secret'

export async function POST(request: Request) {
  const { email } = await request.json()

  try {
    if (!email) return NextResponse.json('Email is required to ask for the secret')

    const user = await prisma.user.findUnique({
      where: { email },
      select: { secret: true }
    })

    if (user?.secret)
      return NextResponse.json('User already has a registered secret', { status: 409 })

    const secret = generateOtpSecret()

    const updateUserSecret = await prisma.user.update({
      where: { email },
      data: { secret },
      select: { secret: true }
    })

    return NextResponse.json(
      { secret: updateUserSecret.secret, message: 'Secret created and returned sucessfully' },
      { status: 201 }
    )
  } catch (err) {
    return NextResponse.json('Error fetching the secret', { status: 500 })
  }
}
