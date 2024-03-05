'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface MissionCardTitleProps {
    title: React.JSX.Element[];
    delay?: number;
}

const MissionCardTitle: React.FC<MissionCardTitleProps> = ({title, delay = .8}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8, delay: delay }}
      // viewport={{once: true}}
      exit={{ opacity: 0 }}
      className='z-50'
      > 
        <h2 className="text-5xl sm:text-6xl text-center text-white z-50">
            {title}
        </h2>
    </motion.div> 
  )
}

export default MissionCardTitle
