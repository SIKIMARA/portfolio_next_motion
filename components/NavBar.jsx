"use client"
import Link from 'next/link'
import React from 'react'
import Logo from '../components/Logo'
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion'

const CustomLink = ({children,href}) => {
    const router = usePathname();
    
    return (
        <Link href={href} className={`relative group text-lg ${router ===href ? 'text-primary':'text-black'}`}>
            {children}
            <span className={`absolute bottom-0  left-0  h-[2px]
             bg-black group-hover:w-full transition-[width] ease-linear duration-150 
             ${router === href ? 'w-full' : 'w-0'}`}
             ></span>
        </Link>
    )
}
export default function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleClick = () => setIsOpen(!isOpen);
  return (
    <header className="w-full  py-5 font-medium flex justify-around  items-center">
        <Logo />
        <button className="flex flex-col justify-center items-center md:hidden "onClick={handleClick} >
            <span className={`bg-dark block h-0.5 w-6 rounded-sm transition-all duration-100   ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-dark block h-0.5 w-6 rounded-sm transition-all duration-100 m-0.5 ${isOpen ? 'opacity-0':'opacity-100'}`}></span>
            <span className={`bg-dark block h-0.5 w-6 rounded-sm transition-all duration-100  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
        <nav className='space-x-7 hidden md:flex'>
            <CustomLink href="/"  >Home</CustomLink>
            <CustomLink href="/about">About</CustomLink>
            <CustomLink href="/projects">Projects</CustomLink>
            <CustomLink href="/articles">Articles</CustomLink>
        </nav>
        {/* showing menu popup for mobile device when i click button */}
        <motion.div 
             className={`fixed top-20   transform -translate-x-1/2 -translate-y-1/2 rounded-md w-2/3 h-2/3 bg-white z-10 flex flex-col justify-center items-center shadow-lg shadow-black ${isOpen ? 'block' : 'hidden'}`}
             initial={{ opacity: 0, scale: 0.8 , y: -100} }
             animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.8 , y: isOpen ? 0 : -100 }}
             transition={{ duration: 1 }}
            
        >
            <button className="absolute top-5 right-5" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <nav className='space-y-7 flex flex-col justify-center items-center'>
                <CustomLink href="/"  >Home</CustomLink>
                <CustomLink href="/about">About</CustomLink>
                <CustomLink href="/projects">Projects</CustomLink>
                <CustomLink href="/articles">Articles</CustomLink>
            </nav>
        </motion.div>
       
    </header>
  )
}
