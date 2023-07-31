"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { comfortaa } from "../../lib/fonts";
import { ProjectElement } from "../../container/projects";
import { projectWithInfo } from "../../lib/prisma";
import styles from "./Page.module.scss";

async function getAllProjects() {
  const res = await fetch(`../api/projects`);
  const data = await res.json();
  return data;
}
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

const Project = () => {
  const [projects, setProjects] = useState<projectWithInfo[]>([]);
  const [selected, setSelected] = useState<projectWithInfo>();

  useEffect(() => {
    getAllProjects().then((data) => {
      setProjects(data);
      console.log(data);
    });
  }, []);

  return (
    <main className={`${comfortaa.className} ${styles.main}`}>
      <div className={styles.projects}>
        <section className={styles.info}>
          {selected ? (
            <>
              <p>
                {MONTH[new Date(selected.date).getMonth()]}{" "}
                {new Date(selected.date).getFullYear()}
              </p>
              <h1>{selected.name}</h1>
              <p>{selected.description}</p>
              <div className={styles.tags}>
                {selected.tags.map((tag) => (
                  <p className={styles.tag} key={tag.id}>
                    {tag.name}
                  </p>
                ))}
              </div>
            </>
          ) : (
            <>
              <h1>Project</h1>
              <p>select to view in detail</p>
            </>
          )}
        </section>
        <section className={styles.wrapper}>
          {projects ? (
            projects.map((project) => (
              <div
                className={styles.project}
                onClick={() => setSelected(project)}
              >
                <ProjectElement key={project.id} project={project} />
              </div>
            ))
          ) : (
            <p style={{ fontWeight: "400" }}>loading...</p>
          )}
        </section>
      </div>
    </main>
  );
};

export default Project;
