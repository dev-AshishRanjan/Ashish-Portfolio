import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
// import skills from "../../../../skills.json";
import { Icon } from "@iconify/react";
import Spinner from "../spinner";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch("/api/skills")
        .then((req) => req.json())
        .then((res) => {
          setSkills(res.data);
          setLoading(false);
        });
    } catch (e) {
      alert("Error: " + e.message);
    }
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
};

export default Skills;
