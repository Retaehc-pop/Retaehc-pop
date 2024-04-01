"use client";
import styles from "./Page.module.scss";
import PageBanner from "../components/pageBanner";
import Home from "../container/home";
import About from "../container/about";
import Images from "../container/image";
import Experience from "../container/experience";
import Projects from "../container/projects";
import Stack from "../container/stack";
import { useRef, useEffect } from "react";
import { LineButton } from "../components/Button";
import { useState } from "react";
import Hypertext from "../components/hypertext";
import { roboto_mono, comfortaa } from "../lib/fonts";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const useElementOnScreen = (options: any) => {
  const containerRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    let observerRefValue: Element | null = null; // <-- variable to hold ref value

    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
      observerRefValue = containerRef.current; // <-- save ref value
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue); // <-- use saved value
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

const Page = () => {
  const option = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [Homeref, HomeinView]: any = useElementOnScreen(option);
  const [Aboutref, AboutinView]: any = useElementOnScreen(option);
  const [Experienceref, ExperienceinView]: any = useElementOnScreen(option);
  const [Projectref, ProjectinView]: any = useElementOnScreen(option);
  const [Stackref, StackInView]: any = useElementOnScreen(option);

  const scrollTo = (ref: any) => {
    ref.current.scrollIntoView();
  };

  const refs = [
    { name: "home", ref: Homeref },
    { name: "about", ref: Aboutref },
    { name: "experience", ref: Experienceref },
    { name: "project", ref: Projectref },
    { name: "stack", ref: Stackref}
  ];

  useEffect(() => {
    if (HomeinView) setSelectedIndex(0);
    if (AboutinView) setSelectedIndex(1);
    if (ExperienceinView) setSelectedIndex(2);
    if (ProjectinView) setSelectedIndex(3);
    if (StackInView) setSelectedIndex(4);
  }, [HomeinView, AboutinView, ProjectinView, ExperienceinView, StackInView]);

  return (
    <div>
      <aside className={styles.aside}>
        <ul>
          {refs.map((ref, index) => (
            <div
              key={index}
              className={
                index === selectedIndex
                  ? styles.binder__selected
                  : styles.binder
              }
            >
              <LineButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => {
                  setSelectedIndex(index);
                  scrollTo(ref.ref);
                }}
              />
            </div>
          ))}
        </ul>
      </aside>
      <PageBanner>Retaehc</PageBanner>
      <div ref={Homeref}>
        <Home />
      </div>
      <div className={styles.quater__page} ref={Aboutref}/>
      <div className={styles.side_by_side}>
        <section>
            <About />
        </section>
        <section className={styles.images}>
            <Images />
        </section>
      </div>
      {/* <div className={styles.half__page} /> */}
      <div className={styles.quater__page} ref={Experienceref}/>
      <div className={styles.side_by_side} >
          <section>
          <div className={styles.container}>
              <Link className={styles.menu} style={{fontSize:"2em",fontWeight:'400'}} href="/resume" passHref>
                <Hypertext text={"RESUME"}/> 
                <FontAwesomeIcon className={styles.arrow} icon={faArrowRight} />
              </Link>
              <div className={styles.menu} style={{fontSize:"2em",fontWeight:'400'}} onClick={()=>scrollTo(Projectref)}>
                <Hypertext text={"PROJECT"}/> 
                <FontAwesomeIcon className={styles.arrow} icon={faArrowRight} />
              </div>
              <div className={styles.menu} style={{fontSize:"2em",fontWeight:'400'}} onClick={()=>scrollTo(Stackref)}>
                <Hypertext text={"STACK"}/>
                <FontAwesomeIcon className={styles.arrow}  icon={faArrowRight} />
              </div>
          </div>
          </section>
          <section>
            <Experience />
          </section>
      </div>
      <div className={styles.quater__page} ref={Projectref}/>
      <div >
        <Projects />
      </div>
      <div className={styles.quater__page} />
      <div ref={Stackref}>
        <Stack />
      </div>
    </div>    
  );
};

export default Page;
