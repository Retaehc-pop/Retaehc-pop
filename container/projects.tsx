"use client";
import PageBanner from "../components/pageBanner";
import Carousel from "../components/carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import React from "react";
import styles from "./Projects.module.scss";
import { Project } from "@prisma/client";
import { useState, useEffect } from "react";

async function getProjects(year: number) {
  const res = await fetch(`../api/year?year=${year}`);
  const data = await res.json();
  return data;
}

type YearProjectType = {
  year: number;
  project: Project[];
};

const YearProject = ({ year }: { year: number }) => {
  const [picture, setPicture] = useState<{ name: string; link: string; image: string }[]>();

  useEffect(() => {
    getProjects(year).then((projects) => {
      setPicture(
        projects.map((p:any) => {
          return {
            name: p.name,
            image: p.image,
            link: `/project/${p.name}`,
          };
        })
      );
    });
  }, []);

  const OPTIONS: EmblaOptionsType = {
    loop: true,
    inViewThreshold: 0,
    dragFree: true,
  };

  return (
    <section className={styles.year_section}>
      <h2>{year}</h2>
      <Carousel slides={picture? picture:[]} options={OPTIONS} />
    </section>
  );
};

const Projects = () => {
  const years = [2020, 2021, 2022, 2023];
  return (
    <>
      <PageBanner>Project</PageBanner>
      <main className={styles.main}>
        <section>
          {years.map((year) => {
            return <YearProject year={year} />;
          })}
        </section>
      </main>
    </>
  );
};
export default Projects;
