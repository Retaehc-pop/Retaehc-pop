"use client";
import Link from "next/link";
import Hypertext from "../components/hypertext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {faSun,faMoon} from "@fortawesome/free-solid-svg-icons";
import styles from "./contactIcons.module.scss";
import { faM } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
const ContactIcons = () => {
  const [theme, setTheme] = useState('light');
  const themeToggle = () => {
    if(theme === 'light'){
      document.documentElement.setAttribute('data-theme','dark');
      setTheme('dark');
      localStorage.setItem('theme','dark');
    }
    else{
      document.documentElement.setAttribute('data-theme','light');
      setTheme('light');
      localStorage.setItem('theme','light');
    }
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if(theme === 'dark'){
      document.documentElement.setAttribute('data-theme','dark');
      setTheme('dark');
    }
    else{
      document.documentElement.setAttribute('data-theme','light');
      setTheme('light');
    }
  })
  return (
    <div className={styles.container}>
      <div onClick={()=>themeToggle()} style={{cursor:"pointer"}}>
        <FontAwesomeIcon icon={theme==="light" ? faSun:faMoon} className={styles.icon} />
        <span><Hypertext text="THEME"/></span>
      </div>
      <Link href="https://github.com/Retaehc-pop" passHref>
        <div>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          <span><Hypertext text="GITHUB"/></span>
        </div>
      </Link>
      <Link href="https://www.linkedin.com/in/papop-lekhapanyaporn-2386b5229/" passHref>
        <div>
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          <span><Hypertext text="LINKEDIN"/></span>
        </div>
      </Link>
      <Link href="mailto:papop.lekhapanyaporn@gmail.com" passHref>
        <div>
          <FontAwesomeIcon icon={faM} className={styles.icon} />
          <span><Hypertext text="EMAIL"/></span>
        </div>
      </Link>
    </div>
  );
};

export default ContactIcons;
