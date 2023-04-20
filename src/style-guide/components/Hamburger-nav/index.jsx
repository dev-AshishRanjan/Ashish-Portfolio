import React, { useState } from "react";
import styles from "./style.module.scss";

const Hamburger = ({ mobileHamClicked, setMobileHamClicked }) => {
  // const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // setClicked(!clicked);
    setMobileHamClicked(!mobileHamClicked);
  };
  return (
    <>
      <div className={styles.hamMenu} onClick={handleClick}>
        <div
          className={`${styles.ham1} ${
            mobileHamClicked ? styles.upperHam : styles.hamInitial
          }`}
        ></div>
        <div
          className={`${styles.ham1} ${
            mobileHamClicked ? styles.midHam : styles.hamInitial
          }`}
        ></div>
        <div
          className={`${styles.ham1} ${
            mobileHamClicked ? styles.lowerHam : styles.hamInitial
          }`}
        ></div>
      </div>
    </>
  );
};

export default Hamburger;
