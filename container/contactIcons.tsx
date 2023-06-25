"use client";
import Link from "next/link";
import Hypertext from "../components/hypertext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./contactIcons.module.scss";
import { faM } from "@fortawesome/free-solid-svg-icons";
const ContactIcons = () => {
  return (
    <div className={styles.container}>
      <Link href="https://github.com/Retaehc-pop" passHref>
        <div>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          <span><Hypertext text="GITHUB"/></span>
        </div>
      </Link>
      <Link href="https://www.linkedin.com/in/papop-lekhapanyaporn-2386b5229/" passHref>
        <div>
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          <span><Hypertext text="LINKEDIN"/></span>
        </div>
      </Link>
      <Link href="" passHref>
        <div>
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
          <span><Hypertext text="TWITTER"/></span>
        </div>
      </Link>

      <Link href="mailto:papop.lekhapanyaporn@gmail.com" passHref>
        <div>
          <FontAwesomeIcon icon={faM} className={styles.icon} />
          <span><Hypertext text="EMAIL"/></span>
        </div>
      </Link>
    </div>
  );
};

export default ContactIcons;
