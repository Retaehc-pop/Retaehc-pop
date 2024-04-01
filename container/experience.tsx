'use client'
import styles from './Experience.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { comfortaa, montserrat, roboto_mono} from '../lib/fonts';
import { useState } from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google';
const ExperienceCard = (info:any) => {
  const {title,title2, from, to, description,logo} = info;
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className={styles.card}>
      <div className={`${styles.header} ${roboto_mono.className}`} >
        <h4>{title2} @ {title}</h4>
        <div className={styles.date}>
          <h4>{from} - {to}</h4>
          <FontAwesomeIcon style={{margin:"0.2em"}}icon={isOpen? faMinus:faPlus} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      <div className={`${styles.info} ${isOpen? styles.open:styles.close} ${comfortaa.className}`}>
        <div className={styles.description}>
        <ul>
        {
          Array.isArray(description)? description.map((d:any) => <li key={d}><p>{d}</p></li>):<p>{description}</p>
        }
        </ul>
        </div>
        <div className={styles.image}>
          <Image src={logo} alt="logo" fill/>
          </div>
      </div>
    </div>
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
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h2 className={comfortaa.className}>Work</h2>
      <ExperienceCard {...rcp}/>
      <ExperienceCard {...spaceac}/>
      </div>
      <div className={styles.wrapper}>
      <h2 className={comfortaa.className}>Education</h2>
      <ExperienceCard {...rwth}/>
      <ExperienceCard {...assumption}/>
      </div>
    </main>
  );
}

export default Experience;