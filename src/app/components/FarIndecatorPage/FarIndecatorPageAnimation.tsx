"use client"
import React from 'react'
import Image from 'next/image'
import { useSpring, animated } from '@react-spring/web'


export default function FarIndecatorPageAnimation() {

    const [springs, api] = useSpring(() => ({
        from: { x: 0 },
    }))

    const handleClick = () => {
        api.start({
            from: {
                x: 0,
            },
            to: {
                x: 100,
            },
        })
    }


    return (
        <div className='w-full h-auto flex flex-row px-14'>
            <div className='w-full h-auto flex flex-row'>
                <h2 style={{
                    content: '',
                    display: 'block',
                    width: '100px',
                    height: '3px',
                    background: '#c19c2e',
                    margin: '80px 0',
                }}
                > </h2>
                <div className='flex flex-col'>
                    <h1 className='text-[18px] font-bold uppercase'>НЯГТАРШИЛ</h1>
                    <h1 className='text-[47px] font-bold uppercase'>БАГА</h1>
                </div>
                <div className='bg-red-200 flex'>
                    <h1 className='text-[94px] font-bold text-[#C19C2E]'>
                        1.2 FAR
                    </h1>
                </div>
            </div>
        </div>
    )
}
