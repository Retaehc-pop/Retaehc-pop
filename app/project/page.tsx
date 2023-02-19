import Head from "next/head";
import { NextPage } from "next";
const Project:NextPage = () => {
  return (
    <>
      <Head>
        <title>Page</title>
      </Head>
      <main>
        <section>
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
export default Project;