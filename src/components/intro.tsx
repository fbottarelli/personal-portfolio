"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-3xl text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>Welcome!</SectionHeading>
            <div className="text-lg">
            <p className="mb-3">
                I'm <span className="font-medium">Federico</span>, and I have a deep passion for everything related to
                <span className="font-medium">data</span> and their application in real-world problems.
            </p>

            <p className="mb-6">
                Currently, I'm pursuing a <span className="font-medium">Data Science master's degree</span> at
                <span className="font-medium">Padua University</span>. Alongside my studies, I'm working as a
                <span className="font-medium">Junior DataOps Engineer</span> for an Italian company.
            </p>
            </div>
            <p className="font-serif">
                From classical statistical analysis to more technology-based approaches like using AI, always with a statistical and mathematical approach in mind. I'm fast and experienced with computers and modern technologies. I have a good base of coding skills, particularly in Python and R, but I'm always open to learning new tools and technology. 😁
            </p>
        </motion.section>
    );
}
