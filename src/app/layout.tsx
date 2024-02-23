import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Layout from '@/components/LayoutContainer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sineatec Software Solutions',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout className='shadow-[20px_7px_20px_black]'>
          <Link href="/" className='inline-block'>
            <Image
              className='mt-3 ml-3'
              src="/assets/imgs/sineatec.png"
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </Link>
          <Navbar/>
        </Layout>
        {children}
      </body>
    </html>
  )
}
