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
      <body>
        <nav>
          <ul>
            <li>
            <Image src={Logo} alt="icon" width={50} height={50}/>
            </li>
            <li>
              <Link href=""><Hypertext text="HOME"/></Link>
              <Link href="/about"><Hypertext text="ABOUT"/></Link>
              <Link href="/project"><Hypertext text="PROJECT"/></Link>
            </li>
          </ul>
          </nav>
          <ContactIcons />
          <section className="footer_right">
            <p>©{new Date().getFullYear()} </p>
          </section>
          {children}
        </body>
    </html>
  )
}
