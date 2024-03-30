
import { TBESTSELLING } from "@/types";
import { TSUBCARDDATA } from "@/types";
import bg from "@/public/assets/images/banner.jpeg";
import React from "react";
import Image from "next/image";
import { redirectToURL } from "@/constants";


function AboutCard() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="flex flex-row gap-x-4 gap-y-10 tablet:flex-wrap tablet:flex-row tablet:gap-x-[56px] items-center justify-center mt-[60px] max-w-[1100px]">
        <div className="flex flex-col gap-y-4 px-4 shadow-main rounded-3xl cursor-pointer mx-4 min-w-[505px] min-h-[55px]">
          <Image
            src={bg}
            alt=""
            className="min-w-[505px] min-h-[500px] rounded-md"
          />
        </div>
        <div className="flex-col mx-3 -mt-[50px]">
          <h1 className="flex justify-center items-center text-[42px] text-primary font-extrabold font-sans overflow-x-none ">
          PDFChat: Redefining Document Interaction
          </h1>
          <p className="text-black px-4 py-4 my-4 text-xl flex justify-center items-center ">
          PDFChat empowers users to unlock the potential of their PDF documents through natural language conversation. Our innovative platform utilizes advanced AI algorithms to understand your queries and provide accurate responses, transforming static documents into dynamic sources of knowledge.
          </p>
          <button onClick={redirectToURL}className="bg-[#004643] mt-10 text-white px-7 py-4 rounded-md font-bold text-center ">
            Get Started !
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutCard
