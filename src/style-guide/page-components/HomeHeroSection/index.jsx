import React from "react";
import styles from "./style.module.scss";
import Lottie from "react-lottie";
import animationData from "../../../lotties/63487-programming-computer.json";
import Typewriter from "typewriter-effect";

const HomeHeroSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <main className={styles.main}>
      <div className={styles.data}>
        <div className={styles.hello}>
          <span>Hello</span>
          <hr />
        </div>
        <p>KUMAR ASHISH RANJAn</p>
        <h3>I am Kumar Ashish Ranjan</h3>
        <div className={styles.typewriter}>
          <Typewriter
            options={{
              strings: ["Web Developer", "Web Designer", "Dev Ops Enthuisast"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className={styles.lottie}>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </main>
  );
};

export default HomeHeroSection;
