import '../../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from "@/components/footer"
import Header from "@/components/header"
import UnderHeader from "@/components/underHeader"

import ActiveSectionContextProvider from "@/context/active-section-context";

import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Federico Bottarelli',
  description: "Federico Bottarelli is a ...",
}
// test
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className}`}>
      {/*Background*/}
      {/*<div className='relative mx-auto max-w-screen-xl'>*/}
      <div className="bg-[#6592FD] absolute top-[30rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[20rem] dark:bg-[#946263] "></div>
      {/*sm:w-[68.75rem] */}
      <div className="bg-[#5F59F7] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[20rem] dark:bg-[#676394]"></div>
      {/*pink background point*/}
      {/*<div className="bg-[#FFC0CB] absolute bottom-[-6rem] -z-10 left-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[20rem]"></div>*/}
      {/*sm:w-[68.75rem]  md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] */}
      <ThemeContextProvider>
          <ActiveSectionContextProvider>
              <div className="my-body">
                  <Header /> {/* Render the Navbar */}
                      {children}
            </div>
            <Footer />
          </ActiveSectionContextProvider>
      </ThemeContextProvider>
      </body>
    </html>
  );
}
