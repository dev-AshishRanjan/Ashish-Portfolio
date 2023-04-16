import React from "react";
import styles from "./style.module.scss";
import skills from "../../../../skills.json";
import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.socials}>
        {skills.map((ele) => {
          return (
            <a href="#" target="_blank" title={ele}>
              <Icon icon={`logos:${ele}`} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
