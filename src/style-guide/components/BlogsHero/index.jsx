import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Socials from "../../../../socials.json";
import { Icon } from "@iconify/react";
import Spinner from "../spinner";

const AboutHero = () => {
  const [resumeLink, setResumeLink] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      fetch("/api/resume")
        .then((req) => req.json())
        .then((res) => {
          console.log({ res });
          setResumeLink(res.data);
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
        <div className={styles.AboutHero}>
          <p>
            Hashnode blogs are a crucial hub for developers, offering a platform
            to share expertise and insights. They cover a wide spectrum, from
            programming trends to practical coding tips, benefiting both
            beginners and experienced professionals.
          </p>
          <p>
            These blogs foster a sense of community-driven learning, encouraging
            discussions and knowledge exchange. This interactive approach not
            only aids in problem-solving but also promotes collective growth
            through diverse perspectives.
          </p>
          <p>Welcome to the Blog Section of my Portfolio</p>
        </div>
      )}
    </>
  );
};

export default AboutHero;
