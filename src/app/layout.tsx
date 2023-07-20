import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'], display: 'swap' })

export const metadata: Metadata = {
  title: 'QUICK SERVE EXP',
  description: 'Project with support for google authentication and multi-factor feature (MFA)',
  icons: {
    icon: {
      rel: 'icon',
      sizes: '32x32',
      url: '/qse-icon.png'
    }
  }
}

import { Providers } from '~/providers'

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
