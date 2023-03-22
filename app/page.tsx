'use client'
import styles from "./Page.module.scss";
import PageBanner from "../components/pageBanner";
import Home from "../container/home";
import About from "../container/about";
import Projects from "../container/projects";
import End from "../container/end";
import { useInView } from "react-intersection-observer";



const Page = () => {



  return (
    <div>
      <PageBanner>Papop</PageBanner>
        <Home />
        <About />
        <div className={styles.half__page}/>
        <Projects />
        <End />
    </div>
  );
};

export default Page;
