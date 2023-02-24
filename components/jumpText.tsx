"use client";
import React from "react";
import { useSpring, useSpringRef, animated } from "@react-spring/web";
import { config } from "@react-spring/web";
import { useState } from "react";
import styles from "../styles/Components.module.scss";

type Prototype = {
  text: string;
  duration?: number;
};

const JumpText: React.FC<Prototype> = (props) => {
  const { text, duration = 100 } = props;

  const [hoveredIndex, setHoveredIndex] = useState(-1)

  const items = text.split("").map((str, index) => {
    if (str === " ") return <div key={index}>&nbsp;</div>
    const isHovered = hoveredIndex === index
    const springProps = useSpring({
      transform: isHovered ? "translateY(-50px)" : 'translateY(0px)',
      scale: isHovered ? 1.5 : 1,
      config: config.gentle,
    })

    return (
      <animated.div
        key={index}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(-1)}
        style={{...springProps}}
      >
        {str}
      </animated.div>
    )
  })

  return <div className={styles.jumpText}>{items}</div>
};

export default JumpText;
