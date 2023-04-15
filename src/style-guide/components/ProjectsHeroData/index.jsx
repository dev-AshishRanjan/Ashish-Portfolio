import React from "react";
import styles from "./style.module.scss";
import Lottie from "react-lottie";
import animationData from "../../../lotties/141273-web-dev.json";

const ProjectsHeroData = () => {
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
      <div className={styles.data}>
        As a developer, working on projects is of utmost importance. Projects
        offer developers an opportunity to apply their skills, knowledge, and
        creativity to solve real-world problems or create new solutions. Working
        on projects can enhance a developer's problem-solving skills, as they
        encounter various challenges throughout the development process
      </div>
      <div className={styles.lottie}>
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default ProjectsHeroData;
