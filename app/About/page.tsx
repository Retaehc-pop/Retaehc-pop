import Head from "next/head";
import { NextPage } from "next";
import styles from "./About.module.scss";
import PageBanner from "../../components/pageBanner";
import Skills from "../../container/skills";
import RollDownText from "../../components/rollDownText";
const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page</title>
      </Head>
      <main>
        <PageBanner>About</PageBanner>
        <section>
        <h3>Education</h3>
        <p>Assumption College, Bangkok Thailand</p>
        <p>RWTH Aachen University, Aachen Germany</p>
        <p>B.Sc Computer Science</p>
        </section>
        
        <RollDownText text={["1","2","3","4","5"]} delay={2000}/>
        <section>
          <h3>Experience</h3>
          <p>2020</p>
          <p>
            SPACE AC institute of Technology Project Lead & Head of Programming
            department
          </p>
        </section>
        <section>
          <h3>Skills</h3>
          <Skills/>
        </section>
      </main>
    </>
  );
};
export default About;
