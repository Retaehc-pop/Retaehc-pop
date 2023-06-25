import Carousel from "../components/carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import { useState } from "react";
import styles from "./About.module.scss";
import Image from "next/image";

const Images = () => {
  const [images, setImages] = useState([
    "/profile.jpg",
    "/profile.jpg",
    "/profile.jpg",
  ]);
  const OPTIONS: EmblaOptionsType = {
    loop: true,
  };

  return (
    <div className={styles.image_container}>
      <Carousel options={OPTIONS}>
        {images.map((image, index) => (
          <Image
            className={styles.image}
            key={index}
            src={image}
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Images;
