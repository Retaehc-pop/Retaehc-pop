"use client";
import styles from "./About.module.scss";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Carousel from "../components/carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Hypertext from "../components/hypertext";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { comfortaa } from "../lib/fonts";
const About = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [images, setImages] = useState([
    "/profile.jpg",
    "/profile.jpg",
    "/profile.jpg",
  ]);
  const OPTIONS: EmblaOptionsType = {
    loop: true,
  };
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: window.innerWidth - e.clientX * 1.2,
        y: window.innerHeight - e.clientY * 1.1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className={styles.about} style={{transform:`translate(${mousePos.x * 0.02}px,${mousePos.y * 0.02}px)`}}>
      <p>HI! I'M POP</p>
      <h1 className={comfortaa.className} >Papop Lekhapanyaporn</h1>
      <h2 className={comfortaa.className}>Software Developer</h2>
      <p className={styles.introduction}>
        I'm a self taught developer who is currently studying in Computer science. 
        I have huge interest in Deep Learning, Quantum Computing and High Performance Computing! 
        </p>
        <p className={styles.introduction}>
        I'm currently focusing on leaning new things in the computer science area in my university. Beside that, 
        I'm also interested in building some small projects and teach beginner about coding.
        </p>
        <p className={styles.introduction}>
        Coding is my passion and I love to learn new things!
        </p>
      <div>
        <Link className={styles.menu} style={{fontWeight:'400'}} href="/resume" passHref>
          <Hypertext text={"RESUME"}/> 
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
        <Link className={styles.menu} style={{fontWeight:'400'}} href="/blog" passHref>
          <Hypertext text={"BLOG"}/> 
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
        <Link className={styles.menu} style={{fontWeight:'400'}} href="/stack" passHref>
          <Hypertext text={"STACK"}/>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>

      </div>
    </main>
  );
};
export default About;
