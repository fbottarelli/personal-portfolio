"use client";
import { useState } from 'react';
import SwitchTheme from './SwitchTheme'
import Link from 'next/link'
import { motion } from "framer-motion";
import { links } from "@/lib/data";

const Nav = () => {
    return (
        <>
            {/*<motion.div className="fixed top-10 right-1/2 h-[3rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] md:translate-x-[-100px] md:top-12 md:h-[12rem] md:w-[4rem] md:rounded-lg dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"*/}
            {/*            initial={{ y: -100, x: "+50%", opacity: 0 }}*/}
            {/*            animate={{ y: 0, x: "+50%", opacity: 1 }}>*/}
            {/*</motion.div>*/}

            {/*<div className="sticky">*/}
{/*            <motion.div className="fixed top-0 right-1/2 h-[3rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] md:top-12 md:h-[10rem] md:w-[30rem] md:rounded-lg dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                        initial={{ y: -100, x: "+50%", opacity: 0 }}
                        animate={{ y: 0, x: "+50%", opacity: 1 }}>
            </motion.div>*/}
            <nav className="fixed top-8 left-20 flex flex-row md:flex-col">
                {/*<div className="flex flex-row md:flex-col">*/}
                    <Link href="/" className="mr-12 md:mb-4">Home</Link>
                    {/*<Link href="/about" className="mr-4 md:mr-0">About me</Link>*/}
                    <Link href="/posts">Works</Link>
                    {/* Dark/light button */}
                    <SwitchTheme/>
                {/*</div>*/}

            </nav>
        </>
    );
};

export default Nav;