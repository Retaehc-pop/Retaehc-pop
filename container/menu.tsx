"use client";
import Link from "next/link";
import Hypertext from "../components/hypertext";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import styles from "./Menu.module.scss";
import { useState } from "react";

// const isDarkTheme = () =>{
//   const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
//   const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
//   const mqListener = ( e=> {
//     setIsDarkTheme(e.matches);
//   })

// }

const Menu = () => {
  const [isDark, setisDark] = useState(false);

  

  const setThemeColor = () =>{
    document.querySelector("body")?.setAttribute('data-theme',isDark? 'dark':'light');
  }

  return (
    <div className={styles.container}>
      <div>
        
      </div>
      <div >
        <FontAwesomeIcon icon={isDark ?  faSun:faMoon} className={styles.icon} />
      </div>
    </div>
  );
};

export default Menu;
