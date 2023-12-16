import React from "react";
import Image from "next/image";
import logo from "@/images/HeaderImages/active-newlogo-small_cpyfzs.png"
import Link from "next/link";

export default function HeaderTop() {
  return (
    <div className="w-ful">
      <Link href={'/'}>
        <Image
          src={logo}
          alt="Active garden logo"
          width={180}
          height={220}
          quality={100}
          className={'object-cover xl:w-[180px] lg:w-[140px] w-16 h-auto cursor-pointer'}
        />
      </Link>
    </div>
  );
}
