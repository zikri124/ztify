import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navbar/navbar'
import Container from '../components/ui/container'
import Header from '@/components/header/header'
import Footer from '@/components/ui/footer'

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
          <div className={"screen flex flex-col md:flex-row p-0 md:p-1 overflow-hidden"}>
            <div className={"flex-none overflow-y-hidden order-2 md:order-1"}>
              <Navbar />
            </div>
            <div className={"grow h-screen p-0 md:p-1 overflow-y-hidden order-1 md:order-2"}>
              <Container>
                <Header />
                {children}
                <Footer />
              </Container>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
