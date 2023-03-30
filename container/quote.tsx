import Image from "next/image";
import styles from "./Quote.module.scss";
import Link from "next/link";

const Quote = () => {
  return (
    <main className={styles.main}>
      <div>
        <h3>" I'm a computer science student at RWTH Aachen University. 
          I'm passionate about coding, and spend my free time exploring AI 
          and supercomputers concept.I am also experienced in website development, 
          with a particular focus on Nextjs. "</h3>
        <p>Papop</p>
      </div>
    </main>
  )
}

export default Quote;