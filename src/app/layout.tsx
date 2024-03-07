import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header/Header'
import StoreProvider from './StoreProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Active Garden Residence | Live more...',
  description: 'Active Garden residence',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${inter.className}w-full h-auto flex lg:flex-row flex-col`}>
          <div className='lg:w-1/6 w-full'>
            <Header />
          </div>
          <div className='lg:w-5/6 w-full'>
            {children}
          </div>
        </body>
      </html>
    </StoreProvider>
  )
}
