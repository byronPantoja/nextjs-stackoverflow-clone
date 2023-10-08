import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter, Space_Grotesk as SpaceGrotesk } from 'next/font/google'

import type { Metadata } from 'next'

import './globals.css'
import { ThemeProvider } from '@/context/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

const spaceGrotesk = SpaceGrotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spacerotesk',
})

export const metadata: Metadata = {
  title: 'Stack Overflow Clone in Next.js 13',
  description: 'Stack Overflow Clone in Next.js 13',
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
