import React from "react";
import Image from "next/image";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBot from "./HeaderBot";
import BackgroundImage from "@/images/HeaderImages/sidebar-background-2-1_zy9nbs.png"
import SideBar from "./SideBar";

export default function HeaderField() {


    return (
        <div
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
                <div className="lg:block hidden">
                    <HeaderMiddle />
                </div>
                {/* bottom */}
                <div className="lg:block hidden">
                    <HeaderBot />
                </div>
                {/* Sidebar  = */}
                <SideBar />
            </div>
        </div>
    )
}
