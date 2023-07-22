import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import ProjectCard from "@/style-guide/components/ProjectCard";
// import data from "../../../../projects.json";
import Spinner from "@/style-guide/components/spinner";

const ProjectCardSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      fetch("/api/projects")
        .then((req) => req.json())
        .then((res) => {
          setData(res.data);
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
        <div className={styles.ProjectCardSection}>
          <h2>My Projects</h2>
          <div className={styles.cards}>
            {/* map for cards */}
            {data.map((ele) => {
              return (
                <ProjectCard
                  title={ele.title}
                  talk={ele.talk}
                  techStack={ele.techStack}
                  id={ele.id}
                  link={ele.link}
                />
              );
            })}
          </div>
          <a href="https://github.com/dev-AshishRanjan" className="btn">
            For More
          </a>
        </div>
      )}
    </>
  );
};

export default ProjectCardSection;
