'use client'

import styles from './Experience.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { comfortaa, montserrat, roboto_mono} from '../lib/fonts';
import { useState } from 'react';
import Image from 'next/image';
import { motion, useCycle } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
const ExperienceCard = (info:any) => {
  const {title,title2, from, to, description,logo} = info;
  const [isOpen, toggleOpen] = useCycle(false,true);
  const containerRef = useRef(null);
  // const isInView = useInView(containerRef, {once: true })
  const isInView = useInView(containerRef)
  const variants = {
    open:{
        scale:1,
        height: "min-content",
        // margin: "1em 0em",
    },
    closed: {
        scale:0,
        height:0,
        // margin: 0,
    }
  };

  return (
    <motion.div layout initial={false} ref={containerRef} style={{transform: isInView ? "none":"translateX(100%)",opacity: isInView?1:0,transition:"all 1s cubic-bezier(0.17, 0.55, 0.55, 1)"}} className={styles.card} animate={isOpen ? "open" : "closed"}>
      <motion.div 
        layout
        className={`${styles.header} ${roboto_mono.className}`} 
        onClick={() => toggleOpen()}
        
         >
        <h4>{title2} @ {title}</h4>
        <motion.div layout className={styles.date}>
          <h4>{from} - {to}</h4>
          <FontAwesomeIcon style={{margin:"0.2em"}} icon={isOpen? faMinus:faPlus}  />
        </motion.div>
      </motion.div>
      <motion.div layout variants={variants} 
        className={`${styles.info} ${comfortaa.className}`}>
          <motion.div 
          // variants={variants2} 
          layout 
          className={styles.description}>
            <motion.ul layout>
            {
              Array.isArray(description)? description.map((d:any) => <motion.li key={d}><p>{d}</p></motion.li>):<p>{description}</p>
            }
            </motion.ul>
          </motion.div>
          <motion.div layout className={styles.image}>
            <Image src={logo} alt="logo" fill/>
          </motion.div>
      </motion.div>
    </motion.div>
  );

}




const Experience = () => {
  const spaceac = {
    logo: "/experience/spaceac.jpg",
    title:'SPACE AC',
    title2:'Software Developer',
    from:'2020',
    to:'2022',
    description:[
      'Research & development of multiple CanSat projects', 
      "Software Developer of High Altitude Balloon project",
      "Sorbital based fuel rocket research & development"]
  }
  const rcp = {
    logo: "/experience/rcp.jpg",
    title:'Redcare Pharmacy',
    title2:'Working student',
    from:'2023',
    to:'Present',
    description:['E-perscription & TI Requirement engineer','Automated data visualization and analysis of e-prescription data','Automated E-Insurance card data extraction and testing']
  }
  const rwth = {
    logo: "/experience/rwth.png",
    title:'RWTH Aachen University',
    title2:'B.SC Computer Science',
    from:'2022',
    to:'Present',
    description:['Expected Graduation 2025', 'Study focus on HPC']
  }
  const assumption = {
    logo: "/experience/assumption.png",
    title:'Assumption College',
    title2:'Science Engineering degree',
    from:'2019',
    to:'2022',
    description:['GPA 3.6 / 4.0', 'President of Assumption College Interact Club', 'Vice president of Interact 3350 District','Head of COM Cheer']
  }
  return (
    <main  className={styles.main}>
      <motion.div layout className={styles.wrapper}>
        <h2 className={comfortaa.className}>Work</h2>
        <ExperienceCard {...rcp}/>
        <ExperienceCard {...spaceac}/>
      </motion.div>
      <motion.div layout  className={styles.wrapper}>
        <h2 className={comfortaa.className}>Education</h2>
        <ExperienceCard {...rwth}/>
        <ExperienceCard {...assumption}/>
      </motion.div>
    </main>
  );
}

export default Experience;