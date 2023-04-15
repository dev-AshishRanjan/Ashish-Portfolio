import React from 'react';
import styles from "./style.module.scss";
import Lottie from "react-lottie";
import animationData from "../../../lotties/76038-contact-mail.json";

const ContactPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.ContactPage}>
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <form action="#">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea name="msg" id="msg" cols="30" rows="10" placeholder='Message'></textarea>
        <button type="submit" className='btn'> submit</button>
      </form>
    </div>
  )
}

export default ContactPage;