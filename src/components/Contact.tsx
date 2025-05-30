import React, { useState } from "react";
import { database } from "./appwriteConfig";
import { ID } from "appwrite";
import { Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // const databaseId = process.env.REACT_APP_DATABASE_ID;
  // const collectionId = process.env.REACT_APP_COLLECTION_ID;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await database.createDocument(
        "6839488a001a317c55a3", // Database ID
        "6839632a000c7ba4ed84", // Collection ID
        ID.unique(),
        form
      );

      setSuccess(true);
      setError("");
      alert(`Thank you, ${form.name}  I will contact you!`);
      setForm({ name: "", email: "", message: "" }); // Clear form
    } catch (err) {
      console.error("Failed to create a document:", err);
      setError(
        "There was a problem submitting your message. Please try again later."
      );
    }
  };

  return (
    <div className="contact">
      <div className="contact-social-container">
        <h4 className="social-links-title">Nice to meet you!</h4>
        <br></br>
        <h4 className="social-links-title">
          I am
          <span className="purple"> Mahesh Reddy </span>
        </h4>
        <br></br>

        <p className="contact-text">Mail id : maheshreddypannalaa@gmail.com</p>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/maheshreddi7"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/maheshreddi_200"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/maheshreddypannala/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/mahesh_reddy_pannala"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </div>

      <div className="contact-form-container">
        <h4 className="contact-title">
          <span className="purple"> Contact Me </span>
        </h4>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="input-name">
            Your name
            <input
              className="input-name"
              id="input-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="input-email">
            Your email
            <input
              className="input-email"
              id="input-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="input-message">
            Your message
            <textarea
              className="input-message"
              id="input-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <button className="form-submit-button">Submit</button>
          {error && <p>{error}</p>}
          {success && <p>Message sent successfully!</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
