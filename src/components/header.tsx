"use client";
// import { useState } from 'react';
import SwitchTheme from './SwitchTheme'
import Link from 'next/link'
import { motion } from "framer-motion";
// import { links } from "@/lib/data";

const Nav = () => {
    return (
        <>
            {/* <div className="sticky"> */}
            {/* <motion.div className="fixed top-0 right-1/2 h-[3rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-50 shadow-lg shadow-black/[0.03] backdrop-blur-[0.1rem] lg:top-12 lg:h-[10rem] lg:w-[30rem] lg:rounded-lg dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                        initial={{ y: -100, x: "+50%", opacity: 0 }}
                        animate={{ y: 0, x: "+50%", opacity: 1 }}>
            </motion.div> */}
            <nav className="lg:fixed lg:top-8 lg:left-20 fixed top-8 flex flex-row lg:flex-col mb-10 lg:mb-0">
                {/*<div className="flex flex-row md:flex-col">*/}
                    <Link href="/" className="mr-12 lg:mb-4 font-extrabold text-xl">Home</Link>
                    {/*<Link href="/about" className="mr-4 md:mr-0">About me</Link>*/}
                    <Link href="/posts" className='text-xl'>Works</Link>
                    {/* Dark/light button */}
                    <SwitchTheme/>
                {/*</div>*/}

            </nav>
        </>
    );
};

export default Nav;