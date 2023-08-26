import React from "react";
import styles from "./style.module.scss";
import AboutHero from "@/style-guide/components/AboutHero";
import Skills from "@/style-guide/components/Skills";
import Gallery from "@/style-guide/components/Gallery";

const AboutPage = () => {
  const picVal = Math.round(1 + Math.random() * 1);
  return (
    <div className={styles.AboutPage}>
      <div className={styles.data}>
        <AboutHero />
        <Skills />
        <Gallery />
      </div>
      <img src={`/Pic_full${picVal}.png`} alt="" />
      {/* <img src="/Pic_full.png" alt="" loading="lazy" /> */}
    </div>
  );
};

export default AboutPage;
