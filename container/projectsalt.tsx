"use client";
import React from "react";
import { useState, useEffect } from "react";
import { projectWithInfo } from "../lib/prisma";
import Image from "next/image";
import styles from "./Projects.module.scss";
async function getAllProjects() {
  const res = await fetch(`../api/projects`);
  const data = await res.json();
  return data;
}
import Link from "next/link";
import { useSpring, animated, config} from "@react-spring/web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
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

const Project = ({ project }: { project: projectWithInfo }) => {

  const [hover, setHover] = useState(false);
  const textStyles = useSpring({
    // height: hover ? '0' : '100%',
    config: config.stiff,
  });
  useEffect(() => {
    console.log(hover);
  }, [hover]);

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
      <div className={styles.project__info} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        <p className={styles.project__date}>
          {MONTH[new Date(project.date).getMonth()]}{" "}
          {new Date(project.date).getFullYear()}
        </p>
        <h1 className={styles.project__title}>{project.name}</h1>
        <animated.p style={textStyles} className={styles.project__description}>{project.description}</animated.p>
        <div className={styles.project__links}>
          <div className={styles.project__tags}>
            {project.tags &&
              project.tags.map((tag:any) => (
                <p className={styles.project__tag}>{tag}</p>
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
        <div className={styles.project__line}></div>
      </div>
    </div>
  );
};
const ProjectGrid = () => {
  const [projects, setProjects] = useState<projectWithInfo[]>();
  const tem = {
    id: "6c55e667-0876-423c-8412-785eaa48e201",
    createdAt: "2023-03-03T14:40:04.981Z",
    updatedAt: "2023-03-06T23:54:21.318Z",
    published: true,
    hilight: false,
    name: "Passenger I",
    description: "High-altitude Balloon research project.",
    image: "/project/passenger1.png",
    url: "https://github.com/Retaehc-pop/PSG-I",
    source: null,
    role: "Software Developer",
    date: "2023-03-20T21:15:43.579Z",
    tags: ['research','software','hardware','embedded systems'],
    technologies: [
      {
        name: "arduino",
      },
      {
        name: "c",
      },
      {
        name: "cplusplus",
      },
      {
        name: "python",
      },
      {
        name: "raspberrypi",
      },
    ],
  };
  useEffect(() => {
    getAllProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  return (
    <main className={styles.main}>
      {/* {projects ? (
        projects.map((project) => <Project project={project} />)
      ) : (
        <h1> Loading... </h1>
      )} */}
      <Project project={tem}/>
    </main>
  );
};

export default ProjectGrid;
