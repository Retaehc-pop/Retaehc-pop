import Link from "next/link";
import styles from "./Page.module.scss";
import { comfortaa } from "../lib/fonts";

export default function NotFound() {
  return (
    <main className={`${comfortaa.className} ${styles.notfound}`}>
      <h1>404</h1>
      <h2>Go Back! There&apos;s nothing here</h2>
      <Link href="/">Home</Link>
    </main>
  );
}
