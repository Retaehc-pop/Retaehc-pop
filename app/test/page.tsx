import { NextPage } from "next";
import styles from "./test.module.scss";
import Haskell from "../../public/svg/haskell.svg";
import Image from "next/image";
import Icon from "../../components/Icon";

const Page: NextPage = () => {
  const k1 = {
    name: "Haskell",
    // icon: <Haskell />,
    experties: 3,
    pos: { x: "1rem", y: "1rem" },
  };
  
  const k2 = {
    name: "Python",
    svg: "/svg/python.svg",
    experties: 3,
    pos: { x: "1rem", y: "1rem" },
  };

  return (
    <main className={styles.main}>
      <Haskell />
      <Icon name="Python"/>
    </main>
  );
};

export default Page;
