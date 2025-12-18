import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>PADALIA PLACE HOTEL</h3>
          <p>
            Experience luxury, comfort, and world-class hospitality in the
            heart of Mumbai. Your perfect stay starts here.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Rooms</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li>Luxury Rooms</li>
            <li>24x7 Room Service</li>
            <li>Spa & Wellness</li>
            <li>Airport Pickup</li>
            <li>Free Wi-Fi</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📍 Mumbai, Maharashtra, India</p>
          <p>📞 +91 99999 88888</p>
          <p>✉️ info@PADALIA PLACE HOTEL.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 PADALIA PLACE HOTEL. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
