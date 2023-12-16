import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faSquareFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function HeaderBot() {
  return (
    <div className="flex flex-col items-center space-y-6 lg:block hidden">
      <div className="flex flex-row justify-center space-x-4 pb-4">
        <a
          href="https://www.facebook.com/activegardenresidence/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="xl:w-6 lg:w-5 text-2xl h-auto cursor-pointer hover:text-[#c09b2d] text-[#3b5998] transition duration-300 ease-in-out"
          />
        </a>
        <a
          href="https://www.instagram.com/activegardenresidence/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="xl:w-6 lg:w-5 h-auto cursor-pointer text-2xl hover:text-[#c09b2d] text-[#3f729b] transition duration-300 ease-in-out"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCaJNVdlWzUOQw9p-5o_3PSw"
          target="_blank">
          <FontAwesomeIcon
            icon={faYoutube}
            className="xl:w-8 lg:w-6 h-auto text-2xl cursor-pointer hover:text-[#c09b2d]
         text-[#e52d27] transition duration-300 ease-in-out"
          />
        </a>
      </div>
      <h1 className="text-[#c09b2d] xl:text-[24px] lg:text-[18px] text-center font-semibold">7555-5500</h1>
      <p className="text-[#505050] xl:text-[13px] lg:text-[10px]">© 2023 ACTIVE GARDEN</p>
    </div>
  );
}
