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
        <div className="my-body">
          <Nav /> {/* Render the Navbar */}
          <main className="central-column">
          {children}</main>
        </div>
      </body>
    </html>
  )
}
