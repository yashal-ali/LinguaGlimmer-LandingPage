import { PATHS } from "@/constants";
import { StaticImageData } from "next/image";
export type TNAVIITEM = {
  title: string;
  to: PATHS;
};

export type TFOOTERNAV = {
  [key: string]: TNAVIITEM[];
};
export type TSERVICE = {
  heading: string;
  image: StaticImageData | string;
};
export type TTESTIMONIAL={

  name: string,
    review: string,
    rating: number,
 
}
export type TFAQS={
  question:string,
  answer:string
}
export type TCARDDATA = {
  thumbnail: StaticImageData | string;
  title: string;
  description: string;
};
export type TBESTSELLING = {
  title: string;
  description: string;
  thumbnail: StaticImageData | string;
};

export type TSUBCARDDATA = {
  title: string;
  description: string;
  thumbnail: StaticImageData | string;
};