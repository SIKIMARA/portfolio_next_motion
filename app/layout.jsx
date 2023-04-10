import './globals.css'

import NavBar from '../components/NavBar'
import Head from 'next/head'
export const metadata = {
  title: 'Portfolio',
  description: 'SIKIMARA Portfolio',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>experienced</title>
      </Head>
      <body className={` bg-gradient bg-no-repeat min-h-screen `}>
        <NavBar />
        {children}
        </body>
    </html>
  )
}
