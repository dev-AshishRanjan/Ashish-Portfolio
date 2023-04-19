import React from "react";
import styles from "./style.module.scss";
// import Lottie from "react-lottie";
// import animationData from "../../../lotties/9833-full-page-loading-spinner.json";

const Spinner = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  // const rand = Math.floor(Math.random() * 100);
  return (
    <div className={styles.loader_container}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Spinner;
