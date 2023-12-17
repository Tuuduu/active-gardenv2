"use client"
import React from "react";
import HeaderField from "./HeaderField";


export default function Header() {

    return (
        <div
            className="w-full lg:h-full h-24 overflow-hidden"
            style={{
                boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            }}
        >
            <HeaderField />
        </div>
    );
}
