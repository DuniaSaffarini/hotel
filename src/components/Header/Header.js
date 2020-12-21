import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

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
              <Link to="/Home">Home </Link>
              <Link to="/Facilities">Facilities </Link>
              <Link to="/Rooms">Rooms </Link>
              <Link to="/Contact">Contact us </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
