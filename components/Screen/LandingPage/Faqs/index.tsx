"use client";
import React, { useState } from "react";
import { useCollapse } from "react-collapsed";
import Image from "next/image";
import arrow from "@/public/assets/icons/plus.png";
import arrow_down from "@/public/assets/icons/minus.png";


interface FAQItem {
  question: string;
  answer: string;
}

function Collapse({ isActive, answer }: any) {
  const { getCollapseProps } = useCollapse({
    isExpanded: isActive,
  });

  return (
    <div
      className=" text-main  py-1 px-5 font-sans text-base  min-h-[74px] pt-2 desktop:max-w-[800px] text-left transition-all duration-300 ease-in-out laptop:max-w-[700px]  pb-2 max-w-[900px] w-full border-t-[1px]"
      {...getCollapseProps({
        style: {
          maxHeight: isActive ? "1000px" : "0",
          boxShadow: isActive
            ? "0px 0px 40px #00000014"
            : "0px 4px 40px #00000014",
        },
      })}
    >
      <h2 className="">{answer}</h2>
    </div>
  );
}

export default function Accordion({ question, answer }: FAQItem) {
  const [isExpanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="mx-4">
      <button
        onClick={handleClick}
        className={`text-white bg-gradient-to-b from-[#1c0d47] via-[#3b0250] to-[#4d0466]  flex justify-between pt-7 px-5 font-sans min-h-[80px] mt-4 desktop:min-w-[800px] text-left uppercase transition-all duration-300 ease-in-out laptop:min-w-[700px]  min-w-[900px] w-full text-xl`}
        style={{
          boxShadow: isExpanded
            ? "0px 0px 40px #00000014"
            : "0px 4px 40px #00000014",
        }}
      >
        {question}
        <Image
          src={isExpanded ? arrow_down : arrow}
          alt="arrow"
          className="w-9 h-9  mr-2 transition-all duration-300 ease-in-out ml-[40px] items-center brightness-100"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </button>
      <Collapse isActive={isExpanded} answer={answer} />
    </div>
  );
}
