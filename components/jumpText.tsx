"use client";
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { config } from "@react-spring/web";
import { useState } from "react";
import styles from "../styles/Components.module.scss";
import { useEffect } from "react";
type Prototype = {
  text: string;
};

const JumpText: React.FC<Prototype> = (props) => {
  const { text } = props;
  const [sine, setSine] = useState(0);

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setSine(Math.sin(iteration)-1);
      iteration += 0.05;
    }, 10);
    return () => clearInterval(interval);
  }, []);

  const { transform } = useSpring({
    transform: `translateY(${sine *1}rem)`,
    config: config.wobbly,
  });

  return (
  <animated.div className={styles.jumpText} style={{transform}}>{text}</animated.div>
  );
};

export default JumpText;
