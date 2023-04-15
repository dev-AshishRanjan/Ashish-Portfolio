import React from "react";
import styles from "./style.module.scss";
import ProjectsHero from "@/style-guide/components/ProjectsHero";
import ProjectsHeroData from "@/style-guide/components/ProjectsHeroData";
import ProjectCardSection from "../projectCardSection";

const ProjectPage = () => {
  return (
    <div className={styles.ProjectPage}>
      <ProjectsHero />
      <ProjectsHeroData />
      <ProjectCardSection />
    </div>
  );
};

export default ProjectPage;
