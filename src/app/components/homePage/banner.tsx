import React from 'react'
import Image from 'next/image'
import Banner from '@/images/homePage/ActiveGarden01.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function banner() {
    return (
        <div className='w-full h-screen overflow-hidden'>
            <div className='w-full h-full relative'>
                <Image src={Banner} layout='fill' objectFit='cover' alt='banner' className='w-full h-full scale-125 top-0 left-0 absolute z-[-2]' quality={100} />
                <div className='w-full h-full flex flex-row bg-black opacity-40 z-[-1] absolute top-0 left-0'>
                </div>
                <div className='w-full h-full flex flex-col items-center justify-center'>
                    <div className='w-1/2 space-y-10'>

                        <p style={{
                            textShadow: '3px 6px 2px rgba(0, 0, 0, 0.41)'
                        }} className='text-white text-5xl leading-snug uppercase'>
                            Эрүүл, идэвхтэй амьдралыг дэмжигч ACTIVE GARDEN RESIDENCE
                        </p>
                        <div className='w-auto h-auto flex flex-row items-center space-x-5'>
                            <div className='w-[73px] h-[73px] flex items-center justify-center rounded-full bg-[#c09b2d] cursor-pointer'>
                                <FontAwesomeIcon
                                    icon={faPlay}
                                    width={32}
                                    height={32}
                                    className='text-white' />
                            </div>
                            <h1 className='uppercase text-white text-lg'>Бичлэг үзэх</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
