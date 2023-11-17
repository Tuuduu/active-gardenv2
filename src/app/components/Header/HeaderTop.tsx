import React from "react";
import Image from "next/image";

export default function HeaderTop({
  item,
  className,
}: {
  item: any;
  className: any;
}) {
  return (
    <div className="w-ful">
      <Image
        src={item}
        alt="Active garden logo"
        width={180}
        height={220}
        quality={100}
        className={className}
      />
    </div>
  );
}
