"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TSUBCARDDATA } from "@/types";

type TProps = {
  data: TSUBCARDDATA;
};

function SubCard({ data }: TProps) {
  const { thumbnail, title, description } = data;
  return (
    <div className="flex flex-row gap-y-4 px-4 pt-3  shadow-main rounded-md cursor-pointer mx-2">
      <div className="w-[170px] h-[160px] bg-[#F5F5F5] rounded-3xl ">
        <Image src={thumbnail} alt="" className="w-full h-full rounded-xl" />
      </div>
      <div className="flex flex-col text-primary font-lightml-4 mx-4">
        <h2 className="text-primary  mt-4 ml-1 text-xl font-bold">
          {title}
        </h2>
        <p className="m-0 max-w-[270px]">{description}</p>
      </div>
    </div>
  );
}

export default SubCard;
