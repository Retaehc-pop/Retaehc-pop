"use client";
import React from "react";
import { useState, useEffect } from "react";
import { projectWithInfo } from "../lib/prisma";
import Image from "next/image";
import styles from "./Projects.module.scss";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { EmblaOptionsType } from "embla-carousel-react";
import Carousel from "../components/carousel";

const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

async function getAllProjects() {
  const res = await fetch(`../api/projects`);
  const data = await res.json();
  return data;
}

const Project = ({ project }: { project: projectWithInfo }) => {
  return (
    <div className={styles.project}>
      <div className={styles.project__image}>
        {project.image && (
          <Image
            src={project.image}
            alt={project.name}
            fill
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <div className={styles.project__info} style={project.image?{color:'var(--color-background)'}:{color:'var(--color-text)'}}>
        <p className={styles.project__date}>
          {MONTH[new Date(project.date).getMonth()]}{" "}
          {new Date(project.date).getFullYear()}
        </p>
        <h1 className={styles.project__title}>{project.name}</h1>
        <p className={styles.project__description}>{project.description}</p>
        <div className={styles.project__links}>
          <div className={styles.project__tags}>
            {project.tags &&
              project.tags.map((tag:any) => (
                <p key={tag.id} className={styles.project__tag}>{tag.name}</p>
              ))}
          </div>
          <div className={styles.project__tags}>
            {
              project.url&&
              <Link href={project.url} passHref>
                <FontAwesomeIcon icon={faLink}/>
              </Link>
            }
            {
              project.source&&
              <Link href={project.source} passHref>
                <FontAwesomeIcon icon={faGithub}/>
              </Link>
            }
          </div>
        </div>
        <div className={styles.project__line} style={project.image?{backgroundColor:'var(--color-background)'}:{backgroundColor:'var(--color-text)'}}></div>
      </div>
    </div>
  );
};
const Projects = () => {
  const [projects, setProjects] = useState<projectWithInfo[]>();
  useEffect(() => {
    getAllProjects().then((projects) => {
      setProjects(projects);
      console.log(projects);
    });
  }, []);
  const OPTIONS:EmblaOptionsType ={
    loop: true,
    draggable: true,
    dragFree: true,

  }
  return (
    <main className={styles.main}>
      {
      projects ?(<Carousel options={OPTIONS}>
        {
          projects.map((project) => <Project key={project.id} project={project} />)

        }
      </Carousel>)
      :
        <h1>loading ... </h1>
      }
    </main>
  );
};

export default Projects;
