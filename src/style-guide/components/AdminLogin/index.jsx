import React, { useState } from "react";
import styles from "./style.module.scss";

const AdminLogin = ({ setAdmin }) => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendfrom = new FormData();
    sendfrom.set("name", name);
    sendfrom.set("password", password);
    console.log(name, password);
    fetch("/api/admin", {
      method: "POST",
      body: JSON.stringify({ name, password }),
    })
      .then((req) => req.json())
      .then((res) => {
        console.log({ res });
        if (res.status === 200) {
          setAdmin(res.admin);
          if (!res.admin) {
            alert("Wrong Creds");
          } else {
            alert("Welcome Admin");
          }
        }
      });
  };
  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        name="name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="btn" onClick={handleSubmit}>
        submit
      </button>
    </form>
  );
};

export default AdminLogin;
