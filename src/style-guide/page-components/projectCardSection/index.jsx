import React from 'react';
import styles from "./style.module.scss";
import ProjectCard from '@/style-guide/components/ProjectCard';
import data from '../../../../projects.json';

const ProjectCardSection = () => {
  return (
    <div className={styles.ProjectCardSection}>
      <h2>My Projects</h2>
      <div className={styles.cards}>
        {/* map for cards */}
        {
          data.map((ele) => {
            return (
              <ProjectCard title={ele.title} talk={ele.talk} techStack={ele.techStack} id={ele.id} />
            )
          })
        }
      </div>
      <a href="https://github.com/dev-AshishRanjan" className="btn">For More</a>
    </div>
  )
}

export default ProjectCardSection;