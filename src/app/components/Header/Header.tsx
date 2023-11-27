"use client"
import React from "react";
import Image from "next/image";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./headerMiddle";
import HeaderBot from "./HeaderBot";
import BackgroundImage from "@/images/Header/sidebar-background-2-1_zy9nbs.png"

import { BrowserRouter } from "react-router-dom";


export default function Header() {
    return (
        <BrowserRouter>
            <nav className="w-[325px] h-screen flex flex-col items-center fixed left-0 top-0 z-10 shadow-2xl">
                {/* backgound Image */}
                <Image
                    src={BackgroundImage}
                    alt="Picture of the author"
                    className="w-full h-full object-none absolute z-[-1]"
                    height={3000}
                    width={3000}
                    quality={100}
                />
                <div className="w-full h-screen -translate-x-5 flex flex-col justify-between pl-16 pt-12 pb-16 ">
                    {/* Top */}
                    <HeaderTop />
                    {/* middle */}
                    <HeaderMiddle />
                    {/* bottom */}
                    <HeaderBot />
                </div>
            </nav>
        </BrowserRouter>
    );
}
