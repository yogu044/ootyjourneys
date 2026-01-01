import React, { useState } from 'react';
import axios from 'axios';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import "../css/contact.css"; 
import ContactDetails from '../../mail/ContactDetails';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await ContactDetails(formData); 
     
      if (res.status === 200) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="icon" />,
      title: 'Phone',
      details: '+91 99441 94878',
      subtitle: 'Mon-Fri 9AM-6PM IST'
    },
    {
      icon: <Mail className="icon" />,
      title: 'Email',
      details: 'ootyjourneys@gmail.com',
      subtitle: '24/7 Support Available'
    },
    {
      icon: <MapPin className="icon" />,
      title: 'Office',
      details: '233/1 Have Lock Road',
      subtitle: 'Ooty, Tamil Nadu 643001'
    },
    {
      icon: <Clock className="icon" />,
      title: 'Hours',
      details: 'Mon-Fri: 9AM-6PM',
      subtitle: 'Weekend: 9AM-7PM'
    }
  ];

  return (
    <div className="contact-container">
      <div className="contact-inner">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>Ready to start your Ooty adventure? We're here to help you plan the perfect hill station travel experience.</p>
        </div>

        <div className="contact-grid">
        
          <div className="contact-form-wrapper">
            <div className="form-header">
              <MessageCircle className="icon-large" />
              <h2>Send us a Message</h2>
            </div>

            {submitted && (
              <div className="form-success">
                Thank you! We'll get back to you within 24 hours.
              </div>
            )}

            {error && (
              <div className="form-error">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row two-column">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="custom">Custom Tour</option>
                  <option value="group">Group Travel</option>
                  <option value="attractions">Attractions Info</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us about your dream Ooty adventure..."
                />
              </div>

              <button type="submit" disabled={isSubmitting} className="submit-btn">
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="icon-small" />
              </button>
            </form>
          </div>

          
          <div className="contact-info-wrapper">
            <div className="contact-info-header">
              <h2>Contact Information</h2>
            </div>
            <div className="contact-info-list">
              {contactInfo.map((info, i) => (
                <div key={i} className="contact-info-item">
                  <div className="icon">{info.icon}</div>
                  <div>
                    <h3>{info.title}</h3>
                    <p className="contact-details">{info.details}</p>
                    <p className="contact-subtitle">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="emergency-contact">
              <h3>24/7 Emergency Support</h3>
              <p>For travelers currently on tours</p>
              <p className="emergency-number">+91 99441 94878</p>
            </div>

            <div className="office-map">
              <div className="map-placeholder">
                
                <p>Visit our Ooty office</p>
                <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.759902772909!2d76.69358147499767!3d11.418274847027012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bd999b6fcf0f%3A0x6020ba01e18fbbdd!2s233%2C%20Havelock%20Rd%2C%20Police%20Quarters%2C%20Pudumund%2C%20Ooty%2C%20Tamil%20Nadu%20643001!5e1!3m2!1sen!2sin!4v1767260492561"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ooty Office Location"
      ></iframe>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
