"use client";
// import { useState } from 'react';
import SwitchTheme from './SwitchTheme'
import Link from 'next/link'
import { motion } from "framer-motion"
// import { links } from "@/lib/data";

const Nav = () => {
    return (
        <>
            <div className='z-20'>
                {/* <div className="sticky"> */}
                <motion.div className="fixed top-0 right-1/2 h-[4rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-90 shadow-lg shadow-black/[0.03] backdrop-blur-[0.2rem] lg:bg-opacity-50 lg:backdrop-blur-[0.1rem] lg:top-5 lg:left-4 lg:h-[10rem] lg:w-20 lg:rounded-lg dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                                initial={{ y: -100, x: "+50%", opacity: 0 }}
                                animate={{ y: 0, x: "+50%", opacity: 1 }}>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 0.2,
                    }}
                > 
                    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 mb-10 flex flex-row justify-center lg:fixed lg:top-8 lg:left-28 lg:flex-col lg:mb-0">
                    {/*<div className="flex flex-row md:flex-col">*/}
                        <Link href="/" className="mr-12 lg:mb-4 font-extrabold text-xl">Home</Link>
                        {/*<Link href="/about" className="mr-4 md:mr-0">About me</Link>*/}
                        <Link href="/posts" className='text-xl'>Works</Link>
                        {/* Dark/light button */}
                        <SwitchTheme/>
                    {/*</div>*/}
                    </nav>
                </motion.div>   

            </div>
        </>
    );
};

export default Nav;