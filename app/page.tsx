import styles from "./Page.module.scss";
import PageBanner from "../components/pageBanner";
import {
  useChain,
  animated,
  useSpring,
  useSpringRef,
  config,
} from "@react-spring/web";
import Home from "../container/home";
import About from "../container/about";
import Projects from "../container/projects";
import ProjectGrid from "../container/projectsalt";


const Page = () => {
  return (
    <div>
      <PageBanner>Papop</PageBanner>
      {/* <main className={styles.main}> */}
        <Home />
        <About />
        <Projects />
        {/* <ProjectGrid /> */}
      {/* </main> */}
    </div>
  );
};

export default Page;
