import Link from "next/link";
import styles from "./Page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { comfortaa } from "../lib/fonts";
export default function NotFound() {
  return (
    <main className={`${comfortaa.className} ${styles.notfound}`}>
      <h1>404</h1>
      <h2>Go Back! There&apos;s nothing here</h2>
      <div>
        <Link href="/"><FontAwesomeIcon icon={faHome} /></Link>
      </div>
    </main>
  );
}
