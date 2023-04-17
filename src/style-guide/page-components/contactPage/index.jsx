import React, { useState } from "react";
import styles from "./style.module.scss";
import Lottie from "react-lottie";
import animationData from "../../../lotties/76038-contact-mail.json";
// import sendEmail from "@/utils/sendEmail";

const ContactPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };
  return (
    <div className={styles.ContactPage}>
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <form
        action="https://formsubmit.co/kumarashishranjan4971@gmail.com"
        method="POST"
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="msg"
          id="msg"
          cols="30"
          rows="10"
          placeholder="Message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
