import { NextResponse } from 'next/server'

import { prisma } from '~/server/db'

type BodyProps = {
  secret: string
  type: 'active' | 'inactive'
}

export async function POST(request: Request) {
  const { secret, type }: BodyProps = await request.json()

  const changedType = type === 'active' ? true : false

  try {
    const user = await prisma.user.findFirst({ where: { secret }, select: { email: true } })

    if (!user?.email) return NextResponse.json('No user found with this scret', { status: 404 })

    const res = await prisma.user.update({
      where: { email: user.email },
      data: { qrStatus: changedType },
      select: { qrStatus: true }
    })

    if (!res)
      return NextResponse.json({ message: 'Error when changing QR Code Status' }, { status: 400 })

    return NextResponse.json(
      { message: 'QR Code changed sucessfully', qrStatus: res.qrStatus },
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json('Error when changing QR Code', { status: 500 })
  }
}
