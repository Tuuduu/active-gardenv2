import React from 'react'
import Image from 'next/image'
import fix from '@/images/BlogImages/giphy.gif'
import ContactField from './contactUsWidgets/ContactField'
import backgroundImage from '@/images/homePage/background-1-1_yppyx6.png'

export default function contact() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center relative'>
      <Image
        alt="banner"
        src={backgroundImage}
        width={1000}
        height={200}
        quality={100}
        className="w-full h-screen absolute object-cover z-[-1]" />
      <ContactField />
    </div>
  )
}
