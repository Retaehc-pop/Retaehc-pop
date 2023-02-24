"use client"
import styles from "../styles/Components.module.scss";
import { useEffect, useState } from "react";
const PageBanner = ({ children }: { children: string }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: window.innerWidth-e.clientX*2, y: e.clientY - mousePos.y*-2});
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.pageBanner}>
      <h1 style={{ transform: `translate(${mousePos.y/100}px,${ mousePos.x/100}px) ` }}>{children.toUpperCase()}</h1>
      {/* <p>{mousePos.x*100+" "+mousePos.y*10}</p> */}
    </div>
  );
};

export default PageBanner;
