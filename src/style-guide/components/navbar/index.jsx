import { useState } from "react";
import styles from "./style.module.scss";
// import SignIn from "@/style-guide/components/SignIn";
// import SignOut from "@/style-guide/components/SignOut";
import Link from "next/link";
// import { BsFillSunFill, BsFillMoonFill, BsFillLaptopFill } from "react-icons/bs";

const Navbar = ({ mobileHamClicked, setMobileHamClicked, setTheme, theme }) => {
  const [activeLink, setActiveLink] = useState(
    window.location.pathname.split("/")[1] || "home"
  );
  // const auth = useContext(AuthContext);
  // const [theme, setTheme] = useState("dark");

  return (
    <div className={styles.navWrapper}>
      <div
        className={`${styles.navbar} ${
          mobileHamClicked ? styles.navShow : styles.navHide
        }`}
      >
        <div className={styles.logo}>
          ASHISH
          {/* <img src="/ashish.png" alt="" /> */}
        </div>
        <div className={styles.nav_links}>
          <Link
            href="/"
            className={`${activeLink === "home" ? styles.activeLink : null}`}
            onClick={() => {
              setActiveLink("home");
              setMobileHamClicked(!mobileHamClicked);
            }}
          >
            HOME
          </Link>
          <Link
            href="/admin"
            className={`${activeLink === "admin" ? styles.activeLink : null}`}
            onClick={() => {
              setActiveLink("admin");
              setMobileHamClicked(!mobileHamClicked);
            }}
          >
            ADMIN
          </Link>
          <Link
            href="/about"
            className={`${activeLink === "about" ? styles.activeLink : null}`}
            onClick={() => {
              setActiveLink("about");
              setMobileHamClicked(!mobileHamClicked);
            }}
          >
            ABOUT
          </Link>
          <Link
            href="/projects"
            className={`${
              activeLink === "projects" ? styles.activeLink : null
            }`}
            onClick={() => {
              setActiveLink("projects");
              setMobileHamClicked(!mobileHamClicked);
            }}
          >
            PROJECTS
          </Link>
          <Link
            href="/contact"
            className={`${activeLink === "contact" ? styles.activeLink : null}`}
            onClick={() => {
              setActiveLink("contact");
              setMobileHamClicked(!mobileHamClicked);
            }}
          >
            CONTACT
          </Link>
        </div>
        <div className={styles.callToAction}>
          <div className={styles.theme}>
            <select
              name="theme"
              id="theme"
              onChange={(e) => {
                setTheme(e.target.value);
                localStorage.setItem("AshishPortfolioTheme", e.target.value);
              }}
              value={theme}
              className="btn"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>
          {/* {auth.isLoggedIn ? (
            <SignOut logout={auth.logout} />
          ) : (
            <SignIn login={auth.login} />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
