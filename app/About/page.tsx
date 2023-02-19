import Head from "next/head";
import { NextPage } from "next";
import styles from "./About.module.scss";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page</title>
      </Head>
      <main>
        <section>
        <h3>Education</h3>
        <p>Assumption College, Bangkok Thailand</p>
        <p>RWTH Aachen University, Aachen Germany</p>
        <p>B.Sc Computer Science</p>
        </section>
        <section>
          <h3>Experience</h3>
          <p>2020</p>
          <p>
            SPACE AC institute of Technology Project Lead & Head of Programming
            department
          </p>
          <h3>Projects</h3>
          <h6>2020</h6>
          <p>Passenger 1</p>
          <h6>2021</h6>
          <p>Anual Cansat Competition 2021</p>
          <p>Thailand Cansat Competition 2021</p>
          <p>ALIEN SAT</p>
          <p>Food Buster</p>
          <p>Passenger 2</p>
          <p>Thai vivat innovation</p>
          <h6>2022</h6>
          <p>Microsoft Hackathon 2022</p>
          <p>Juno V1 SRP Sounding Rocket (Low Altitude)</p>
          <h6>2023</h6>
          <p>Work in Progress</p>
        </section>
      </main>
    </>
  );
};
export default About;
