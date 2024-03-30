import { TNAVIITEM, TFOOTERNAV,TSERVICE ,TTESTIMONIAL,TFAQS, TBESTSELLING,TSUBCARDDATA} from "@/types";
import { house,clothing,laptop,product1,product2,product3,product4,product7,search,multiplepdf,concept,understanding,document,intelligence } from "@/public/assets";
export enum PATHS {
  HOME = "/",
  ABOUTUS = "/aboutus",
  CONTACT = "/contactus",
  FAQ = "/faq",
  TERMCONDITION = "/term&condition",
  FEATURES = "/features",
  FACEBOOK = "https://www.facebook.com/",
  TWITTER = "https://twitter.com/",
  LINKEDIN = "https://www.linkedin.com/",
  EMAIL = "",

}

export const NAVITEMS: TNAVIITEM[] = [
  {
    title: "Home",
    to: PATHS.HOME,
  },
  {
    title: "Contact Us",
    to: PATHS.CONTACT,
  },
  {
    title: "About Us",
    to: PATHS.ABOUTUS,
  },
  {
    title: "Term & Condition",
    to: PATHS.TERMCONDITION,
  },
];

export const FOOTERNAV: TFOOTERNAV = {
  "Quick Links": [
    {
      title: "Home",
      to: PATHS.HOME,
    },
    {
      title: "Features",
      to: PATHS.FEATURES,
    },
    {
      title: "Contact Us",
      to: PATHS.CONTACT,
    },
    {
      title: "Faq's",
      to: PATHS.FAQ,
    },
  ],
  "Get Connected With": [
    {
      title: "Facebook",
      to: PATHS.FACEBOOK,
    },
    {
      title: "Twitter",
      to: PATHS.TWITTER,
    },
    {
      title: "Linked In",
      to: PATHS.LINKEDIN,
    },
    {
      title: "Email",
      to: PATHS.EMAIL,
    },
  ],
};

export const SERVICES: TSERVICE[] = [
  {
    heading: "Multi-Document Conversations",
    image: multiplepdf
  },
  {
    heading: "Intelligent Search",
    image:search
  },
  {
    heading: "Contextual Understanding",
    image:concept
  },
];
export const TESTIMONIALS:TTESTIMONIAL[] = [
  {
    name: "John Doe",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor  ",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    rating: 4,
  },
  {
    name: "Bob Johnson",
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 5,
  },
  {
    name: "Alice Williams",
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    rating: 3,
  },
  // Add more testimonials as needed
];

export const FAQS : TFAQS[] = [
  {
    question:
      "In the event of an incorrect return, will my penalty be reversed",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
  },
  {
    question:
      "In the event of an incorrect return, will my penalty be reversed",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
  },
  {
    question:
      "In the event of an incorrect return, will my penalty be reversed",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
  },
  {
    question:
      "In the event of an incorrect return, will my penalty be reversed",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
  },
];

export const BestSelling: TBESTSELLING[] = [
  {
    title: "In the event ",
    thumbnail: product1,
    description: "$44",
  },
  {
    title: "In the event ",
    thumbnail: product2,
    description: "$44",
  },
  {
    title: "In the event ",
    thumbnail: product3,
    description: "$44",
  },
  {
    title: "In the event ",
    thumbnail: product4,
    description: "$44",
  },
  {
    title: "In the event ",
    thumbnail: product7,
    description: "$44",
  },
];
export const NEWCOLLECTION: TSUBCARDDATA[] = [
  {
    title: "Multi-Document Conversations",
    thumbnail: document,
    description:
      " Engage in conversations with multiple PDFs simultaneously, streamlining your document analysis workflow.",
  },

  {
    title: "Contextual Understanding",
    thumbnail: understanding,
    description:
      "PDFChat comprehends the context of your queries, ensuring accurate and relevant responses tailored to your needs.",
  },
  {
    title: "Intelligent Search",
    thumbnail: intelligence,
    description:
      "Quickly locate information within PDF documents using conversational queries, eliminating the need for manual searching.",
  },
];

export  const redirectToURL = () => {
    window.location.href = 'https://yashal-ali-linguaglimmer--app-bc4hbw.streamlit.app/';
  }