"use client";

import ScrollToTopButton from "../action/scroll-to-top";
import { useSectionInView } from "@/lib/hooks";

import { motion } from "framer-motion";
import { DownloadCV } from "../action/download-cv";
import { Button } from "../ui/button";

import "../../styles/arrow.css";
import Image from "next/image";

import { socialLinks, SocialLink } from "../../lib/socials";

import { useTexts } from "@/context/texts-context";
import Chatbot from "../chatbot/page";

export default function HeroSection() {
  const { texts } = useTexts();

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  const { ref } = useSectionInView("Úvod" || "Home" || "Startseite");

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={ref}
      id="uvod"
      className="w-[100%] max-h-screen h-screen flex flex-col justify-center items-center text-center mx-auto"
    >
      <div className="bg-[#8af8eb91] absolute top-[0rem] md:top-[-12rem] -z-10  right-[2rem] md:right-[8rem] h-[25rem] md:h-[31.25rem] w-[20rem] md:w-[61.25rem] rounded-full blur-[12rem] dark:bg-[#56b595]"></div>

      <motion.div
        initial={{ opacity: 1, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
        className="flex flex-col items-center justify-center"
      >
        <p className=" md:flex scale-90 opacity-80 flex-row items-center hidden mb-24">
          <kbd className="px-[8px] py-[2px] scale-75 dark:bg-shark-700 bg-shark-300 text-shark-600 dark:text-shark-100 rounded-md">
            CTRL
          </kbd>
          <span className="dark:text-shark-100 text-shark-600"> + </span>
          <kbd className="px-[8px] py-[2px] scale-75 mr-2 dark:bg-shark-700 bg-shark-300 text-shark-600 dark:text-shark-100 rounded-md">
            H
          </kbd>
          <span className="font-light dark:text-shark-100 text-shark-600">
            {texts["hero_toggle-theme"]}
          </span>
        </p>
        <div className="w-full items-center justify-center mb-8 flex flex-col">
          <h1 className="text-md lg:text-xl mb-2 font-sora font-light flex flex-row">
            {" "}
            {texts["hero_greetings"]}{" "}
            <Image
              src="/additional-icons/wave.svg"
              width={24}
              height={24}
              className="mx-1"
              alt="Wave emoji"
            />
            ,{texts["hero_my-name-is"]}
          </h1>
          <h2 className="md:text-4xl lg:text-5xl text-3xl flex flex-col mb-1 font-bold text-center bg-clip-text text-transparent bg-gradient-to-br dark:from-neutral-50 dark:to-neutral-400 from-neutral-500/85 to-neutral-800 bg-opacity-50">
            <span>{texts["hero_name"]} </span>
          </h2>
          <p className="text-shark-500 dark:text-shark-50 font-light text-wrap w-3/4 lg:w-1/2 text-xs md:text-lg mt-2 mb-6">
            {" "}
            {texts["hero_description"]}{" "}
          </p>
          <div className="flex flex-row gap-x-4 items-center mx-auto">
            <Button
              onClick={() => scrollToSection("o-mne")}
              className="dark:bg-bermuda-500 dark:hover:bg-bermuda-600 bg-bermuda-500 text-shark-100 flex flex-row items-center gap-x-2 px-4 py-2 rounded-md hover:bg-bermuda-600 active:bg-bermuda-700 active:scale-90 duration-200"
            >
              <span>{texts["hero_continue-btn"]}</span>
            </Button>
            <DownloadCV />
          </div>

          <div className="mt-8 flex flex-row items-center gap-x-4">
            {socialLinks.map((link: SocialLink) => (
              <button
                key={link.name}
                className="group relative"
                onClick={() => handleClick(link.url)}
              >
                <link.icon className="text-xl group-hover:text-primary transition duration-300" />
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                  {link.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <ScrollToTopButton />
        <Chatbot/>
        
      </motion.div>

      <div
        className="arrow-container mt-12"
        onClick={() => scrollToSection("prehled")}
      >
        <div className="arrow"></div>
      </div>
    </div>
  );
}
