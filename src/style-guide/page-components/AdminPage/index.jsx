import React, { useState } from "react";
import styles from "./style.module.scss";
import AdminLogin from "@/style-guide/components/AdminLogin";
import AdminPanel from "@/style-guide/components/AdminPanel";
import Lottie from "react-lottie";
import animationData from "../../../lotties/87707-programming-and-website.json";

const AdminPage = () => {
  const [admin, setAdmin] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.AdminPage}>
      <div className={`${admin ? styles.fullscreen : null} ${styles.MainData}`}>
        {admin ? <AdminPanel /> : <AdminLogin setAdmin={setAdmin} />}
      </div>
      {!admin ? (
        <div className={styles.lottie}>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      ) : null}
    </div>
  );
};

export default AdminPage;
