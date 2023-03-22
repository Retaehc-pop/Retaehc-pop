import Image from "next/image";
import styles from "./End.module.scss";
import Link from "next/link";

const End = () => {
  return (
    <main className={styles.main}>
      {/* <div>
        <Image src='/kc.jpg' alt="cover image" fill style={{objectFit:'cover'}} />
      </div> */}
      <div>
        <h1>Get In Touch</h1>
        <p>I'm currently looking for a new opportunity, my inbox is always open.</p>
          <Link href="mailto:papop.lekhapanyaporn@gmail.com" passHref>Email Me</Link>
      </div>
    </main>
  )
}

export default End;