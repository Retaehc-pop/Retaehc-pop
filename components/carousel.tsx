"use client"
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from '../components/Carousel.module.scss'
type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  const [scrollProgress, setScrollProgress] = useState(0)

  const onScroll = useCallback(() => {
    if (!emblaApi) return
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [emblaApi, setScrollProgress])

  useEffect(() => {
    if (!emblaApi) return
    onScroll()
    emblaApi.on('scroll', onScroll)
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onScroll])
 
  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((index) => (
            <div className={styles.embla__slide} key={index}>
              {/* <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div> */}
              <img
                className={styles.embla__slide__img}
                src={index}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.embla__progress}>
        <div
          className={styles.embla__progress__bar}
          style={{ transform: `translateX(${scrollProgress}%)` }}
        />
      </div>
    </div>
  )
}

export default Carousel;
