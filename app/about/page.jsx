"use client"
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import SkillsSection from '@/components/SkillSection'
import idriss from '../../public/images/idriss3.jpg'
import Image from 'next/image'
const container ={
    hidden: { opacity: 0 , y:100},
    visible: {
        opacity: 1,
        y:0,
        transition: {
            delayChildren: 1,
            duration :1,
        }
    }
}
const item = {
    hidden: { opacity: 0 , y:100},
    visible: {
        opacity: 1,
        y:0,
        transition: {
            duration:1,}
    }
    
}



const page = () => {
    const [project,setProject] = useState(0)
    const [experience,setExperience] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (project < 10) {
                setProject(prevProject => prevProject + 1);
            }
            if (experience < 2) {
                setExperience(prevExperience => prevExperience + 1);
            }
        }, 100);

        // Cleanup the interval when the component unmounts or when project and experience reach their desired values
        return () => {
            clearInterval(intervalId);
        };
    }, [project, experience]);
  return (
    <div className='flex justify-center flex-col items-center'>
        <motion.h1 className='text-6xl font-bold mt-10' variants={item} initial='hidden' animate='visible' >EXPERIENCE</motion.h1>
        <motion.div
       className='flex flex-col  justify-center  w-11/12 mt-10   bg-white rounded-lg shadow-2xl shadow-black p-5'
       variants={container}
         initial='hidden'
            animate='visible'
       >
                <motion.div className="flex justify-center flex-col m-5 md:flex-row md:w-full">
                    <motion.div 
                        variants={item}
                        className='w-full md:w-3/5 m-5'
                    >
                        <h1 className='text-2xl font-bold my-3 '>Biography</h1>
                        <p >
                        I am Idriss Bougarrani, a motivated computer science student currently in my fourth year of studies at the esteemed National School of Applied Sciences of Fez. As a software engineering student, I have developed a strong foundation in Java programming and specialize in web development. I am skilled in Java technologies such as MVC, Hibernate, AOP, Security, REST, and Boot, and have expertise in the Spring framework,full-stack development with React. <br />
                        </p>
                    </motion.div>
                    <motion.div className='w-full md:w-2/5 m-5 '>
                        <Image src={idriss} alt='profile' width={500} height={200} className='rounded-md shadow-lg shadow-black' />
                    </motion.div>
                </motion.div>
                <motion.div className="flex justify-center space-x-10  m-5  md:flex-row md:w-full">
                    <div >
                        <h1 className='text-center text-2xl font-semibold'>Finished Projects</h1>
                        <h2 className='text-center text-5xl font-bold'>{project}+</h2>
                    </div>
                    <div >
                        <h1 className='text-center text-2xl font-semibold'>years of experience</h1>
                        <h2 className='text-center text-5xl font-bold'>{experience}+</h2>
                    </div>
                    
                </motion.div>
                <motion.h1 className='text-3xl font-bold m-10 flex '>SKILLS</motion.h1>
                
                <SkillsSection/>
                            
        </motion.div>
           
    </div>
  )
}

export default page