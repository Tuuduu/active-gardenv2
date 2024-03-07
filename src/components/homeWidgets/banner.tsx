"use client"
import React from 'react'
import Image from 'next/image'
import Banner from '@/images/homePage/ActiveGarden01.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function banner() {


    return (
        <div className='w-full h-screen overflow-hidden'>
            <div className='w-full h-full relative'>
                <Image src={Banner} layout='fill' objectFit='cover' alt='banner' className='w-full h-full md:scale-125 scale-100 top-0 left-0 absolute z-[-2]' quality={100} />
                <div className='w-full h-full flex flex-row bg-black opacity-40 z-[-1] absolute top-0 left-0'>
                </div>
                <div className='w-full h-full flex flex-col items-center justify-center'>
                    <div className='w-1/2 space-y-10'>

                        <p style={{
                            textShadow: '3px 6px 2px rgba(0, 0, 0, 0.41)'
                        }} className='text-white md:text-5xl sm:text-3xl text-2xl leading-snug uppercase'>

                            Эрүүл, идэвхтэй амьдралыг дэмжигч ACTIVE GARDEN RESIDENCE

                        </p>
                        <div className='group w-auto h-auto flex flex-row items-center space-x-5'>
                            <div className='md:w-[73px] md:h-[73px] sm:w-[60px] sm:h-[60px] w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[#c09b2d] cursor-pointer transition duration-300 ease-in-out hover:scale-110'>
                                <FontAwesomeIcon
                                    icon={faPlay}
                                    className='text-white md:w-4 w-[14px] h-auto transition duration-300 ease-in-out group-hover:rotate-1' />
                            </div>
                            <h1 className='uppercase text-white md:text-lg text-md cursor-pointer transition duration-300 ease-in-out'>Бичлэг үзэх</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
