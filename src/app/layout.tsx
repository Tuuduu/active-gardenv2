import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header/Header'
import { useState } from 'react'



/// --- App font of text 
const inter = Inter({ subsets: ['latin'] })



/// ---    1    ---///
export const metadata: Metadata = {
  title: 'Active Garden',
  description: 'Active Garden residence',
}



/// --- Root Layout --- ///
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {




  return (
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
  )
}
