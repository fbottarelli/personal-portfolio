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


export default function Home() {
  return (
    <main className="central-column">
        <div className="primary-title">
            <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mt-8">
                Federico Bottarelli
            </h1>
        </div>

        <Intro />
        <Skills />
        <Experience />
        {/*<Form />*/}

    </main>
  )
}
