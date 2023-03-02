"use client";
import PageBanner from "../../components/pageBanner";
import { NextPage } from "next";
import Carousel from "../../components/carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import React from "react";
import styles from "./Project.module.scss";
import Temp from "../../temp.json";
import { yearWithProjectpic } from "../../lib/prisma";
import { useState, useEffect } from "react";

async function getProjects() {
  const res = await fetch("../api/year");
  return await res.json();
}
type PropType = {
  year: string;
  project: {
    name: string;
    image: string;
  }[];
};

const YearProject: React.FC<PropType> = (props) => {
  const { year, project } = props;

  const pictures = project.map((p) => {
    return {
      name: p.name,
      image: p.image,
      link: `/project/${p.name}`,
    };
  });

  const OPTIONS: EmblaOptionsType = {
    loop: true,
    inViewThreshold: 0,
    dragFree: true,
  };

  return (
    <section className={styles.year_section}>
      <h2>{year}</h2>
      <Carousel slides={pictures} options={OPTIONS} />
    </section>
  );
};

const Project = () => {
  const [years, setYears] = useState<yearWithProjectpic[]>([]);

  useEffect(() => {
    getProjects().then((years) => {
      setYears(years);
    });
  }, []);
  return (
    <>
      <PageBanner>Project</PageBanner>
      <main className={styles.main}>
        <section>
          {years.map((year) => {
            return (
              <YearProject
                key={year.id}
                year={year.year.toString()}
                project={year.project}
              />
            );
          })}
        </section>
      </main>
    </>
  );
};
export default Project;
