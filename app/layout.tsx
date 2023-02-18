import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/favicon.ico";
import { Hypertext } from "../components/hypertext";
import '../styles/globals.scss';

export default function RootLayout({ children }:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <Head>
        <title>Retaehc | Pop</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Homepage of Papop" />
      </Head>
      <body>
        <nav>
          <ul>
            <li>
            <Image src={Logo} alt="icon" width={50} height={50}/>
            </li>
            <li>
              <Link href=""><Hypertext texts="Home">Home</Hypertext></Link>
              <Link href="/About"><Hypertext texts="About">About</Hypertext></Link>
              <Link href=""><Hypertext texts="Project">Project</Hypertext></Link>
            </li>
          </ul>
          </nav>
          {children}
        <footer>
          <p>this is a test footer</p>
          </footer></body>
    </html>
  )
}
