"use client";
import styles from "./About.module.scss";
import TextCarousel from "../components/textCarousel";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  useSpring,
  config,
  useChain,
  useSpringRef,
  animated,
} from "@react-spring/web";
import Hypertext from "../components/hypertext";
import Icon from "../components/Icon";


const About = () => {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [sine, setSine] = useState(0);
  const [openSkill, setOpenSkill] = useState(false);
  const leftRef = useSpringRef();
  const upRightRef = useSpringRef();
  const downRightRef = useSpringRef();
  const downRef = useSpringRef();

  const left = useSpring({
    ref: leftRef,
    from: { transform: "translateX(-100%)", opacity: 0 },
    to: { transform: "translateX(0%)", opacity: 1 },
    config: config.gentle,
  });
  const upRight = useSpring({
    ref: upRightRef,
    from: { transform: "translateY(-100%)", opacity: 0 },
    to: { transform: "translateY(0%)", opacity: 1 },
    config: config.gentle,
  });
  const downRight = useSpring({
    ref: downRightRef,
    from: { transform: "translateY(100%)", opacity: 0 },
    to: { transform: "translateY(0%)", opacity: 1 },
    config: config.gentle,
  });
  const down = useSpring({
    ref: downRef,
    from: {
      transform: "translateY(100%)",
      scale: 2,
      opacity: 0,
    },
    to:{
      transform: "translateY(0%)",
      scale: 5,
      opacity: 1,
    },
    config: config.gentle,
  });
  useChain([leftRef, upRightRef, downRightRef, downRef],
    [0, 0.5, 0.5, 0.7]
  );
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

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setSine(Math.sin(iteration));
      iteration += 0.01;
    }, 10);
    return () => clearInterval(interval);
  }, []);


  return (
    <main className={styles.main}>
      <animated.div
        className={styles.pic}
        style={{
          ...left,
          transform: `translate(${mousePos.x / 100}px,${mousePos.y / 100}px) `,
        }}
      >
        <Image
          src="/profile.jpg"
          alt="profile picture of Papop"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </animated.div>
      <div
        style={{
          transform: `translate(${mousePos.x / 150}px,${mousePos.y / 150}px) `,
        }}
      >
        <animated.section style={{ ...downRight }}>
          <h3>Education</h3>
          <TextCarousel
            slides={[
              {
                title: "RWTH Aachen University",
                secondTitle: "B.Sc Computer Science",
                description: ["2022-Present", ""],
              },
              {
                title: "Assumption College",
                secondTitle: "Science-Engineering",
                description: ["2015-2022", "GPAX: 3.8"],
              },
            ]}
          />
        </animated.section>
        <animated.section style={{ ...upRight }}>
          <h3>Experience</h3>
          <TextCarousel
            slides={[
              {
                title: "Technical Lead",
                secondTitle: "SPACE AC Institute of technology",
                description: ["2020-2022"],
              },
            ]}
          />
        </animated.section>
      </div>
    </main>
  );
};
export default About;
