'use client'
import styles from "./Page.module.scss";
import PageBanner from "../components/pageBanner";
import Home from "../container/home";
import About from "../container/about";
import Projects from "../container/projects";
import ProjectGrid from "../container/projectsalt";




const Page = () => {
  return (
    <div>
      <PageBanner>Papop</PageBanner>
        <Home />
        <About />
        {/* <Projects /> */}
        <ProjectGrid />
    </div>
  );
};

export default Page;
