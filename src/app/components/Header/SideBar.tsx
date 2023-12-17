import React, { useState } from 'react'
import Image from 'next/image'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { animated, useSpring } from '@react-spring/web'
import HeaderMiddle from './headerMiddle'
import HeaderBot from './HeaderBot'
import HeaderTop from './HeaderTop'
import Link from 'next/link'
import sideLogo from '@/images/HeaderImages/active-newlogo-small_cpyfzs.png'

export default function SideBar() {

    const [show, setShow] = useState(false);

    const { left } = useSpring({
        from: { left: '-100%' },
        left: show ? '0' : '-100%'
    })

    return (
        <div
            className={'lg:hidden block'}>
            <FontAwesomeIcon icon={faBars} className="text-[#c19c2e] text-xl cursor-pointer" onClick={() => setShow(show => !show)} />
            <animated.div
                style={{
                    left: left
                }}
                className={`Sidebar fixed top-0 left-0 flex flex-col items-center justify-around sm:w-3/6 w-4/6 h-full bg-white rounded-r-lg backdrop-opacity-40 backdrop-invert bg-white/80`}
            >
                <div className="w-ful">
                    <Link href={'/'}>
                        <Image
                            src={sideLogo}
                            alt="Active garden logo"
                            width={180}
                            height={220}
                            quality={100}
                            className={'object-cover w-[120px] h-auto cursor-pointer select-none'}
                        />
                    </Link>
                </div>

                <HeaderMiddle />


                <div className='w-full h-auto'>
                    <HeaderBot />
                </div>
            </animated.div>
        </div>
    )
}
