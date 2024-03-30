"use client";
import React from "react";

function Banner() {

  return (
    <div
      className="relative px-10 tablet:px-20 mt-[100px] min-h-[400px] py-[100px] overflow-hidden bg-gradient-to-b  from-[#121E27] via-[#152E37] to-[#004643]"
      style={{
        backgroundSize: "cover",
       
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-[65px] text-white font-extrabold">
        Experience the Power of PDFChat
        </h1>
        <p className="text-2xl text-white mt-3 mb-4 pb-4">
        Ready to revolutionize your document analysis workflow? Sign up for PDFChat today and discover a new dimension of document interaction. Whether you're conducting research, studying for exams, or analyzing reports, PDFChat is your indispensable companion for intelligent document conversations.
        </p>
      </div>
    </div>
  );
}

export default Banner;
