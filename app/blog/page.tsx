import Link from "next/link";
import { comfortaa } from "../../lib/fonts";

export default function Blog() {
  return (
    <main className={comfortaa.className}>
      <h1>Under Development</h1>
      <Link href="/">Home</Link>
    </main>
  );
}
