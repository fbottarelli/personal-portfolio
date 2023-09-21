import '../../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from "@/components/footer"
import Header from "@/components/header"

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
      {/* <body className={inter.className}>{children}</body>  */}
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>


      {/*Background*/}
      <div className="bg-[#46ACC2] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[20rem] dark:bg-[#946263] "></div>
      {/*sm:w-[68.75rem] */}
      <div className="bg-[#7067CF] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[20rem] dark:bg-[#676394]"></div>
      {/*sm:w-[68.75rem]  md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] */}
      <ThemeContextProvider>
          <ActiveSectionContextProvider>
              <div className="my-body">
                  <Header /> {/* Render the Navbar */}
                  <main className="central-column">
                      {children}
                  </main>
            </div>
            <Footer />
          </ActiveSectionContextProvider>
      </ThemeContextProvider>

      </body>
    </html>
  );
}
