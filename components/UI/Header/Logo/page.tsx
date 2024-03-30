"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PATHS } from "@/constants";

import logo from "@/public/assets/icons/logo.jpg";

import { usePathname } from "next/navigation";
function Logo() {
  return (
    <Link href={PATHS.HOME} className="flex flex-row gap-x-2 items-center">
      <Image
        src={logo}
        alt="mtr-logo"
        className="w-[40px] h-[40px] bg-[#F7F7F7] rounded-md"
      />
      <h3
        className=
             "text-white text-[17px] font-semibold"
            
   
      >
        LINGUAGLIMMER
      
      </h3>
    </Link>
  );
}

export default Logo;
