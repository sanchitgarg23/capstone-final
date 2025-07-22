


import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import './Contact.css'; // Import the new CSS file
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    setIsSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setIsSubmitted(false), 5000); // Hide message after 5 seconds
  };

const contactInfo = [
  {
    icon: <Mail className="icon" />,
    title: "Email",
    details: "support@taskflow.in",
    description: "Reach out to us anytime"
  },
  {
    icon: <Phone className="icon" />,
    title: "Phone",
    details: "+91 9876543210",
    description: "Mon-Fri, 9:00 AM - 6:00 PM IST"
  },
  {
    icon: <MapPin className="icon" />,
    title: "Office",
    details: "456 Startup Lane, Floor 5",
    description: "Sector 17, Chandigarh, CH 160017"
  },
  {
    icon: <Clock className="icon" />,
    title: "Business Hours",
    details: "Monday - Friday",
    description: "9:00 AM - 6:00 PM IST"
  }
];


  const offices = [
    {
      city: "New Delhi",
      address: "456 Connaught Place, 2nd Floor\nNew Delhi, DL 110001\nIndia",
      phone: "+91 6235891345"
    },
    {
      city: "Chandigarh",
      address: "123 Sector 17 Plaza, Office 204\nChandigarh, CH 160017",
      phone: "+91 8736035724"
    },
    {
      city: "Bengaluru",
      address: "456 Startup Lane\nChandigarh, CH 160036",
      phone: "+91 9539055279"
    }
  ];

  return (

    <>
    <Navbar/>
    <div className="contact-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Get in
            <span className="hero-title-gradient"> Touch</span>
          </h1>
          <p className="hero-subtitle">
            Have questions about TaskFlow? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="contact-form-section">
        <div className="contact-form-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-info-icon-wrapper">
                    {info.icon}
                  </div>
                  <div className="contact-info-details">
                    <h3>{info.title}</h3>
                    <p className="detail-text">{info.details}</p>
                    <p className="detail-desc">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="quick-response-box">
              <h3>Quick Response Promise</h3>
              <p>
                We typically respond to all inquiries within 24 hours during business days.
                For urgent matters, please call us directly.
              </p>
              <div className="response-time">
                <CheckCircle className="icon" />
                Average response time: 4 hours
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2>Send us a message</h2>
            {isSubmitted && (
              <div className="form-success-message">
                <CheckCircle className="icon" />
                <span>Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="sales">Sales Question</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-button"
              >
                <Send className="icon" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="offices-section">
        <div className="offices-header">
          <h2>Our Offices</h2>
          <p>
            Visit us at one of our global locations or reach out to our local teams.
          </p>
        </div>
        <div className="offices-grid">
          {offices.map((office, index) => (
            <div key={index} className="office-card">
              <h3>{office.city}</h3>
              <div className="details-container">
                <div className="detail-item">
                  <MapPin className="icon" />
                  <p>{office.address}</p>
                </div>
                <div className="detail-item">
                  <Phone className="icon" />
                  <p>{office.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>


    </>
  );
};

export default Contact;