"use client";
import React from "react";
import styles from "./Projects.module.scss";
import { useState, useEffect } from "react";
import { Project } from "@prisma/client";
import Image from "next/image";
async function getAllProjects() {
  const res = await fetch(`../api/projects`);
  const data = await res.json();
  return data;
}

const ProjectGrid = () => {
  const [projects, setProjects] = useState<Project[]>();

  useEffect(() => {
    getAllProjects().then((projects) => {
      setProjects(projects);
      console.log(projects);
    });
  }, []);

  return (
    <main className={styles.main}>
      {projects &&
        projects.map((project, index) =>
          index % 2 === 0 ? (
            <div className={styles.project} key={project.id}>
              <div className={styles.image} >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.container}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          ) : (
            <div className={styles.project} key={project.id}>
              <div className={styles.container} style={{alignItems:'end'}}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
              <div className={styles.image}>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          )
        )}
    </main>
  );
};

export default ProjectGrid;
