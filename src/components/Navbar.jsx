import React from "react";
import "../styles/navbar.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <img
              src="https://www.sciastra.com/Assets/Images/newsciastra.jpg"
              alt=""
            />
          </li>
          <li className="nav-item">HOME</li>
          <li className="nav-item">COURSES</li>
          <li className="nav-item">SELECTIONS</li>
          <li className="nav-item">BLOGS</li>
          <li className="nav-item">MATERIALS</li>
          <li className="nav-item">TEAM</li>
          <li className="nav-item">CONTACT-US</li>
          <li className="nav-item">
            <button>Login</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
