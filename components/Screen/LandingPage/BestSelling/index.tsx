/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Card from "@/components/UI/Card";
import { TBESTSELLING } from "@/types";
import React from "react";

type TProps = {
  data: TBESTSELLING[];
};

function RelatedBlogs({ data }: TProps) {
  return (
    <div className="mt-20 px-10 tablet:px-20 relative flex justify-center items-center">
      <div className="flex flex-wrap flex-row gap-y-10 tablet:flex-wrap tablet:flex-row tablet:gap-x-[56px] items-center justify-center mt-[60px] max-w-[1200px]">
        <div className="flex flex-col gap-y-4 px-4 -mt-10 pb-10 shadow-main rounded-3xl w-[340px]  cursor-pointer mx-4">
          <h2 className="text-primary uppercase ml-1 text-4xl font-bold">
            Most Selling Products ...
          </h2>
          <div className="flex flex-col line-clamp-4 text-primary font-light text-ellipsis overflow-hidden max-h-[6.5em] whitespace-normal ml-4">
            <p className="m-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum
              neque nesciunt nostrum culpa, accusantium veniam nihil molestias
              reiciendis quia deserunt unde non aliquid dolorum placeat porro,
              provident quae ab.
            </p>
          </div>
          <button className="bg-[#004643] text-white px-7 py-4 rounded-md font-bold text-center mt-4">
            Shop Now
          </button>
        </div>
        {data.map((blog: any, index: number) => (
          <Card data={blog} key={index} />
        ))}
      </div>
    </div>
  );
}

export default RelatedBlogs;