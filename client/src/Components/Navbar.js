import React from "react";
import logo from "../images/Airbnb_Logo_Bélo.png";
import "../style.css";
function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="AirBnb" className="AirBnb" />
    </nav>
  );
}

export default Navbar;
