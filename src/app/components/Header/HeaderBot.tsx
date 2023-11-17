import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function HeaderBot() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-row space-x-2 pb-4">
        {/* <FontAwesomeIcon
          icon={solid("facebook")}
          className="w-4 text-2xl h-auto cursor-pointer hover:text-[#c09b2d] text-[#3b5998] transition duration-300 ease-in-out"
        />
        <FontAwesomeIcon
          icon={solid("instagram")}
          className="w-6 cursor-pointer text-2xl hover:text-[#c09b2d] text-[#3f729b] transition duration-300 ease-in-out"
        />
        <FontAwesomeIcon
          icon={solid("youtube")}
          className="w-8 text-2xl cursor-pointer hover:text-[#c09b2d]
         text-[#e52d27] transition duration-300 ease-in-out"
        /> */}
      </div>
      <h1 className="text-[#c09b2d] text-[24px] font-semibold">7555-5500</h1>
      <p className="text-[#505050] text-[13px]">© 2022 ACTIVE GARDEN</p>
    </div>
  );
}
