"use client";
// import Image from 'next/image'
import React from "react";
// import About from "@/components/about";
// import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
// import Projects from "@/components/projects";
// import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
// import Form from "@/components/form";
import { motion } from "framer-motion"


export default function Home() {
  return (
    <main className="central-column">
      <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <div className="primary-title">
              <h1 className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent mt-8">
                  Federico Bottarelli
              </h1>
          </div>
      </motion.div>

        <Intro />
        <Skills />
        <Experience />
        {/*<Form />*/}

    </main>
  )
}
