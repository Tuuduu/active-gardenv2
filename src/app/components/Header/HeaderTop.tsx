import React from "react";
import Image from "next/image";
import logo from "@/images/HeaderImages/active-newlogo-small_cpyfzs.png"

export default function HeaderTop() {
  return (
    <div className="w-ful">
      <Image
        src={logo}
        alt="Active garden logo"
        width={180}
        height={220}
        quality={100}
        className={'object-cover w-[180px] h-auto cursor-pointer'}
      />
    </div>
  );
}
