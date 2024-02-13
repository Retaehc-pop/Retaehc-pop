import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload ,faHome} from "@fortawesome/free-solid-svg-icons";
import styles from "./Page.module.scss";
import Link from "next/link";
import C from "../../public/svg/c.svg";
import Cpp from "../../public/svg/cplusplus.svg";
import Python from "../../public/svg/python.svg";
import Java from "../../public/svg/java.svg";
import JS from "../../public/svg/javascript.svg";
import TS from "../../public/svg/typescript.svg";
import Haskell from "../../public/svg/haskell.svg";
import HTML from "../../public/svg/html.svg";
import CSS from "../../public/svg/css.svg";
import NextJS from "../../public/svg/nextjs.svg";
import React from "../../public/svg/react.svg";
import Jupyter from "../../public/svg/jupyter.svg";
import Tensorflow from "../../public/svg/tensorflow.svg";
import Keras from "../../public/svg/keras.svg";
import Pytorch from "../../public/svg/pytorch.svg";
import Numpy from "../../public/svg/numpy.svg";
import Matplotlib from "../../public/svg/matplotlib.svg";
import Plotly from "../../public/svg/plotly.svg";
import Pandas from "../../public/svg/pandas.svg";
import Scikit from "../../public/svg/scikit.svg";
import Git from "../../public/svg/git.svg";
import Github from "../../public/svg/github.svg";
import Gitlab from "../../public/svg/gitlab.svg";
import Jira from "../../public/svg/jira.svg";
import Confluence from "../../public/svg/confluence.svg";
import Arduino from "../../public/svg/arduino.svg";
import NodeJS from "../../public/svg/nodejs.svg";
import AVR from "../../public/svg/avr.svg";
import Yarn from "../../public/svg/yarn.svg";
import Postgres from "../../public/svg/postgresql.svg";
import Prisma from "../../public/svg/prisma.svg";
import Mysql from "../../public/svg/mysql.svg";
import OpenCV from "../../public/svg/opencv.svg";
import Rpi from "../../public/svg/rpi.svg";
import Anaconda from "../../public/svg/anaconda.svg";
interface SubstackProps {
  name: string;
  children?: React.ReactNode;
}
const SubStack:React.FC<SubstackProps> = ({name, children}) => {
  return (
          <div className={styles.skill__wrapper}>
            <div className={styles.skill__icon}>
              {children}
            </div>
            <p className={styles.skill__name}>
              {name}
            </p>
          </div>
  );
}


const Stack = () => {
  return (
    <main className={styles.main}>
        <h1>My Stack</h1>
        <div className={styles.stack} >
          <div className={styles.stack__container}>
            <h4 className={styles.stack__title}>Core languages</h4>
            <div className={styles.skill__container}>
              <SubStack name="C"><C/></SubStack>
              <SubStack name="C++"><Cpp/></SubStack>
              <SubStack name="Python"><Python/></SubStack>
              <SubStack name="Java"><Java/></SubStack>
              <SubStack name="JS"><JS/></SubStack>
              <SubStack name="TS"><TS/></SubStack>
              <SubStack name="Haskell"><Haskell/></SubStack>
              <SubStack name="HTML"><HTML/></SubStack>
              <SubStack name="CSS"><CSS/></SubStack>
            </div>
          </div>
          <div className={styles.stack__container}>
            <h4 className={styles.stack__title}>Data Science</h4>
            <div className={styles.skill__container}>
              <SubStack name="Tensorflow"><Tensorflow/></SubStack>
              <SubStack name="Keras"><Keras/></SubStack>
              <SubStack name="Pytorch"><Pytorch/></SubStack>
              <SubStack name="Numpy"><Numpy/></SubStack>
              <SubStack name="Matplotlib"><Matplotlib/></SubStack>
              <SubStack name="Plotly"><Plotly/></SubStack>
              <SubStack name="Pandas"><Pandas/></SubStack>
              <SubStack name="Scikit"><Scikit/></SubStack>
              <SubStack name="Jupyter"><Jupyter/></SubStack>
            </div>
          </div>
          
          <div className={styles.stack__container}>
            <h4 className={styles.stack__title}>Embedded System</h4>
            <div className={styles.skill__container}>
              <SubStack name="Arduino"><Arduino/></SubStack>
              <SubStack name="AVR"><AVR/></SubStack>
              <SubStack name="RaspberryPi"><Rpi/></SubStack>
            </div>
          </div>
          <div className={styles.stack__container}>
            <h4 className={styles.stack__title}>Web Development</h4>
            <div className={styles.skill__container}>
              <SubStack name="Next.js"><NextJS/></SubStack>
              <SubStack name="Node.js"><NodeJS/></SubStack>
              <SubStack name="React"><React/></SubStack>
              <SubStack name="Yarn"><Yarn/></SubStack>
            </div>
          </div>
          <div className={styles.stack__container}>
            <h4 className={styles.stack__title}>Database</h4>
            <div className={styles.skill__container}>
              <SubStack name="SQL"><Mysql/></SubStack>
              <SubStack name="Postgres"><Postgres/></SubStack>
              <SubStack name="Prisma"><Prisma/></SubStack>
            </div>
          </div>
          <div className={styles.stack__container}>
            <h4 className={styles.stack__title}>Computing</h4>
            <div className={styles.skill__container}>
              <SubStack name="OpenCV"><OpenCV/></SubStack>
              <SubStack name="OpenMP"></SubStack>
              <SubStack name="MPI"></SubStack>
              <SubStack name="Anaconda"><Anaconda/></SubStack>
            </div>
          </div>
          <div className={styles.stack__container}>
            <h4 className={styles.stack__title}>Dev Ops</h4>
            <div className={styles.skill__container}>
              <SubStack name="Git"><Git/></SubStack>
              <SubStack name="Github"><Github/></SubStack>
              <SubStack name="Gitlab"><Gitlab/></SubStack>
              <SubStack name="Jira"><Jira/></SubStack>
              <SubStack name="Confluence"><Confluence/></SubStack>
            </div>
          </div>
          {/*
          <SubStack title="Computing" skills={["OpenMP", "MPI", "OpenCV"]} />
          <SubStack title="Environment" skills={["Unix", "Linode", "DigitalOcean"]} />
          <SubStack title="Build" skills={["CMAKE", "Anaconda"]} /> */}
        </div>
    </main>
  )
}
export default Stack;