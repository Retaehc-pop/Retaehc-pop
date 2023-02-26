"use client";
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { config } from "@react-spring/web";
import { useState } from "react";
import styles from "../styles/Components.module.scss";

type Prototype = {
  text: string;
};

const JumpText: React.FC<Prototype> = (props) => {
  const { text } = props;

  const [hoveredIndex, setHoveredIndex] = useState(-1)
  const springProps = useSpring({
    transform: "translateY(-50px)" ,
    scale: 1.5,
    config: config.gentle,
  })

  const items = text.split("").map((str, index) => {
    if (str === " ") return <div key={index}>&nbsp;</div>
    const isHovered = hoveredIndex === index

    return (
      <animated.div
        key={index}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(-1)}
        style={isHovered ? {...springProps}:{}}
      >
        {str}
      </animated.div>
    )
  })

  return <div className={styles.jumpText}>{items}</div>
};

export default JumpText;
