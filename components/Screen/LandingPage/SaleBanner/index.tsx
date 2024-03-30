"use client";
import React from "react";

function SaleBanner() {
  
  return (
    <div className="relative px-10 tablet:px-20 mt-[100px] bg-gradient-to-b  from-[#121E27] via-[#152E37] to-[#004643] min-h-[300px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white">
   <p className="text-3xl text-white mt-3 mb-4 pb-4">
   Unlock the potential of your PDF documents with PDFChat – Where Insights Await Your Inquiry.
        </p>
      </div>
    </div>
  );
}

export default SaleBanner;
