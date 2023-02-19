import Image from "next/image";
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
import Typescript from "../public/svg/typescript.svg";


const Skills = () => {
  return (
    <div>
      <section>
        <p>Programming Languages</p>
        <div></div>
        <Arduino width={150} height={150} />
        <Css width={150} height={150} />
        <Numpy width={150} height={150} />
        <Go width={150} height={150} />
        <Typescript width={150} height={150} />
        <Mysql width={150} height={150} />
        <C width={150} height={150} />
        <Python width={150} height={150} />
        <Javascript width={150} height={150} />
        <Java width={150} height={150} />
        <Cpp width={150} height={150} />
        <Gitlab width={150} height={150} />
        <Html width={150} height={150} />
        <Jupyter width={150} height={150} />
        <Tensorflow width={150} height={150} />
        <Pytorch width={150} height={150} />
        <Rpi width={150} height={150} />
        <Nodejs width={150} height={150} />
        <Pandas width={150} height={150} />
        <Haskell width={150} height={150} />
        <Sass width={150} height={150} />
        <Rust width={150} height={150} />
        <Github width={150} height={150} />
        <Nextjs width={150} height={150} />
        <Solidity width={150} height={150} />

        <p>
          Python, C++, C, Java, ,TypeS cript, JavaScript, HTML, CSS, Haskell,
          Prolog,
        </p>
      </section>
      <section>
        <p>Frameworks</p>
        <p>React, Next.js, Node.js, Express.js, Django, Flask</p>
      </section>
      <section>
        <p>Database</p>
        <p>MySQL, MongoDB, Firebase</p>
      </section>
      <section>
        <p>Tools</p>
        <p>Git, Github, Gitlab, VS Code, Jira, Trello, Figma</p>
      </section>
      <section>
        <p>Other</p>
        <p>Arduino, Raspberry Pi, 3D Printing, CAD, FDM, SLA, SLS</p>
      </section>
    </div>
  );
};

export default Skills;
