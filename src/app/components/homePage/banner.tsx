import React from 'react'
import Image from 'next/image'
import Banner from '@/images/homePage/ActiveGarden01.jpg'

export default function banner() {
    return (
        <div className='w-full h-auto overflow-hidden'>
            <Image src={Banner} width={2000} alt='banner' height={2000} className='w-full h-full object-cover' quality={100} />
        </div>
    )
}
