"use client"
import React, { useState } from "react";
import Image from "next/image";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./headerMiddle";
import HeaderBot from "./HeaderBot";
import BackgroundImage from "@/images/HeaderImages/sidebar-background-2-1_zy9nbs.png"
import { useSpring, animated } from "@react-spring/web";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderField() {

    const [show, setShow] = useState(false);

    const { left } = useSpring({
        from: { left: '-100%' },
        left: show ? '0' : '-100%'
    })


    return (
        <div
            // style={{
            //     left: left
            // }}
            className="fixed left-0 top-0 z-10 lg:w-1/6 w-full lg:h-full h-24 flex flex-col items-center shadow-2xl overflow-hidden"
        >
            {/* backgound Image */}
            <Image
                src={BackgroundImage}
                alt="Picture of the author"
                className="w-full h-screen object-none left-0 top-0 absolute z-[-2]"
                height={3000}
                width={3000}
                quality={100}
            />
            <div className="w-full h-full flex lg:flex-col flex-row items-center justify-between lg:py-10 py-0 lg:px-0 px-5">
                {/* Top */}
                <HeaderTop />
                {/* middle */}
                <HeaderMiddle />
                {/* bottom */}
                <HeaderBot />
                <div
                    className={'lg:hidden block'}>
                    <FontAwesomeIcon icon={faBars} className="text-[#c19c2e] text-xl cursor-pointer" onClick={() => setShow(show => !show)} />
                    <animated.div
                        style={{
                            left: left
                        }}
                        className={'Sidebar fixed top-24 left-0 w-3/6 h-screen bg-white rounded-r-lg'}
                    >
                        1
                    </animated.div>
                </div>
            </div>
        </div>
    )
}
