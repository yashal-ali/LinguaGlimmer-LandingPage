"use client";
import React, { useState, useEffect } from "react";
import Hero from "@/components/Screen/LandingPage/Hero";
import Services from "@/components/Screen/LandingPage/Services";
import Banner from "@/components/Screen/LandingPage/Banner";
import Testimonial from "@/components/Screen/LandingPage/Testimonials";

import Faq from "@/components/Screen/LandingPage/Faqs/Accordian";
import BestSellingProduct from "./BestSelling";
import { BestSelling, NEWCOLLECTION } from "@/constants";
import NewCollection from "./NewCollection";
import SaleBanner from "./SaleBanner";
import About from "../AboutUs";
import AboutCard from "../AboutUs/AboutCard";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <Services />
      <Banner />
      <h1 className="flex justify-center items-center text-[52px] mt-10 text-primary font-extrabold  font-sans overflow-x-none">
        WHAT NEW
      </h1>
      <p className="text-primary text-xl flex justify-center items-center ">
        About Us !!!
      </p>
      <AboutCard/>
      <SaleBanner />
      <NewCollection data={NEWCOLLECTION} />
    </div>
  );
}
