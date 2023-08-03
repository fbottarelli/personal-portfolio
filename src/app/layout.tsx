import '../../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '../components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Federico Bottarelli',
  description: "Federico Bottarelli portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body>  */}
      <body className={`${inter.className}`}>
        <div className="antialiased max-w-sm md:max-w-xl flex flex-col md:flex-row mx-auto mt-8 lg:mt-20 p-5 md:p-0">
          <Nav /> {/* Render the Navbar */}
          <main className="flex flex-col items-center">
          {children}</main>
        </div>
      </body>
    </html>
  )
}
