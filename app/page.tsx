"use client"
import Head from "next/head";
import Image from "next/image";
import styles from "./Home.module.scss";
import { HypertextLoop } from "../components/hypertextloop";
import Typing from "../components/typing";
import PageBanner from "../components/pageBanner";
const Page = () => {

  return (
    <>
      <PageBanner>Home</PageBanner>
      <main className={styles.main}>
        <div className={styles.name}>
          <Typing context="Papop Lekhapanyaporn" speed={1500} cursor={true} />
        </div>
      </main>
    </>
  );
};

export default Page;
