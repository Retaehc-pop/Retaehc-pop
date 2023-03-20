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
  useTransition,
  animated,
  useInView
} from "@react-spring/web";
import Hypertext from "../components/hypertext";
import { technologyWithPosition } from "../lib/prisma";
import Icon from "../components/Icon";

async function getSkills() {
  const res = await fetch("../api/skill");
  return await res.json();
}

const About = () => {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [skill, setSkill] = useState<technologyWithPosition[]>([]);
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

  const skillElevateRef = useSpringRef();
  const skillOpenRef = useSpringRef();

  const { size, ...skillElevate } = useSpring({
    ref: skillElevateRef,
    from: {
      size: "5%",
      background: "hotpink",
      transform: "translateY(40vh)",
    },
    to: {
      size: openSkill ? "100%" : "10%",
      background: openSkill ? "white" : "var(--color-background)",
      transform: openSkill ? "translateY(0vh)" : "translateY(40vh)",
    },
    config: config.stiff,
  });

  const skillOpen = useTransition(openSkill ? skill : [], {
    ref: skillOpenRef,
    trail: 400 / skill.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
    config: config.gentle,
  });

  useChain(
    openSkill
      ? [skillElevateRef, skillOpenRef]
      : [skillOpenRef, skillElevateRef],
    [0.1, openSkill ? 0.3 : 0.6],
    100
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

  useEffect(() => {
    getSkills().then((res) => {
      setSkill(res);
    });
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
      <animated.div
        className={styles.skill_button}
        onClick={() => setOpenSkill(!openSkill)}
        style={{
          ...down,
          ...skillElevate,
          width: size,
          height: size,
          scale: openSkill ? "1" : `${1 + Math.abs(sine) / 10}`,
        }}
      >
        {!openSkill ? (
          <h3>{`<Skill/>`}</h3>
        ) : (
          skillOpen((styling, item) => (
            <animated.div
              className={styles.icons}
              style={{
                ...styling,
                top: item.position ? item.position.y + "%" : "50%",
                left: item.position ? item.position.x + "%" : "50%",
                scale: item.experties,
              }}
            >
              <div className={styles.icon}>
                <Icon name={item.name} />
              </div>
              <div className={styles.text}>
                <Hypertext text={item.name.toUpperCase()} />
              </div>
            </animated.div>
          ))
        )}
      </animated.div>
    </main>
  );
};
export default About;
