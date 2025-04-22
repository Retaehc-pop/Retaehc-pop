'use client'
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from './Page.module.scss'
import { comfortaa } from "../../lib/fonts";
import { projectWithInfo } from "../../lib/prisma";
import ProjectBanner from "../../components/projectBanner";

async function getAllProjects() {
  const res = await fetch(`../api/projects`);
  const data = await res.json();
  return data;
}

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllProjects().then((data) => setProjects(data));
  }, []);

  return (
    <main className={comfortaa.className}>
      <div className={styles.quater__page}>
        <h1>Project</h1>
      </div>
      <div className={styles.wrapper}>
        {projects ?
          projects.map((project: projectWithInfo) => (
            <ProjectBanner key={project.id} project={project} />
          )) :
          <p style={{ fontWeight: '400' }}>loading...</p>
        }
      </div>
    </main>
  );
};

export default Project;
