"use client";
import styles from "./Page.module.scss";
import PageBanner from "../components/pageBanner";
import Home from "../container/home";
import About from "../container/about";
import Projects from "../container/projects";
import End from "../container/end";
import { useInView } from "react-intersection-observer";
import Quote from "../container/quote";
import { useRef } from "react";
import { DotButton } from "../components/Button";
import { useState } from "react";
const Page = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const Homeref: any = useRef(null);
  const Aboutref: any = useRef(null);
  const Projectref: any = useRef(null);
  
  const scrollTo = (ref: any) => {
    ref.current.scrollIntoView();
  };

  const refs = [Homeref, Aboutref, Projectref];
  return (
    <div>
      
      <aside className={styles.aside}>
        <ul>
          {
            refs.map((ref, index) => {
              return <DotButton 
              selected={index === selectedIndex}
              onClick={() => {
                setSelectedIndex(index)
                scrollTo(ref)
              }}></DotButton>
            })
          }
        </ul>
      </aside>
      <PageBanner>Papop</PageBanner>
      <div ref={Homeref}>
        <Home />
      </div>
      <Quote />
      <div ref={Aboutref}>
        <About />
      </div>
      <div className={styles.half__page} />
      <div ref={Projectref}>
        <Projects />
      </div>
      <End />
    </div>
  );
};

export default Page;

