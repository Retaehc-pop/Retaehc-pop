"use client"
import { useEffect,useState } from "react";
import styles from "./Home.module.scss";
import Typing from "../components/typing";
import PageBanner from "../components/pageBanner";
import { useChain,animated,useSpring,useSpringRef } from "@react-spring/web";
import { config } from '@react-spring/web'
import { Hypertext } from "../components/hypertext";

const Page = () => {
  const typingref = useSpringRef();
  const fadeinref = useSpringRef();
  const backgroundref = useSpringRef();
  const [play, setPlay] = useState<boolean>(false);
  const typing = useSpring({
    ref: typingref,
    config: config.gentle,
    from: { scale:1.5 },
    delay: 1500,
    to: {scale:1},
  });
  const background = useSpring({
    ref: backgroundref,
    config: config.gentle,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  const fadeinup = useSpring({
    ref: fadeinref,
    config: config.gentle,
    from: { opacity: 0,transform:"translateY(100px)"},
    to: { opacity: 1 },
  });
  const fadeindown = useSpring({
    ref: fadeinref,
    config: config.gentle,
    from: { opacity: 0,transform:"translateY(-100px)"},
    to: { opacity: 1 },
  });


  useChain(play?[typingref, fadeinref, backgroundref]:[], [0, 5, 10]);
  useEffect(() => {
    setPlay(true);
  }, []);


  return (
    <>
      <PageBanner>Home</PageBanner>
      <main className={styles.main}>
        <animated.div style={{...fadeindown}}>
          <Hypertext texts="Hello, I'm" >Hello, I'm Pop</Hypertext>
        </animated.div>
        <animated.div className={styles.name} style={{...typing}}>
          <Typing context="Papop Lekhapanyaporn" speed={1500} cursor={true} />
        </animated.div>
        <animated.div style={{...fadeinup}}>
          <Hypertext texts="welcome to my website" >welcome to my website</Hypertext>
        </animated.div>
      </main>
    </>
  );
};

export default Page;
