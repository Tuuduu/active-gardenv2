import React from 'react'
import Image from 'next/image'
import FarIndecaterPageImage from '@/images/FarIndecatorImages/far2-1600x900.jpg'

export default function FarIndecatorPageImage() {
    return (
        <div>
            <Image
                alt='Far indecator image'
                src={FarIndecaterPageImage}
                className='w-full h-auto object-cover bg-cover'
                width={1600}
                height={900}
                quality={100}
            />
        </div>
    )
}
