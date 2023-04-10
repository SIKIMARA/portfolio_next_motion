import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ skill, progress, color }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const barVariants = {
    hidden: { width: '0%' },
    visible: { width: `${progress}%`, transition: { duration: 1, delay: 0.3 } },
  };

  return (
    <motion.div
      className="flex items-center w-full md:w-1/2 justify-center my-4 md:my-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-60 border-black border-2 border-solid rounded-lg md:w-90">
        <motion.div
          className={`bg-gradient2   h-6 md:h-8 rounded-lg`}
          variants={barVariants}
        />
      </div>
      
      <div className="ml-4 md:ml-6">
        <h3 className="text-sm md:text-base font-semibold w-10">{skill}</h3>
        <p className="text-xs md:text-sm text-gray-600">{`${progress}%`}</p>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skills = [
    { skill: 'JAVA', progress: 95, color: 'yellow' },
    { skill: 'JavaScript', progress: 85, color: 'green' },
    { skill: 'REACTJS', progress: 85, color: 'yellow' },
    { skill: 'C#(ASP.NET)', progress: 75, color: 'green' },
  ];

  return (
    <div className="flex flex-col md:flex-row  flex-wrap w-2/3 mx-auto justify-between  mt-10">
      
      {skills.map((skill, index) => (
        <ProgressBar
          key={index}
          skill={skill.skill}
          progress={skill.progress}
          color={skill.color}
        />
      ))}
    </div>
  );
};

export default SkillsSection;
