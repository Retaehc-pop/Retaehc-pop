import Arduino from "../public/svg/arduino.svg";
import C from "../public/svg/c.svg";
import Cpp from "../public/svg/cplusplus.svg";
import Css from "../public/svg/css.svg";
import Git from "../public/svg/git.svg";
import Github from "../public/svg/github.svg";
import Gitlab from "../public/svg/gitlab.svg";
import Go from "../public/svg/go.svg";
import Haskell from "../public/svg/haskell.svg";
import Html from "../public/svg/html.svg";
import Java from "../public/svg/java.svg";
import Javascript from "../public/svg/javascript.svg";
import Jupyter from "../public/svg/jupyter.svg";
import Mysql from "../public/svg/mysql.svg";
import Nextjs from "../public/svg/nextjs.svg";
import Nodejs from "../public/svg/nodejs.svg";
import Numpy from "../public/svg/numpy.svg";
import Pandas from "../public/svg/pandas.svg";
import Python from "../public/svg/python.svg";
import Pytorch from "../public/svg/pytorch.svg";
import React from "../public/svg/react.svg";
import Rpi from "../public/svg/rpi.svg";
import Rust from "../public/svg/rust.svg";
import Sass from "../public/svg/sass.svg";
import Solidity from "../public/svg/solidity.svg";
import Tensorflow from "../public/svg/tensorflow.svg";
import Firebase from "../public/svg/firebase.svg";
import Typescript from "../public/svg/typescript.svg";
import Mongodb from "../public/svg/mongodb.svg";
import styles from "../container/Skills.module.scss";
import Hypertext from "../components/hypertext";

const Skills = () => {
  const Iconset = ({
    children,
    name,
  }: {
    children: React.ReactNode;
    name: string;
  }) => {
    return (
      <div className={styles.iconset}>
        {children}
        <span className={styles.text}>
          <Hypertext text={name}/>
        </span>
      </div>
    );
  };

  return (
    <div className={styles.main}>
      <section className={styles.container}>
        <Iconset name="Haskell">
          <Haskell className={styles.icon} />
        </Iconset>
        <Iconset name="Python">
          <Python className={styles.icon} />
        </Iconset>
        <Iconset name="Typescript">
          <Typescript className={styles.icon} />
        </Iconset>
        <Iconset name="Javascript">
          <Javascript className={styles.icon} />
        </Iconset>
        <Iconset name="C">
          <C className={styles.icon} />
        </Iconset>
        <Iconset name="C++">
          <Cpp className={styles.icon} />
        </Iconset>
        <Iconset name="Java">
          <Java className={styles.icon} />
        </Iconset>
        <Iconset name="Html">
          <Html className={styles.icon} />
        </Iconset>
        <Iconset name="Css">
          <Css className={styles.icon} />
        </Iconset>
        <Iconset name="Sass">
          <Sass className={styles.icon} />
        </Iconset>
        {/* <div className={styles.iconset}>
          <Python className={styles.icon} />
          <span className={styles.text}>
            <Hypertext texts={"Python"}>Python</Hypertext>
          </span>
          <div className={styles.tools}>
              <Pandas width={150} height={150} />
              <Numpy width={150} height={150} />
              <Jupyter width={150} height={150} />
              <Tensorflow width={150} height={150} />
              <Pytorch width={150} height={150} />
            </div>
        </div> */}
      </section>
      <section className={styles.container}>
        <Iconset name="React">
          <React className={styles.icon} />
        </Iconset>
        <Iconset name="Nextjs">
          <Nextjs className={styles.icon} />
        </Iconset>
        <Iconset name="Nodejs">
          <Nodejs className={styles.icon} />
        </Iconset>
      </section>
      <section className={styles.container}>
        <Iconset name="Mysql">
          <Mysql className={styles.icon} />
        </Iconset>
        <Iconset name="Firebase">
          <Firebase className={styles.icon} />
        </Iconset>
        <Iconset name="Mongodb">
          <Mongodb className={styles.icon} />
        </Iconset>
      </section>
      <section className={styles.container}>
        <Iconset name="Github">
          <Github className={styles.icon} />
        </Iconset>
        <Iconset name="Gitlab">
          <Gitlab className={styles.icon} />
        </Iconset>
        <Iconset name="Git">
          <Git className={styles.icon} />
        </Iconset>
      </section>
      <section className={styles.container}>
        <Iconset name="Arduino">
          <Arduino className={styles.icon} />
        </Iconset>
        <Iconset name="Rpi">
          <Rpi className={styles.icon} />
        </Iconset>
      </section>
    </div>
  );
};

export default Skills;
