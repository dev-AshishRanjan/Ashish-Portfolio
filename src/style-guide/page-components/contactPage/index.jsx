import React, { useState } from "react";
import styles from "./style.module.scss";
import Lottie from "react-lottie";
import animationData from "../../../lotties/76038-contact-mail.json";
import sendEmail from "@/utils/sendEmail";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = `Name: ${name}\nEmail: ${email}\nMessage: ${msg}`;
    try {
      await sendEmail(email, content);
      alert('Email sent successfully!');
      setName('');
      setEmail('');
      setMsg('');
    } catch (error) {
      console.error(error);
      alert('Error sending email. Please try again later.');
    }
  }
  return (
    <div className={styles.ContactPage}>
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <form>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea
          name="msg"
          id="msg"
          cols="30"
          rows="10"
          placeholder="Message"
          value={msg} onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <button type="submit" className="btn" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
