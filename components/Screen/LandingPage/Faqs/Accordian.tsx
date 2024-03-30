import React from "react";
import Accordian from "@/components/Screen/LandingPage/Faqs";
import { FAQS } from "@/constants";

export default function faq() {
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <h1 className="flex justify-center items-center text-[52px] text-teal font-extrabold my-10 font-sans overflow-x-none my-4">
        FAQ&lsquo;S
      </h1>
      {FAQS.map((item, index) => (
        <Accordian key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
