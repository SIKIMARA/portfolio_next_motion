"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import orientalshades from "../../public/images/oriental-shades.png"


import Project from '../../components/Project'

const projects=[
  {
    Name:'Project 1',
    Name2:'Location de voiture',
    Description:'Application web de location de voiture',
   
    Link:'https://location-voiture-2021.herokuapp.com/',
    Github:'github.com/Abderrahmane-Elhassani/Location-voiture',
    videoDemo:"https://www.youtube.com/watch?v=2FIMrQXltKs&t=5s",
    technologies:'React, Nextjs, Tailwindcss, Nodejs, Express, MongoDB'
  },
  {
    Name:'Project 2',
    Name2:'Gestion d\'inventaire',
    Description:'Application web de gestion d\'inventaire',

    Link:'https://gestion-inventaire.herokuapp.com/',
    Github:'github.com/Abderrahmane-Elhassani/Gestion-d-inventaire',
    videoDemo:"https://youtu.be/Cihl4qupjzc",
    technologies:'React, Nextjs, Tailwindcss, Nodejs, Express, MongoDB'
  },
  {
    Name:'Project 3',
    Name2:'LABD',
    Description:'Application web de gestion des laboratoires de l\'université',
 
    Link:'https://labd.herokuapp.com/',
    Github:'github.com/Abderrahmane-Elhassani/LABD',
    img:orientalshades,
    technologies:'React, Nextjs, Tailwindcss, Nodejs, Express, MongoDB'
  },


]

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
        My Projects
      </motion.h1>
      {/* Project({Name,Name2, Description, Image, Link, Github,videoDemo,technologies }) */}
      {
        projects.map((project,index)=>(
          <Project
            key={index}
            Name={project.Name}
            Name2={project.Name2}
            Description={project.Description}
            img={project.img}
            Link={project.Link}
            Github={project.Github}
            videoDemo={project.videoDemo}
            technologies={project.technologies} />

      
        ))
      }
     
    </div>
  )
}

export default page