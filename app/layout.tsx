import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FrontLine - The most productive developers paradise',
  description:
    'Easy to follow and easier to copy utilities for web development',
  metadataBase: new URL('https://frontline-nine.vercel.app'),
  openGraph: {
    title: 'FrontLine - FrontLine - The most productive developers paradise',
    description:
      'Easy to follow and easier to copy utilities for web development',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'FrontLine - The most productive developers paradise',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Toaster position='bottom-left' richColors />
      </body>
    </html>
  )
}