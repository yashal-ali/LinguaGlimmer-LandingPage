/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useCallback, useEffect, useState } from "react";

function Hero() {
  const [headerOffset, setHeaderOffset] = useState(70);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const updateHeaderOffset = useCallback(() => {
    const headerElement = document.querySelector("#header");
    if (headerElement) {
      const newHeaderHeight = headerElement.clientHeight;
      setHeaderOffset(newHeaderHeight);
    }
  }, []);

  useEffect(() => {
    updateHeaderOffset();
    const handleResize = () => updateHeaderOffset();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateHeaderOffset]);

  const startTypingAnimation = () => {
    const originalText =
      "Welcome to LinguaGlimmer – Your Gateway to Multilingual Proficiency!";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setText(originalText.substring(0, currentIndex));
      currentIndex++;

      if (currentIndex > originalText.length) {
        clearInterval(typingInterval);
        setIsTyping(false);

        // Wait for 1 minute and then reset the animation
        setTimeout(() => {
          setIsTyping(true);
          setText("");
        }, 60000); // 1 minute in milliseconds
      }
    }, 50); // Adjust typing speed as needed
  };

  useEffect(() => {
    startTypingAnimation();
  }, []); // Run once on component mount

  const redirectToURL = () => {
    console.log('hello')
    window.location.href = 'https://yashal-ali-linguaglimmer--app-bc4hbw.streamlit.app/';
  };

  return (
    <div
      className="h-screen mobile:min-h-[650px] w-full relative z-[-1] flex flex-col justify-center items-center gap-y-8 text-center bg-no-repeat bg-cover bg-fixed bg-[#05323D] bg-center opacity-[0.93] bg-blend-multiply rounded-b-[300px]"
      style={{
        backgroundImage: `url("/assets/images/bg-image.jpg")`, // Update the path accordingly
        top: `-${headerOffset}px`,
      }}
      onClick={redirectToURL}
    >
      <h1 className="text-white uppercase text-4xl leading-[49px] tablet:text-3xl tablet:leading-[44px] laptop:text-[42px] laptop:leading-[56px] max-w-[900px] mobile:max-w-[1000px] mobile:w-10/12 font-bold">
        <>
            {text}
            <span className="cursor-blink">|</span>
          </>
        
      </h1>
      <p className="text-white  text-2xl leading-[49px] tablet:text-3xl tablet:leading-[44px] laptop:text-[42px] laptop:leading-[56px] max-w-[900px] mobile:max-w-[1000px] mobile:w-10/12 ">Enter a new era of document interaction with PDFChat. Seamlessly converse with multiple PDF documents, extracting insights and information with unparalleled ease. Whether you're a researcher, student, or professional, PDFChat revolutionizes the way you engage with your documents.</p>
    
     
    </div>
  );
}

export default Hero;

