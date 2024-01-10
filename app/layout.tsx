import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import InnerMainLayout from '../components/inner-layout'
import { ThemeProvider } from '@/components/theme-provider'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ztify',
  description: 'An music app for your daily, connect with your spotify account',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
        >
          <InnerMainLayout>
            {children}
          </InnerMainLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
