import { NextPage } from "next";
import styles from "./test.module.scss";
import Haskell from "../../public/svg/Haskell.svg";
import Image from "next/image";


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
      <Image src={k2.svg} alt={k2.name} height={200} width={200} priority/>
      <img src="/svg/python.svg" alt={k2.name} />
      {/* <Image
            src="/profile.jpg"
            alt="profile picture of Papop"
            fill
            priority
            style={{ objectFit: "cover" }}
          /> */}
    </main>
  );
};

export default Page;
