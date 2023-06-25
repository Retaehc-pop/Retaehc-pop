import React from "react";
import ContactIcons from "../container/contactIcons";
import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { montserrat} from "../lib/fonts";
export const metadata: Metadata = {
  title: "Papop",
  generator: "Next.js",
  applicationName: "Papop's Website",
  referrer: "origin-when-cross-origin",
  description: "Papop's website",
  keywords: [
    "Papop",
    "retaehc",
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
        {children}
        <ContactIcons />
        <footer>
          <p>©{new Date().getFullYear()} </p>
        </footer>
      </body>
    </html>
  );
}
