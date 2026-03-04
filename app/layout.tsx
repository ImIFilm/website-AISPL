import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'AI Safety Polska - Budujemy bezpieczną przyszłość AI',
  description:
    'AI Safety Polska to społeczność naukowców, działaczy i pasjonatów skupiona na bezpieczeństwie sztucznej inteligencji.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo-aispl.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B132B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
