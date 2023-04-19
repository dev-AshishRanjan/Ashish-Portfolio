import React from "react";
import styles from "./style.module.scss";
import Lottie from "react-lottie";
import animationData from "../../../lotties/9833-full-page-loading-spinner.json";

const Spinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const rand = Math.floor(Math.random() * 100);
  return (
    <div className={styles.loader_container}>
      {rand % 2 === 0 ? (
        <div className={styles.spinner}></div>
      ) : (
        <Lottie options={defaultOptions} height={400} width={400} />
      )}
    </div>
  );
};

export default Spinner;
