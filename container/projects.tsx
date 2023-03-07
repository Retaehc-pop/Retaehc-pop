"use client";
import Carousel from "../components/carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import React from "react";
import styles from "./Projects.module.scss";
import { Project } from "@prisma/client";
import { useState, useEffect } from "react";
import { type } from "os";

async function getProjects() {
  const res = await fetch(`../api/projects?hilight=true`);
  const data = await res.json();
  return data;
}

type slideObj = {
  name: string;
  image: string;
  link: string;
};
const Project = ({ project }: { project: slideObj[] }) => {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    inViewThreshold: 0,
    dragFree: true,
  };

  return (
    <section className={styles.year_section}>
      <Carousel slides={project ? project : []} options={OPTIONS} />
    </section>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState<slideObj[]>();

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(
        data.map((project: Project) => {
          return {
            name: project.name,
            image: project.image,
            link: project.name,
          };
        })
      );
    });
    console.log("done")
  }, []);

  return (
    <main className={styles.main}>
      {projects ? <Project project={projects} /> : <h1> Loading... </h1>}
    </main>
  );
};
export default Projects;
