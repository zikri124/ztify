import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navbar/navbar'
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
          <div className={"screen md:flex md:flex-row p-0 md:p-1 overflow-hidden"}>
            <div className={"fixed bottom-0 md:static md:flex-none overflow-y-hidden md:order-1 z-50"}>
              <Navbar />
            </div>
            <div className={"md:grow h-screen p-0 md:p-1 overflow-y-hidden md:order-2"}>
              <div className='bg-container h-full w-full overflow-y-auto rounded-none md:bg-neutral-900 md:rounded-xl px-0 md:px-6 pb-6 flex flex-col justify-between flex flex-col'>
                <Header />
                <div className='grow'>
                  {children}
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
