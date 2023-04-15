import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

const Loader = () => {
  const [name, setName] = useState("ASHISH");
  const alphas = "abcdefghijklmnopqrstuvwxyz";
  useEffect(() => {
    let count = 0;
    setInterval(() => {
      let value = ["A", "S", "H", "I", "S", "H"];
      for (var i = Math.floor(count); i < 6; i++) {
        value[i] = alphas[Math.floor(Math.random() * 26)];
      }
      setName(value.join(""));
      count += 1 / 30;
    }, 10);
  }, []);
  return (
    <div className={styles.loader}>
      <p>{name}</p>
    </div>
  );
};

export default Loader;
