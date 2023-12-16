"use"
import React from "react";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function headerMiddle() {

  const pathname = usePathname()

  return (
    <nav className="flex flex-col xl:space-y-0 lg:space-y-2 lg:block hidden">
      {temp01.map((item) => (
        <ul key={item.id}>
          <li
          >
            <Link
              href={item?.link}
              className={`${pathname === item.link ? 'text-[#c19c2e] font-semibold' : 'text-[#1f1f1f]'} cursor-pointer hover:text-[#c19c2e] xl:text-lg lg:text-sm xl:font-light lg:font:normal leading-8 uppercase transition duration-300 ease-in-out`}
            >
              {item?.name}
            </Link>
          </li>
        </ul>
      ))}
    </nav>
  );
}

const temp01 = [
  {
    id: "1",
    name: "Танилцуулга",
    link: "/",
  },
  {
    id: "2",
    name: "Төлөвлөлт",
    link: "/projector",
  },
  {
    id: "3",
    name: "Материал хийц",
    link: "/material",
  },
  {
    id: "4",
    name: "Өрөөний сонголт",
    link: "/rooms",
  },
  {
    id: "5",
    name: "FAR Үзүүлэлт",
    link: "/far-indicator",
  },
  {
    id: "6",
    name: "Мэдээ Мэдээлэл",
    link: "/blog",
  },
  {
    id: "7",
    name: "Борлуулалтын алба",
    link: "/contact-us",
  },
];
