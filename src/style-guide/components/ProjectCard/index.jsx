import React from 'react';
import { Icon } from '@iconify/react';
import styles from "./style.module.scss";

const ProjectCard = ({ title, talk, techStack, id }) => {
  return (
    <a href={`/project/${id}`} className={styles.card}>
      <h3>{title}</h3>
      <p>{talk}</p>
      <div>
        {
          techStack.map((ele) => {
            return (
              <Icon icon={`logos:${ele}`} />
            )
          })
        }
      </div>
    </a>
  )
}

export default ProjectCard