import Head from "next/head";
import PageBanner from "../../components/pageBanner";
import { NextPage } from "next";
import Carousel from "../../components/carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import React from "react";
import styles from "./Project.module.scss"
import Temp from "../../temp.json"

type Prototype = {
  year: number;
  projects: 
    {
      name: string;
      role: string;
      description: string;
      image: string;
      teamSize: number;
      duration: string;
      link: string;
      technology?: string;
    }[]
  ;
};
const YearProject: React.FC<Prototype> = (props) => {
  const { year, projects } = props;
  const pictures = projects.map((project) => {
    return {
      name:project.name,
      image:project.image,
      link:project.link
    }
  });
  const OPTIONS:EmblaOptionsType = { loop: true, inViewThreshold: 0, dragFree: true };
  return (
    <section className={styles.year_section}>
      <h2>{year}</h2>
      <Carousel
        slides={pictures}
        options={OPTIONS}
      />
    </section>
  );
};

const Project: NextPage = () => {

  return (
    <>
      <Head>
        <title>Page</title>
      </Head>
      <main className={styles.main}>
        <PageBanner>Project</PageBanner>
        <section>
          {
            Temp.map((year) => {
              return (
                <YearProject key={year.year} year={year.year} projects={year.projects} />
              )
            })
          }
        </section>
      </main>
    </>
  );
};
export default Project;
