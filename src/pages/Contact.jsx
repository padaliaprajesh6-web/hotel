import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-info">
        <div className="info-item">
          <h3>Address</h3>
          <p>📍 123 Grand Palace Road, Mumbai, Maharashtra, India</p>
        </div>
        <div className="info-item">
          <h3>Phone</h3>
          <p>📞 +91 99999 88888</p>
          <p>📞 +91 88888 77777</p>
        </div>
        <div className="info-item">
          <h3>Email</h3>
          <p>✉️ info@grandpalacehotel.com</p>
          <p>✉️ reservations@grandpalacehotel.com</p>
        </div>
        <div className="info-item">
          <h3>Operating Hours</h3>
          <p>🕒 24 Hours (Reception & Room Service)</p>
          <p>🕒 10:00 AM - 11:00 PM (Restaurant & Spa)</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Map Placeholder */}
      <div className="contact-map">
        <h2>Our Location</h2>
        <div className="map-placeholder">
          {/* Replace with Google Maps embed if needed */}
          <p>Map goes here</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
