import React from "react";
import styles from "./style.module.scss";
import AboutHero from "@/style-guide/components/AboutHero";
import Skills from "@/style-guide/components/Skills";
import Gallery from "@/style-guide/components/Gallery";

const AboutPage = () => {
  return (
    <div className={styles.AboutPage}>
      <div className={styles.data}>
        <AboutHero />
        <Skills />
        <Gallery />
      </div>
      <img src="/Pic_full.png" alt="" />
    </div>
  );
};

export default AboutPage;
