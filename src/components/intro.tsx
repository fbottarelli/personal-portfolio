"use client";

// import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
// import Link from "next/link";
import {  BsLinkedin } from "react-icons/bs";
// import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
// import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] font-sans"
    >

      <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
      >
      <p className="mb-3 text-2xl">
        <span className='text-2xl font-semibold'>Welcome!  </span>
        I&apos;m<span className="font-semibold"> Federico</span>, and I have a deep passion for everything related to
        <span className="font-semibold"> data</span> and their application in real-world problems.
      </p>
      </motion.div>

      <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
      >
      <p className="mb-6 text-xl">
        Currently, I&apos;m pursuing a <span className="font-bold"> Data Science master&apos;s degree</span> at
        <span className="font-medium"> Padua University</span>. Alongside my studies, I&apos;m working as a
        <span className="font-bold"> Junior DataOps Engineer</span> for an Italian company.
      </p>
      </motion.div>

      <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
      >
        <p className='text-xl my-6'>
          From classical <strong>statistical analysis</strong> to more technology-based approaches like using <strong>AI</strong>, always with a statistical and mathematical approach in mind. I&apos;m fast and experienced with computers and modern technologies. I have a good base of <strong>coding</strong> skills, particularly in Python and R, but I&apos;m always open to learning new tools and technology.  🍋
        </p>
        </motion.div>



      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-10 mb-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
        }}
      >
        {/*<Link*/}
        {/*  href="#contact"*/}
        {/*  className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"*/}
        {/*  onClick={() => {*/}
        {/*    setActiveSection("Contact");*/}
        {/*    setTimeOfLastClick(Date.now());*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Contact me here{" "}*/}
        {/*  <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />*/}
        {/*</Link>*/}

        {/*<a*/}
        {/*  className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"*/}
        {/*  href="/CV.pdf"*/}
        {/*  download*/}
        {/*>*/}
        {/*  Download CV{" "}*/}
        {/*  <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />*/}
        {/*</a>*/}

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/federico-bottarelli-3ab199152/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/fbottarelli"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
