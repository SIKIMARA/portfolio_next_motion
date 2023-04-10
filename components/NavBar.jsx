"use client"
import Link from 'next/link'
import React from 'react'
import Logo from '../components/Logo'
import { usePathname } from 'next/navigation';

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

  return (
    <header className="w-full  py-5 font-medium flex justify-around  items-center">
        <Logo />
        <nav className='space-x-7'>
            <CustomLink href="/"  >Home</CustomLink>
            <CustomLink href="/about">About</CustomLink>
            <CustomLink href="/projects">Projects</CustomLink>
            <CustomLink href="/articles">Articles</CustomLink>
        </nav>
        
       
    </header>
  )
}
