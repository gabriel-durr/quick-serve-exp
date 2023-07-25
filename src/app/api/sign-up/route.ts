import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

import { prisma } from '~/server/db'
import { generateOtpSecret } from '~/utils/generate-otp-secret'

export async function POST(request: Request) {
  try {
    const { fullName, email, password } = await request.json()

    const userExists = await prisma.user.findUnique({
      where: { email }
    })

    if (userExists) return NextResponse.json('User already registered', { status: 409 })

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    const secret = generateOtpSecret()

    const createUser = await prisma.user.create({
      data: {
        name: fullName,
        email,
        secret,
        password: hashedPassword
      }
    })

    if (createUser) return NextResponse.json('User created sucessfully', { status: 201 })
  } catch (err) {
    return NextResponse.json('Error creating user', { status: 500 })
  }
}
