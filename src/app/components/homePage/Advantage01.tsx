import React from "react";
import Image from "next/image";
import logo01 from "@/images/homePage/AdvantageImage/active-complex-1-100x100.png"
import logo02 from "@/images/homePage/AdvantageImage/active-education-1-100x100.png"
import logo03 from "@/images/homePage/AdvantageImage/active-investment-1-100x100.png"
import logo04 from "@/images/homePage/AdvantageImage/active-planning-1-100x100.png"
import logo05 from "@/images/homePage/AdvantageImage/active-zone-1-100x100.png"

export default function Advantage02() {
  return (
    <div className="w-full flex flex-col p-10">
      <div className="mb-8">
        <h1 className="text-[34px] font-[600] uppercase">Онцлог давуу тал</h1>
        <h2 style={{
          content: '',
          display: 'block',
          width: '100px',
          height: '3px',
          background: '#c19c2e',
          margin: '15px 0',
        }} > </h2>
      </div>
      <div className="w-full flex flex-row space-x-8 transition-all">
        {temp01.map((item) => (
          <div
            key={""}
            id={""}
            className={`${item?.style} group w-full flex flex-col space-y-5 items-center group-hover:scale-110 ease-in duration-300 justify-center py-10 cursor-pointer`}
          >
            <Image alt="" src={item?.image} width={64} height={64} />
            <h1 className="text-2xl text-white font-extrabold group-hover:text-[#c19c2e] ease-in duration-300">
              {item?.title}
            </h1>
            <p className="text-white text-md group-hover:text-[#c19c2e] ease-in-out duration-300">
              Дэлгэрэнгүй
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const temp01 = [
  {
    image: logo02,
    title: "Active Education",
    style: "bg-[#373435]",
  },
  {
    image: logo01,
    title: "Active Complex",
    style: "bg-[#ffcc29]",
  },
  {
    image: logo05,
    title: "Active Zone",
    style: "bg-[#ed3237]",
  },
  {
    image: logo04,
    title: "Active Planning",
    style: "bg-[#63964b]",
  },
  {
    image: logo03,
    title: "Active Investment",
    style: "bg-[#0f69b2]",
  },
];
