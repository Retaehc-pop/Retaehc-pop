"use client";
import Link from "next/link";
import Hypertext from "../components/hypertext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.container}>
        <Link className={styles.menu} style={{fontSize:"2em",fontWeight:'400'}} href="/resume" passHref>
          <Hypertext text={"RESUME"}/> 
          <FontAwesomeIcon className={styles.arrow} icon={faArrowRight} />
        </Link>
        <Link className={styles.menu} style={{fontSize:"2em",fontWeight:'400'}} href="/blog" passHref>
          <Hypertext text={"BLOG"}/> 
          <FontAwesomeIcon className={styles.arrow} icon={faArrowRight} />
        </Link>
        <Link className={styles.menu} style={{fontSize:"2em",fontWeight:'400'}} href="/stack" passHref>
          <Hypertext text={"STACK"}/>
          <FontAwesomeIcon className={styles.arrow}  icon={faArrowRight} />
        </Link>
    </div>
  );
};

export default Menu;
