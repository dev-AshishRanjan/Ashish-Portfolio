import React from "react";
import { Icon } from "@iconify/react";
import styles from "./style.module.scss";

const ProjectCard = ({ _id, title, talk, techStack, id, link }) => {
  return (
    <a href={link} className={styles.card} target="_blank" key={_id}>
      <h3>{title}</h3>
      <p>{talk}</p>
      <div>
        {techStack.map((ele) => {
          return <Icon icon={`logos:${ele}`} key={ele} />;
        })}
      </div>
    </a>
  );
};

export default ProjectCard;
