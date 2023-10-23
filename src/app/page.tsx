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


        <Intro />
        <Skills />
        <Experience />
        {/*<Form />*/}

    </main>
  )
}
