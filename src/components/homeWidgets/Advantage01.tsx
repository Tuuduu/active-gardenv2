import React from "react";
import Image from "next/image";
import logo01 from "@/images/homePage/AdvantageImage/active-complex-1-100x100.png"
import logo02 from "@/images/homePage/AdvantageImage/active-education-1-100x100.png"
import logo03 from "@/images/homePage/AdvantageImage/active-investment-1-100x100.png"
import logo04 from "@/images/homePage/AdvantageImage/active-planning-1-100x100.png"
import logo05 from "@/images/homePage/AdvantageImage/active-zone-1-100x100.png"

export default function Advantage02() {
  return (
    <div className="w-full flex flex-col lg:p-10 md:p-8 p-0">
      <div className="mb-8 md:p-0 p-5">
        <h1 className="lg:text-[34px] md:text-[22px] text-[20px] font-[600] uppercase">Онцлог давуу тал</h1>
        <h2 style={{
          content: '',
          display: 'block',
          width: '100px',
          height: '3px',
          background: '#c19c2e',
          margin: '15px 0',
        }} > </h2>
      </div>
      <div className="w-full flex lg:flex-row flex-col lg:space-x-8 transition-all">
        {temp01.map((item) => (
          <div
            key={item.id}
            className={`${item?.style} group w-full flex flex-col space-y-5 items-center group-hover:scale-110 ease-in duration-300 justify-center py-10 cursor-pointer`}
          >
            <Image alt="" src={item?.image} width={64} height={64} />
            <h1 className="2xl:text-2xl md:text-xl text-2xl text-white md:text-center font-extrabold group-hover:text-[#c19c2e] ease-in duration-300">
              {item?.title}
            </h1>
            <p className="text-white text-md group-hover:text-[#c19c2e] ease-in-out duration-300">
              Дэлгэрэнгүй
            </p>
            <button>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const temp01 = [
  {
    id: '1',
    image: logo02,
    title: "Active Education",
    style: "bg-[#373435]",
  },
  {
    id: '2',
    image: logo01,
    title: "Active Complex",
    style: "bg-[#ffcc29]",
  },
  {
    id: '3',
    image: logo05,
    title: "Active Zone",
    style: "bg-[#ed3237]",
  },
  {
    id: '4',
    image: logo04,
    title: "Active Planning",
    style: "bg-[#63964b]",
  },
  {
    id: '5',
    image: logo03,
    title: "Active Investment",
    style: "bg-[#0f69b2]",
  },
];
