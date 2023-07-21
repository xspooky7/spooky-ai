import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cny-Ai',
  description: 'AI Toolkit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  </ClerkProvider>
    
  )
}