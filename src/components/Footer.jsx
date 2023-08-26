import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span>SciAstra</span>
          <span>© SciAstra</span>
        </div>
        <ul className="footer-links">
          <li>Home</li>
          <li>Our Courses</li>
          <li>Blog</li>
          <li>Free Materials</li>
          <li>Our Team</li>
          <li>Contact Us</li>
        </ul>
        <div className="footer-contact">
          <p>SciAstra Education Pvt Ltd, Bhubaneswar, Odisha</p>
          <p>support@sciastra.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
