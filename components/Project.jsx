import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'

export default function Project({Name,Name2, Description, img, Link, Github,videoDemo,technologies }) {
  const TextVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } },
  }
    // this component is used to display a project in a card
    // animated with framer motion and with shadow 
    // it contains the name of the project , the description , the image of the project , the link to the project , the link to the github repo of the project , playing video de
  return (
    <motion.div 
        variants={TextVariant}
        initial='hidden'
        animate='visible'
      className='flex flex-col justify-center items-center w-11/12  bg-white rounded-lg shadow-2xl shadow-black p-2 pb-10 mx-auto my-10'>
        <h1 className='text-5xl font-bold my-7  text-center '>{Name}</h1>
        <div className='flex flex-col md:flex-row justify-around items-center w-full'>
            <div>
            <h3 className='text-3xl font-semibold my-5 text-center'>{Name2}</h3>
            <p className='text-gray-500 text-center mt-2'>{Description}</p>
            <p className='text-gray-800 text-center mt-2'>Technologies : {technologies}</p>
            {img!=null ? <Image src={img} width="200" height="200" className='w-30 h-30' /> : null }
            <div className='flex flex-col md:flex-row justify-around items-center w-full my-5'>
            <a href={Link} target='_blank' className='bg-black text-white py-2 px-5 text-center mt-2'>Check Github</a>
            <a href={Github} target='_blank' className='text-black border-2 border-black border-solid py-2 px-5 hover:bg-black hover:text-white transition-all bg text-center mt-2'>Website Link</a>
            </div>
            </div>
            <div >
            <h3 className='text-3xl font-semibold my-5 text-center'>Demo</h3>
            
            <Image src={videoDemo} width="500" height="250"  />
            </div>
            
            

            
        </div>
    </motion.div>
         
  )
}
