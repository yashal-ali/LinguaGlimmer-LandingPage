"use client";
import React, { Fragment, useCallback } from "react";
import { usePathname } from "next/navigation";
import { NAVITEMS ,redirectToURL} from "@/constants";
import { PATHS } from "@/constants/";
import Link from "next/link";

function NavItems() {
  const pathname = usePathname();
  return (
    <Fragment>
      <div className="flex gap-x-8 items-center flex-1 justify-end">
        {NAVITEMS.map(({ title, to }, index) => (
          <>
            <Link
              key={index}
              href={to}
              className={`${
                to === pathname
                  ? "text-white font-extrabold"
                  :  "text-white font-normal"
                
              } uppercase text-base`}
            >
              {title}
            </Link>
          </>
          
        ))}
        <button className="bg-white text-primary px-7 py-4 rounded-md font-bold text-center mt-4" onClick={()=>redirectToURL()}>Get Started !</button>
        <span className="text-white text-base font-light">|</span>
      </div>
    </Fragment>
  );
}

export default NavItems;
