import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
// import skills from "../../../../skills.json";
import { Icon } from "@iconify/react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("/api/skills")
      .then((req) => req.json())
      .then((res) => {
        setSkills(res.data);
      });
  }, []);
  if (skills.length > 0) {
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
  } else {
    return null;
  }
};

export default Skills;
