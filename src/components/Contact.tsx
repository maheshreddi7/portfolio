import React, { useState } from "react";
import { database } from "./appwriteConfig";
import { ID } from "appwrite";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await database.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID, // Database ID
        import.meta.env.VITE_APPWRITE_COLLECTION_ID, // Collection ID
        ID.unique(),
        form
      );

      setSuccess(true);
      setError("");
      alert(`Thank you, ${form.name} ❤️ I will contact you!`);
      setForm({ name: "", email: "", message: "" }); // Clear form
    } catch (err) {
      console.error("Failed to create a document:", err);
      setError("There was a problem submitting your message. Please try again later.");
    }
  };

  return (
    <div className="contact">
      <div className="contact-social-container">
        <h4 className="social-links-title">Nice to meet you!</h4>
        <div className="social-links-container">
          <a href="https://github.com/AlenaTih" target="_blank"><i className="fa-brands fa-square-github"></i></a>
          <a href="https://x.com/Alennushkaa" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
          <a href="https://www.instagram.com/allennushkaa/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <a rel="me" href="https://mastodon.social/@AlenaTih" target="_blank" title="Mastodon">
            <i className="fa-brands fa-mastodon"></i>
          </a>
        </div>
        <p className="contact-text">alyonatihomirova9@gmail.com</p>
      </div>

      <div className="contact-form-container">
        <h4 className="contact-title">Contact me</h4>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="input-name">
            Your name
            <input className="input-name" id="input-name" type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>

          <label htmlFor="input-email">
            Your email
            <input className="input-email" id="input-email" type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>

          <label htmlFor="input-message">
            Your message
            <textarea className="input-message" id="input-message" name="message" value={form.message} onChange={handleChange} required></textarea>
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
