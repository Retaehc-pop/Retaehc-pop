"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "../styles/Carousel.module.scss";
import Image from "next/image";
import Link from "next/link";

type PropType = {
  slides: {
    name: string;
    image: string;
    link: string;
  }[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [emblaApi, setScrollProgress]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className={styles.embla}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {slides.length > 0 ? (
            slides.map((slide, index) => (
              <div className={styles.slide} key={index}>
                <Link href={slide.link ? slide.link : ""} passHref>
                  <Image
                    className={styles.slide__img}
                    src={slide.image ? slide.image:"/test.jpg"}
                    unoptimized={true}
                    alt={slide.name}
                    width={300}
                    height={300}
                  />
                </Link>
              </div>
            ))
          ) : (
            <div className={styles.slide}>
              <Image
                className={styles.slide__img}
                src={"/test.jpg"}
                unoptimized={true}
                alt="Your alt text"
                width={300}
                height={300}
              />
            </div>
          )}
        </div>
      </div>
      {slides.length > 0 ? (
        <div className={styles.progress}>
          <div
            className={styles.progress__bar}
            style={{ transform: `translateX(${scrollProgress}%)` }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Carousel;
