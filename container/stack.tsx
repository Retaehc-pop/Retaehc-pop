"use client";

import styles from './Stack.module.scss'
import { useState, useEffect } from 'react';
import C from "../public/svg/c.svg";
import Cpp from "../public/svg/cplusplus.svg";
import Python from "../public/svg/python.svg";
import Java from "../public/svg/java.svg";
import JS from "../public/svg/javascript.svg";
import TS from "../public/svg/typescript.svg";
import Haskell from "../public/svg/haskell.svg";
import HTML from "../public/svg/html.svg";
import CSS from "../public/svg/css.svg";
import NextJS from "../public/svg/nextjs.svg";
import React from "../public/svg/react.svg";
import Jupyter from "../public/svg/jupyter.svg";
import Tensorflow from "../public/svg/tensorflow.svg";
import Keras from "../public/svg/keras.svg";
import Pytorch from "../public/svg/pytorch.svg";
import Numpy from "../public/svg/numpy.svg";
import Matplotlib from "../public/svg/matplotlib.svg";
import Plotly from "../public/svg/plotly.svg";
import Pandas from "../public/svg/pandas.svg";
import Scikit from "../public/svg/scikit.svg";
import Git from "../public/svg/git.svg";
import Github from "../public/svg/github.svg";
import Gitlab from "../public/svg/gitlab.svg";
import Arduino from "../public/svg/arduino.svg";
import NodeJS from "../public/svg/nodejs.svg";
import AVR from "../public/svg/avr.svg";
import Yarn from "../public/svg/yarn.svg";
import Postgres from "../public/svg/postgresql.svg";
import Prisma from "../public/svg/prisma.svg";
import Mysql from "../public/svg/mysql.svg";
import OpenCV from "../public/svg/opencv.svg";
import Rpi from "../public/svg/rpi.svg";
import Anaconda from "../public/svg/anaconda.svg";
import CMake from "../public/svg/cmake.svg";
import { motion } from 'framer-motion';

interface SubstackProps {
    name: string;
    children?: React.ReactNode;
  }

const SubStack:React.FC<SubstackProps> = ({name, children}) => {
    return (
            <motion.div layout className={styles.skill__wrapper}>
              <div className={styles.skill__icon}>
                {children}
              </div>
              <p className={styles.skill__name}>
                {name}
              </p>
            </motion.div>
    );
  }

const Stack = () => {
    const categories = [
        {
            name: "Core Languages",
            style: {
                background: "linear-gradient(45deg, var(--color-red) 0%, rgba(255,255,255,255) 100%)"
            },
            stack:[
            <SubStack name="C"><C/></SubStack>,
            <SubStack name="C++"><Cpp/></SubStack>,
            <SubStack name="Python"><Python/></SubStack>,
            <SubStack name="Java"><Java/></SubStack>,
            <SubStack name="JS"><JS/></SubStack>,
            <SubStack name="TS"><TS/></SubStack>,
            <SubStack name="Haskell"><Haskell/></SubStack>,
            <SubStack name="HTML"><HTML/></SubStack>,
            <SubStack name="CSS"><CSS/></SubStack>
            ]
        },
        {
            name: "Computing",
            style: {
                background: "linear-gradient(45deg, var(--color-orange) 0%, rgba(255,255,255,255) 100%)"
            },
            stack:[
                <SubStack name="OpenCV"><OpenCV/></SubStack>,
                <SubStack name="OpenMP"></SubStack>,
                <SubStack name="MPI"></SubStack>,
                <SubStack name="Anaconda"><Anaconda/></SubStack>,
                <SubStack name="CMake"><CMake/></SubStack>,
            ]
        },
        {
            name: "Web Development",
            style: {
                background: "linear-gradient(45deg, var(--color-yellow) 0%, rgba(255,255,255,255) 100%)"
            },
            stack:[
                <SubStack name="NextJS"><NextJS/></SubStack>,
                <SubStack name="React"><React/></SubStack>,
                <SubStack name="NodeJS"><NodeJS/></SubStack>,
                <SubStack name="Yarn"><Yarn/></SubStack>
            ]
        },
        {
            name: "Data Science",
            style: {
                background: "linear-gradient(45deg, var(--color-blue) 0%, rgba(255,255,255,255) 100%)"
            },
            stack:[
                <SubStack name="Tensorflow"><Tensorflow/></SubStack>,
                <SubStack name="Keras"><Keras/></SubStack>,
                <SubStack name="Pytorch"><Pytorch/></SubStack>,
                <SubStack name="Numpy"><Numpy/></SubStack>,
                <SubStack name="Matplotlib"><Matplotlib/></SubStack>,
                <SubStack name="Plotly"><Plotly/></SubStack>,
                <SubStack name="Pandas"><Pandas/></SubStack>,
                <SubStack name="Scikit"><Scikit/></SubStack>,
                <SubStack name="Jupyter"><Jupyter/></SubStack>
            ]
        },
        {
            name: "Embedded System",
            style: {
                background: "linear-gradient(45deg, var(--color-purple) 0%, rgba(255,255,255,255) 100%)"
            },
            stack:[
                <SubStack name="Arduino"><Arduino/></SubStack>,
                <SubStack name="AVR"><AVR/></SubStack>,
                <SubStack name="RaspberryPi"><Rpi/></SubStack>
            ]
        },
        {
            name: "Database",
            style: {
                background: "linear-gradient(45deg, var(--color-green) 0%, rgba(255,255,255,255) 100%)"
            },
            stack:[
                <SubStack name="SQL"><Mysql/></SubStack>,
                <SubStack name="Postgres"><Postgres/></SubStack>,
                <SubStack name="Prisma"><Prisma/></SubStack>
            ]
        },
        {
            name: "Dev Ops",
            style: {
                background: "linear-gradient(45deg, var(--color-red) 0%,  rgba(255,255,255,255) 100%)"
            },
            stack:[
                <SubStack name="Git"><Git/></SubStack>,
                <SubStack name="Github"><Github/></SubStack>,
                <SubStack name="Gitlab"><Gitlab/></SubStack>
            ]
        },

    ]
    const [stack, setStack] = useState<any>("");
    return (
        <main className={styles.main}>
            <div className={styles.stack}>
                {
                    categories.map((category) => {
                        return (
                            <motion.div 
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.1 }
                            }}
                            whileTap={{ scale: 0.9 }}

                            onClick={()=>setStack(category)} 
                            key={category.name} 
                            style={category.style} 
                            className={styles.stack__container}>
                                <h4 className={styles.stack__title}>{category.name}</h4>
                            </motion.div>
                        );
                    })
                }
            </div>
            <div className={styles.display}>
                <h1>{stack.name}</h1>
                <div className={styles.skill__container}>
                    {
                        stack &&
                        stack.stack.map((skill:any) => {
                            return (
                                <div key={skill}>
                                    {skill}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </main>
    );
    }

export default Stack;   