import React from "react";
import styles from "./style.module.scss";
import Lottie from "react-lottie";
import animationData from "../../../lotties/122824-project-evolution-steps.json";

const ProjectsHero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.ProjectsHero}>
      <div className={styles.lottie}>
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default ProjectsHero;
