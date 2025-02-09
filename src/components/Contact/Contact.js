import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const testParams = {
      to_name: "Arlene_Dcosta",
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      "service_cz2nyf4",
      "template_qun8xtt",
      testParams,
      "N4uaZIQtsj5w37CFD"
    ).then(
      (response) => {
        console.log("Message sent successfully!", response);
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => console.error("Failed to send message. Please try again.", error)
    );
  };

  return (
    <div id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-extra">
        <h3>Let's Connect</h3>
        <p>Feel free to reach out for collaborations, inquiries, or just a chat!</p>
      </div>
    </div>
  );
}

export default Contact;
