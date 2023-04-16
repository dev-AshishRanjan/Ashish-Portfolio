import React from "react";
import styles from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import Pics from "../../../../gallery.json";

const Gallery = () => {
  return (
    <div className={styles.skills}>
      <h2>Gallery</h2>
      <div className={styles.socials}>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className={styles.mySwiper}
        >
          {Pics.map((ele, ind) => {
            return (
              <SwiperSlide className={styles.swiperSlide}>
                <img src={`/Gallery/${ele}`} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
