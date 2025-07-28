import React from "react";
import ContactIcons from "../container/contactIcons";
import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { montserrat} from "../lib/fonts";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Logo from "../public/logo.svg";
export const metadata: Metadata = {
  title: "Papop",
  generator: "Next.js",
  applicationName: "Papop's Website",
  referrer: "origin-when-cross-origin",
  description: "Papop's website",
  keywords: [
    "Lekhapanyaporn",
    "Papop",
    "retaehc",
    "papop lekhapanyaporn",
    "pop",
    "papop",
    "papop's website",
    "papop's blog",
    "papop's portfolio",
  ],
  authors: [{ name: "Papop" }],
  colorScheme: "light",
  creator: "Papop lekhapanyaporn",
  publisher: "Papop lekhapanyaporn",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.className}`}>
      <body>
        <div style={{"margin":"0.5em","fontSize":"2em","position":"fixed","width":"50px","height":"50px","cursor":"pointer"}}>
          <Link href={"/"} passHref>
            <Logo style={{color:"var(--color-text)"}}/>
          </Link>
        </div>
        {children}
        <ContactIcons />
        <footer>
          <p>©{new Date().getFullYear()} </p>
        </footer>
      </body>
    </html>
  );
}
