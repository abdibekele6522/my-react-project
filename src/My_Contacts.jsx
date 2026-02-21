import telegramIcon from "./assets/telegram.png";
import tiktokIcon from "./assets/tiktok.png";
import facebookIcon from "./assets/facebook.png";
import youtubeIcon from "./assets/youtube.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function My_Contacts() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    idea: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
  e.preventDefault();

  const receiver = "sinewabdi@gmail.com";
  const subject = `New Project Idea from ${formData.fullName}`;
  const body = `
Full Name: ${formData.fullName}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}

Project Idea:
${formData.idea}
  `;

  // Open Gmail web compose with pre-filled To, Subject, Body
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(receiver)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.open(gmailURL, "_blank"); // opens in a new tab
};


  return (
    <div className="contact-page">
      <div className="contact-container">

        {/* LEFT SIDE: YOUR CONTACTS */}
        <div className="contact-left">
          <h2>My Contacts</h2>
          <p><strong>Email:</strong> sinewabdi@gmail.com</p>
          <p><strong>Phone:</strong> +251-960-328819</p>

          <h3>Social Media</h3>
<div className="social-icons">
  <a href="https://t.me/@abdibekel" target="_blank" rel="noreferrer">
    <img src={telegramIcon} alt="Telegram" className="social-icon" />
  </a>
  <a href="https://www.tiktok.com/@yourusername" target="_blank" rel="noreferrer">
    <img src={tiktokIcon} alt="TikTok" className="social-icon" />
  </a>
  <a href="https://www.facebook.com/yourusername" target="_blank" rel="noreferrer">
    <img src={facebookIcon} alt="Facebook" className="social-icon" />
  </a>
  <a href="https://www.youtube.com/channel/yourchannelid" target="_blank" rel="noreferrer">
    <img src={youtubeIcon} alt="YouTube" className="social-icon" />
  </a>
</div>
        </div>

        {/* RIGHT SIDE: EMPLOYER FORM */}
        <div className="contact-right">
          <h2>Send Me Your Project Idea</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name (Optional)"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
            />
            <textarea
              name="idea"
              placeholder="Describe your project or idea..."
              rows="6"
              required
              onChange={handleChange}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

      </div>

      <br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}

export default My_Contacts;