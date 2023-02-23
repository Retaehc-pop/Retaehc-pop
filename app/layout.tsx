import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/favicon.ico";
import ContactIcons from "../container/contactIcons";
import  Hypertext from "../components/hypertext";
import '../styles/globals.scss';
import "@fortawesome/fontawesome-svg-core/styles.css";

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
              <Link href=""><Hypertext text="Home"/></Link>
              <Link href="/about"><Hypertext text="About"/></Link>
              <Link href="/project"><Hypertext text="Project"/></Link>
            </li>
          </ul>
          </nav>
          {children}
          <ContactIcons />
          <section className="footer_right">
            <p>©{new Date().getFullYear()} </p>
          </section>
        </body>
    </html>
  )
}
