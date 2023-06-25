'use client'
import styles from './Experience.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { comfortaa, roboto_mono} from '../lib/fonts';
const ExperienceCard = (info:any) => {
  const {title,title2, from, to, description,icon} = info;

  return (
    <div className={styles.card}>
      <div className={`${styles.date} ${roboto_mono.className}`} >
        <h4>{from} - {to}</h4>
      </div>
      <div className={styles.info}>
        <h4 style={{fontWeight:'700'}} className={comfortaa.className}>{title} <FontAwesomeIcon icon={icon}/></h4>
        <h5 className={comfortaa.className}>{title2}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}




const Experience = () => {
  const spaceac = {
    icon: faBriefcase,
    title:'SPACE AC',
    title2:'Software Developer',
    from:'2020',
    to:'2022',
    description:'Research and Development of multiple CanSat/CubeSat projects'
  }
  const rwth = {
    icon: faGraduationCap,
    title:'RWTH Aachen University',
    title2:'Aachen, Germany',
    from:'2022',
    to:'present',
    description:'Bachelor of Science in Computer Science'
  }
  const assumption = {
    icon: faGraduationCap,
    title:'Assumption College',
    title2:'Bangkok, Thailand',
    from:'2019',
    to:'2022',
    description:'Science Engineering degree, GPA 3.6'
  }
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
      <ExperienceCard {...rwth}/>
      <ExperienceCard {...spaceac}/>
      <ExperienceCard {...assumption}/>
      </div>
    </main>
  );
}

export default Experience;