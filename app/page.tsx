"use client";
import styles from "./Page.module.scss";
import PageBanner from "../components/pageBanner";
import Home from "../container/home";
import About from "../container/about";
import Projects from "../container/projects";
import Experience from "../container/experience";
import { useRef, useEffect } from "react";
import { LineButton } from "../components/Button";
import { useState } from "react";
import Images from "../container/image";
import Hypertext from "../components/hypertext";
import { roboto_mono, comfortaa } from "../lib/fonts";

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

  const scrollTo = (ref: any) => {
    ref.current.scrollIntoView();
  };
  const refs = [
    { name: "home", ref: Homeref },
    { name: "about", ref: Aboutref },
    { name: "experience", ref: Experienceref },
    { name: "project", ref: Projectref },
  ];

  useEffect(() => {
    if (HomeinView) setSelectedIndex(0);
    if (AboutinView) setSelectedIndex(1);
    if (ExperienceinView) setSelectedIndex(2);
    if (ProjectinView) setSelectedIndex(3);
  }, [HomeinView, AboutinView, ProjectinView, ExperienceinView]);

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
      {/* <div className={styles.half__page} /> */}
      <div className={styles.quater__page}/>
      <div className={styles.info}>
        <section className={styles.about}>
          <div>
            <About />
          </div>
        </section>
        <section className={styles.information}>
          <div ref={Aboutref}>
            <Images />
          </div>
          <div ref={Experienceref}>
            <Experience />
          </div>
          <div ref={Projectref}>
            <Projects />
          </div>
          <div className={styles.quater__page} style={{ fontSize: "1.5rem" }}>
            <Hypertext text="MORE COMING SOON ... " />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
