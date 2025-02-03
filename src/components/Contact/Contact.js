import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, file: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const testParams = {
      to_name: "Arlene_Dcosta",
      from_name:formData.name,
      from_email: formData.email,
      message: formData.message
    };
    
    emailjs.send(
      "service_cz2nyf4",
      "template_qun8xtt",
      testParams,
      "N4uaZIQtsj5w37CFD"
    ).then(
      (response) => {
        console.log("Message sent successfully!", response);
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      
      },
      (error) => console.error("Failed to send message. Please try again.", error)
    );
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
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
    </section>
  );
}

export default Contact;
