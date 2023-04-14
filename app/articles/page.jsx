"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import labd from "../../public/images/LABD.png"
import location from "../../public/images/location_voiture.png"
import inventorydemo from "../../public/videos/inventory.mp4"
import inventory from "../../public/images/gestion_d'inventaire.png"

import Project from '../../components/Project'

const TextVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
}

const page = () => {
  return (
    <div >
      <motion.h1 
        className='text-7xl font-semibold text-center py-9'
        variants={TextVariant}
        initial='hidden'
        animate='visible'
      >
        Articles
      </motion.h1>
      <motion.div className='flex flex-col justify-center items-center w-11/12  bg-white rounded-lg shadow-2xl shadow-black p-2 mx-auto'>
        No articles yet
      </motion.div>
      
     
    </div>
  )
}

export default page