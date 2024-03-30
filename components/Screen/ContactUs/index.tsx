import Header from "@/components/Screen/AboutUs/Header";

import Banner from "../LandingPage/Banner";
import Form from "./Form";
export default function Contact() {
  return (
    <div>
      <Header />
      <h1 className="flex justify-center items-center text-[52px] text-primary font-extrabold my-10 font-sans overflow-x-none my-4">
        Contact Us
      </h1>
      <Form />
      <Banner />
    </div>
  );
}
