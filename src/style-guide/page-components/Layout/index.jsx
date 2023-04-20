import React, { useState, useEffect } from "react";
import Navbar from "@/style-guide/components/navbar";
import Loader from "@/style-guide/components/Loader";
import Hamburger from "@/style-guide/components/Hamburger-nav";
import styles from "./style.module.scss";

const Layout = ({ children }) => {
  const [load, setLoad] = useState(true);
  const [mobileHamClicked, setMobileHamClicked] = useState(false);
  const [theme, setTheme] = useState("system");
  // const [top, setTop] = useState(0);
  // const [left, setLeft] = useState(0);

  const handleScroll = (e) => {
    e.target.classList.add("on-scrollbar");
    setTimeout(() => {
      e.target.classList.remove("on-scrollbar");
    }, 500);
  };

  useEffect(() => {
    loadercall();
    setTheme(localStorage.getItem("AshishPortfolioTheme") || "system");
    window.addEventListener("scroll", handleScroll, true);
    // document.body.click();
  }, []);
  const loadercall = () => {
    setTimeout(function () {
      setLoad(false);
      document.body.onpointermove = (e) => {
        const { clientX, clientY } = e;
        setTimeout(() => {
          const cursor = document.querySelector(`.${styles.cursor}`);
          cursor.animate(
            {
              left: `calc(${clientX}px - 120px)`,
              top: `calc(${clientY}px - 120px)`,
            },
            { duration: 1500, fill: "forwards" }
          );
        }, 100);
      };
    }, 2550);
  };
  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <>
          <div className={`${theme}`}>
            <div className={styles.background}>
              <div className={styles.cursor}></div>
              <div className={styles.body}>
                <Navbar
                  mobileHamClicked={mobileHamClicked}
                  setMobileHamClicked={setMobileHamClicked}
                  setTheme={setTheme}
                  theme={theme}
                />
                <Hamburger
                  mobileHamClicked={mobileHamClicked}
                  setMobileHamClicked={setMobileHamClicked}
                />
                {children}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Layout;
