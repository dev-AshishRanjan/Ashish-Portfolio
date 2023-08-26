import React from "react";
import { Icon } from "@iconify/react";
import styles from "./style.module.scss";

const ProjectCard = ({ title, talk, link, coverImage }) => {
  return (
    <a href={link} className={styles.card} target="_blank">
      <h3>{title}</h3>
      <img src={coverImage} alt={title} />
      <p>{talk}</p>
    </a>
  );
};

export default ProjectCard;
