import React from 'react'
import Image from 'next/image'
import fix from '@/images/BlogImages/giphy.gif'

export default function contact() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Image
        alt='server error'
        src={fix}
        quality={100}

        className='w-auto h-auto '
      />
    </div>
  )
}
