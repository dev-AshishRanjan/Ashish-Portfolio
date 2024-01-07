import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Spinner from "../spinner";

const AdminPanel = () => {
  const [skills, setSkills] = useState();
  const [project, setProject] = useState();
  const [resume, setResume] = useState("");
  const [projectForm, setProjectForm] = useState([]);
  const [newProjectData, setNewProjectData] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("/api/skills")
      .then((req) => req.json())
      .then((res) => {
        setSkills(JSON.stringify(res.data));
      });
    fetch("/api/projects", { method: "GET" })
      .then((req) => req.json())
      .then((res) => {
        const sortData = res.data.sort((a, b) => a.id - b.id);
        setProject(sortData);
        setProjectForm(sortData);
        setLoading(false);
      });
    fetch("/api/resume")
      .then((req) => req.json())
      .then((res) => {
        setResume(res.data);
      });
  }, []);
  const handleProjectRead = () => {
    setLoading(true);
    fetch("/api/projects", { method: "GET" })
      .then((req) => req.json())
      .then((res) => {
        const sortData = res.data.sort((a, b) => a.id - b.id);
        setProject(sortData);
        setProjectForm(sortData);
        setLoading(false);
      });
  };
  const handleProjectCreate = () => {
    setLoading(true);
    fetch(`/api/projects`, {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: newProjectData,
    })
      .then((req) => req.json())
      .then((res) => {
        console.log({ res });
        handleProjectRead();
        setNewProjectData("");
        if (res.status === 201) {
          alert("Success!");
        }
      });
  };
  const handleProjectUpdate = (id) => {
    setLoading(true);
    const data = projectForm.find((ele) => ele._id === id);
    console.log(data);
    fetch(`/api/projects?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "multipart/form-data" },
      body: JSON.stringify(data),
    })
      .then((req) => req.json())
      .then((res) => {
        console.log({ res });
        handleProjectRead();
        if (res.status === 201) {
          alert("Success!");
        }
      });
  };
  const handleProjectDelete = (id) => {
    setLoading(true);
    fetch(`/api/projects?id=${id}`, {
      method: "DELETE",
    })
      .then((req) => req.json())
      .then((res) => {
        console.log({ res });
        handleProjectRead();
        if (res.status === 201) {
          alert("Success!");
        }
      });
  };
  if (loading) {
    return <Spinner />;
  }
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
      </div>
      <div className={styles.group}>
        <h2>Projects</h2>
        <div className={styles.card}>
          <div className={styles.card}>
            <textarea
              name="cproject"
              id="cproject"
              cols="10"
              rows="10"
              value={newProjectData}
              onChange={(e) => {
                setNewProjectData(e.target.value);
              }}
              placeholder="Please provide {id,title,talk,techStack,link}"
            ></textarea>
            <button
              type="submit"
              className="btn"
              onClick={() => handleProjectCreate()}
            >
              create
            </button>
          </div>
        </div>
        <div className={styles.cards}>
          {project &&
            project.map((ele) => {
              return (
                <div className={styles.card} key={ele._id}>
                  <textarea
                    name="project"
                    id="project"
                    cols="10"
                    rows="10"
                    value={JSON.stringify(
                      projectForm.find((el) => el._id === ele._id),
                    )}
                    onChange={(e) => {
                      setProjectForm([
                        [...projectForm.filter((el) => el._id !== ele._id)],
                        JSON.parse(e.target.value),
                      ]);
                    }}
                  ></textarea>
                  <button
                    type="submit"
                    className="btn"
                    onClick={() => handleProjectUpdate(ele._id)}
                  >
                    update
                  </button>
                  <button
                    type="submit"
                    className="btn"
                    onClick={() => handleProjectDelete(ele._id)}
                  >
                    delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
