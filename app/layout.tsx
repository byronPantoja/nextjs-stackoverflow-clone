import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
 
export const metadata = {
  title: 'Stack Overflow Clone in Next.js 13',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}