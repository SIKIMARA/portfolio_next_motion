"use client"
import Image from 'next/image'
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <main  className='flex justify-center text-dark '>
      {/* card with shadow and with motion animation contains my image and some my information (my name , my desxription , 2 buttons one for download my resume and another to direct to about page) */}
      <motion.div
       className='flex flex-col justify-center items-center w-11/12 md:flex-row mt-10   bg-white rounded-lg shadow-2xl shadow-black p-5'
       initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{duration:1}}
       >
      <div className='flex justify-center flex-col w-3/5 md:mx-9 my-10'>
        <motion.h1 
        className='text-5xl font-bold my-10  text-center '
        animate={{
          color: ["#030200","#614500","#996d02","#011936","#071a30","#011936","#996d02","#614500","#030200"],
          // just table of colors black to yellow 
          transition: {
            duration: 5,
            repeat: Infinity,
          }
        }}
        >
          IDRISS BOUGARRANI
        </motion.h1>
        <p className='text-gray-500 text-center mt-2'>Motivated computer science student, I possess a strong foundation in Java programming with expertise in the Spring framework. I am skilled in developing robust and scalable applications using Java technologies such as MVC, Hibernate, AOP, Security, REST, and Boot. In addition, I am experienced in full-stack development with React, creating visually appealing and user-friendly interfaces for web application.</p>
        <div className='flex justify-center items-center space-x-3 mt-5'>
          <button className='bg-black text-white px-7 py-3 font-semibold rounded-lg'>Download Resume</button>
          <button className='bg-primary text-white px-7 py-3 font-semibold rounded-lg'>About Me</button>
        </div>
        </div>
        <div className='flex justify-center items-center w-2/5  rounded-full bg-gray-200'>
          <Image src='/images/profile.jpg' alt='profile' width={200} height={200} className='rounded-full' />
        </div>
        
        
      </motion.div>

    </main>
  )
}
