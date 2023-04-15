import React from "react";
import styles from "./style.module.scss";

const Spinner = () => {
  return (
    <div className={styles.loader_container}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Spinner;
