import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="Logo">
        <h4>Luxury </h4>
        <h6> Hotels</h6>
      </div>

      <div className="navigation-bar">
        <div className="nav-width">
          <ul>
            <li>
              <a href="/Home">Home </a>
              <a href="/Facilities">Facilities </a>
              <a href="/Rooms">Rooms </a>
              <a href="/Contact">Contact us </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
