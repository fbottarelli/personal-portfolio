import Image from 'next/image'
import React from "react";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro_old";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";


export default function Home() {
  return (
    <main>
        <div className="sec-title">
            <p>Federico Bottarelli</p>
        </div>
        <Intro />


    </main>
  )
}
