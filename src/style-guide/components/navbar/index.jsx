import { useContext, useState } from "react";
import styles from "./style.module.scss";
// import SignIn from "@/style-guide/components/SignIn";
// import SignOut from "@/style-guide/components/SignOut";
import Link from "next/link";
// import { BsFillSunFill, BsFillMoonFill, BsFillLaptopFill } from "react-icons/bs";

const Navbar = ({ mobileHamClicked, setTheme }) => {
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
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
        <div className={styles.callToAction}>
          <div className={styles.theme}>
            <select
              name="theme"
              id="theme"
              onChange={(e) => setTheme(e.target.value)}
              className="btn"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system" selected>
                System
              </option>
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
