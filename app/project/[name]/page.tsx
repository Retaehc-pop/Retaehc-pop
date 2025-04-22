'use client'
import { useEffect, useState } from "react";
import { comfortaa } from "../../../lib/fonts";
import styles from "./Page.module.scss";
import Image from "next/image";

async function getProject(name: string) {
  const res = await fetch(`../api/project?name=${name}`);
  const data = await res.json();
  console.log(data);
  return data;
}


export default function Page({ params }: { params: { name: string } }) {
  const [project, setProject] = useState({});

  useEffect(() => {
    getProject(params.name).then((data) => setProject(data));
  }, []);


  return (
    <main className={`${comfortaa.className} ${styles.page}`} >
      <div className={styles.imageBanner}>
        {
          project.image &&
          <Image
            src={project.image ? project.image : ""}
            alt={project.image ? project.name : ""}
            fill
            style={{ objectFit: "cover" }}
          />
        }
      </div>

      <section className={styles.title}>
        <h1>{params.name}</h1>
      </section>
      <section className={styles.info}>
        <div className={styles.projectDescription}>
          <h2>Desc</h2>
          <p>asdasd</p>
        </div>
        <div className={styles.projectGoal}>
          <h2>Project Goal</h2>
          <p>Lorem Ipsum lkasjdlaksjdlaksjd;alksa;lkjfasl;kjfasf asdkjahsdkjalfsa</p>
        </div>
        <div className={styles.personalContribution}>
          <h2>Personal Contribution</h2>
          <p>Lorem Ipsum lkasjdlaksjdasf asdkjahsdkjalfsa</p>
        </div>
        <div className={styles.links}>
          <h4>ref : </h4>
          <p>Lorem Ipsum lkasjdlaksjdlaksjd;alksa;lkjfasl;kjfasf asdkjahsdkjalfsa</p>
        </div>
        <div className={styles.tech}>
          <h4>Tech stack</h4>
          <p>Lorem Ipsum lkasjdlaksjdlaksjd;alksa;lkjfasl;kjfasf asdkjahsdkjalfsa</p>
        </div>
      </section>
    </main >
  )
}
