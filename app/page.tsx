"use client";
import { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import Typing from "../components/typing";
import PageBanner from "../components/pageBanner";
import { useChain, animated, useSpring, useSpringRef } from "@react-spring/web";
import { config } from "@react-spring/web";
import Hypertext from "../components/hypertext";
import RollDownText from "../components/rollDownText";

const Page = () => {
  const typingref = useSpringRef();
  const fadeinref = useSpringRef();
  const backgroundref = useSpringRef();
  const [play, setPlay] = useState<boolean>(false);
  const speed = 1000;
  const typing = useSpring({
    ref: typingref,
    config: config.gentle,
    from: { scale: 1.5},
    delay: speed,
    to: { scale: 1},
  });
  const background = useSpring({
    ref: backgroundref,
    config: config.gentle,
    from: { opacity: 0},
    to: { opacity: 1},
  });
  const fadeinup = useSpring({
    ref: fadeinref,
    config: config.gentle,
    from: { opacity: 0, transform: "translateY(200px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
  });
  const fadeindown = useSpring({
    ref: fadeinref,
    config: config.gentle,
    from: { opacity: 0, transform: "translateY(-200px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
  });

  useChain(play ? [typingref, fadeinref, backgroundref] : [], [0, speed/1000, 2]);
  useEffect(() => {
    setPlay(true);
  }, []);

  return (
    <>
      <animated.div style={{ ...background }}>
        <PageBanner>Home</PageBanner>
      </animated.div>
      <main className={styles.main}>
        <animated.div className={styles.banner} style={{ ...fadeindown }}>
          <Hypertext text="👾 HI! I'M POP 👾" />
        </animated.div>
        <animated.div className={styles.name} style={{ ...typing }}>
          <Typing context="Papop Lekhapanyaporn" speed={speed} cursor={true} />
        </animated.div>
        <animated.div className={styles.banner} style={{ ...fadeinup }}>
          <Hypertext text="WELCOME TO MY WEBSITE" />
        </animated.div>
      </main>
    </>
  );
};

export default Page;
