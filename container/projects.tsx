"use client";
import React from "react";
import { useState, useEffect } from "react";
import { projectWithInfo } from "../lib/prisma";
import Image from "next/image";
import styles from "./Projects.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Hypertext from "../components/hypertext";
import { comfortaa, roboto_mono } from "../lib/fonts";
import ProjectBanner from "../components/projectBanner";

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
  const res = await fetch(`../api/projects?highlight=1`);
  const data = await res.json();
  return data;
}

const Projects = () => {
  const [projects, setProjects] = useState<projectWithInfo[]>();

  useEffect(() => {
    getAllProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
      {projects ?
        projects.map((project) => (
          <ProjectBanner key={project.id} project={project} />
        )):
        <p style={{fontWeight:'400'}}>loading...</p>
      }
      </div>
      <Link className={styles.more} style={{fontWeight:'700'}} href="/project" passHref>
          <Hypertext text={"EXPLORE MORE"}/> 
          <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </main>
  );
};

export default Projects;