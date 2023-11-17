import React from "react";

export default function headerMiddle() {
  return (
    <div className="flex flex-col">
      {temp01.map((item) => (
        <a
          id={""}
          key={""}
          className="cursor-pointer text-[#1f1f1f] hover:text-[#c19c2e] text-lg font-extralight leading-8 uppercase transition duration-300 ease-in-out"
        >
          {item?.name}
        </a>
      ))}
    </div>
  );
}

const temp01 = [
  {
    name: "Танилцуулга",
    link: "",
  },
  {
    name: "Төлөвлөлт",
    link: "",
  },
  {
    name: "Материал хийц",
    link: "",
  },
  {
    name: "Өрөөний сонголт",
    link: "",
  },
  {
    name: "FAR Үзүүлэлт",
    link: "",
  },
  {
    name: "Мэдээ Мэдээлэл",
    link: "",
  },
  {
    name: "Борлуулалтын алба",
    link: "",
  },
];
