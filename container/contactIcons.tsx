"use client";
import Image from "next/image";
import Link from "next/link";
import Hypertext from "../components/hypertext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEnvelopeOpen,
} from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./contactIcons.module.scss";
const ContactIcons = () => {
  return (
    <div className={styles.container}>
      <Link href="https://github.com/Retaehc-pop" passHref>
        <div>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          <span><Hypertext text="Github"/></span>
        </div>
      </Link>
      <Link href="https://www.linkedin.com/in/papop-lekhapanyaporn-2386b5229/" passHref>
        <div>
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          <span><Hypertext text="Linkedin"/></span>
        </div>
      </Link>
      <Link href="" passHref>
        <div>
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
          <span><Hypertext text="Twitter"/></span>
        </div>
      </Link>

      <Link href="mailto:papop.lekhapanyaporn@gmail.com" passHref>
        <div>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <span><Hypertext text="Email"/></span>
        </div>
      </Link>
    </div>
  );
};

export default ContactIcons;
