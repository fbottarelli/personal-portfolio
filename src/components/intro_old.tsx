"use client";

import React from "react";
// import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-4xl text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            {/*<SectionHeading>Welcome!</SectionHeading>*/}
            <p className="mb-3 text-2xl">
                <span className='text-3xl font-serif'>Welcome!  </span>
                I&apos;m<span className="font-bold"> Federico</span>, and I have a deep passion for everything related to
                <span className="font-bold"> data</span> and their application in real-world problems.
            </p>

            <p className="mb-6 text-xl">
                Currently, I&apos;m pursuing a <span className="font-bold"> Data Science master&apos;s degree</span> at
                <span className="font-medium"> Padua University</span>. Alongside my studies, I&apos;m working as a
                <span className="font-bold"> Junior DataOps Engineer</span> for an Italian company.
                <p className='mt-2'>
                    From classical <strong>statistical analysis</strong> to more technology-based approaches like using <strong>AI</strong>, always with a statistical and mathematical approach in mind. I&apos;m fast and experienced with computers and modern technologies. I have a good base of <strong>coding</strong> skills, particularly in Python and R, but I&apos;m always open to learning new tools and technology.  🍋
                </p>

            </p>
        </motion.section>
    );
}
