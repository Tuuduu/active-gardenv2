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
        <div className='w-full h-auto flex flex-row'>
            <div>
                <h2 style={{
                    content: '',
                    display: 'block',
                    width: '100px',
                    height: '3px',
                    background: '#c19c2e',
                    margin: '15px 0',
                }} > </h2>
                <h1
                    className='dom-attribute-demo input'>
                    0
                </h1>
                <div className='w-10 h-10 bg-green-200 div'>
                    1
                </div>
            </div>
            <div>
                <animated.div
                    className={'w-10 h-10 bg-green-200 '}
                    onClick={handleClick}
                    style={{
                        ...springs,
                    }}>

                </animated.div>
            </div>
        </div>
    )
}
