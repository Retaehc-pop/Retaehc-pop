"use client";

import React from "react";
import { useEffect, useState } from "react";
import styles from "./Components.module.scss";
type Prototype = {
  context: string;
  speed: number;
  cursor: boolean;
};

const Typing: React.FC<Prototype> = (props) => {
  const { context, speed, cursor } = props;
  const [text, setText] = useState<string>("");
  // const [cursorState,setCursorState] = useState<string>("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < context.length) {
        setText(context.slice(0, index + 1));
        index += 1;
      } else {
        clearInterval(interval);
      }
    }, Math.round(speed/context.length));
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ padding: "0 1rem", textAlign: "left" }}>
      {text}
      {cursor ? <span className={styles.cursor}>_</span> : null}
    </div>
  );
};

export default Typing;
