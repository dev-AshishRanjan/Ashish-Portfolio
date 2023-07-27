import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";

const AdminPanel = () => {
  const [skills, setSkills] = useState();
  const [project, setProject] = useState();
  const [resume, setResume] = useState("");
  useEffect(() => {
    fetch("/api/skills")
      .then((req) => req.json())
      .then((res) => {
        setSkills(JSON.stringify(res.data));
      });
    fetch("/api/projects")
      .then((req) => req.json())
      .then((res) => {
        setProject(JSON.stringify(res.data));
      });
    fetch("/api/resume")
      .then((req) => req.json())
      .then((res) => {
        setResume(res.data);
      });
  }, []);
  const handleSkillSubmit = (e) => {
    e.preventDefault();
    fetch(`${window.location.origin}/api/skills`, {
      method: "POST",
      body: JSON.stringify({ skills }),
    })
      .then((req) => req.json())
      .then((res) => {
        console.log({ res });
        if (res.status === 200) {
          alert("Success!");
        }
      });
  };
  const handleProjectSubmit = (e) => {
    e.preventDefault();
    fetch(`${window.location.origin}/api/projects`, {
      method: "POST",
      body: JSON.stringify({ project }),
    })
      .then((req) => req.json())
      .then((res) => {
        console.log({ res });
        if (res.status === 200) {
          alert("Success!");
        }
      });
  };
  const handleResumeSubmit = (e) => {
    e.preventDefault();
    fetch(`${window.location.origin}/api/resume`, {
      method: "POST",
      body: resume,
    })
      .then((req) => req.json())
      .then((res) => {
        console.log({ res });
        if (res.status === 200) {
          alert("Success!");
        }
      });
  };
  return (
    <div className={styles.AdminPanel}>
      <div className={styles.group}>
        <h2>Skills</h2>
        <textarea
          name="skills"
          id="skills"
          cols="30"
          rows="10"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        ></textarea>
        <button type="submit" className="btn" onClick={handleSkillSubmit}>
          submit
        </button>
      </div>
      <div className={styles.group}>
        <h2>Projects</h2>
        <textarea
          name="projects"
          id="projects"
          cols="30"
          rows="20"
          value={project}
          onChange={(e) => setProject(e.target.value)}
        ></textarea>
        <button type="submit" className="btn" onClick={handleProjectSubmit}>
          submit
        </button>
      </div>
      <div className={styles.group}>
        <h2>Resume</h2>
        <textarea
          name="resume"
          id="resume"
          cols="10"
          rows="5"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
        ></textarea>
        <button type="submit" className="btn" onClick={handleResumeSubmit}>
          submit
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
