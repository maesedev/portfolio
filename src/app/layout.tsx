import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Santiago Garzon - Portfolio',
  description: 'Portafolio de un desarrollador web fullstack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className+" scroll-container"}>
        <main className=" max-w-screen overflow-hidden">
        <Header/>
        {children}
        <Footer/>
        </main>
      </body>
    </html>
  )
}
