"use client"
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

const LinkMotion = motion(Link)
const Logo = () => {
  return (
    <div>
        <LinkMotion 
        className='bg-black px-6 py-3 text-white flex justify-center font-medium text-xl items-center'href="/"
        whileHover={
            {
                scale: 1.1,
                backgroundColor:["#020c3e","#f1d672","#06f98c","#06a6f9","#020c3e","#8b6f08","#020c3e"],
                transition: {
                    duration: 1.5,
                    repeat: Infinity,
                }
            }
        }
        >
            SIKIMARA
        </LinkMotion> 
    </div>
  )
}

export default Logo