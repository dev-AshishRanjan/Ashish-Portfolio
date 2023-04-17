import React, { useState, useEffect } from 'react';
import styles from "./style.module.scss";

const AdminPanel = () => {
  const [skills, setSkills] = useState();
  useEffect(() => {
    fetch("/api/skills").then(req => req.json()).then(res => {
      setSkills(JSON.stringify(res.data));
    })
  }, []);
  const handleSkillSubmit = (e) => {
    e.preventDefault();
    fetch("/api/skills", {
      method: "POST", body: JSON.stringify({ skills })
    }).then(req => req.json()).then(res => {
      console.log({ res });
      if (res.status === 200) {
        alert("Success!");
      }
    })
  }
  return (
    <div className={styles.AdminPanel}>
      <div className={styles.group}>
        <h2>Skills</h2>
        <textarea name="skills" id="skills" cols="30" rows="10" value={skills} onChange={(e) => setSkills(e.target.value)} ></textarea>
        <button type="submit" className='btn' onClick={handleSkillSubmit}>submit</button>
      </div>
    </div>
  )
}

export default AdminPanel