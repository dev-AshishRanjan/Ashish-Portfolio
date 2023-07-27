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
            While I possess knowledge and expertise in Full-stack Web
            Development, my passion lies in Front-end Development. The ability
            to create visually appealing and user-friendly interfaces that
            enhance the user experience has always fascinated me.
          </p>
          <p>
            Hello, my name is Kumar Ashish Ranjan and I am a Computer Science
            and Engineering undergraduate from the National Institute of
            Technology Silchar, graduating in the year 2025
          </p>
          <p>
            I believe that front-end development is an art form that requires a
            unique combination of technical skills and creativity. It allows me
            to express my creativity through design and user experience while
            utilizing my technical knowledge to bring those designs to life.
          </p>
          {/* <p>Overall, I am excited about the endless possibilities that the field of Front-end Development presents, and I am eager to contribute my skills and passion to make a difference in the world of web development.</p> */}
          <div className={styles.socials}>
            {Socials.map((ele) => {
              return (
                <a href={ele.link} target="_blank" title={ele.name}>
                  <Icon icon={`cib:${ele.name}`} color="#579" />
                </a>
              );
            })}
          </div>
          <a href={resumeLink} target="_blank" className="btn">
            Resume
          </a>
        </div>
      )}
    </>
  );
};

export default AboutHero;
