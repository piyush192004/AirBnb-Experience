import React from "react";
import "../style.css";
import photogrid from "../images/PhotoGrid.png";
function Hero() {
  return (
    <section className="hero">
      <img src={photogrid} alt="PhotoGrid" className="hero-image" />
      <h1 className="hero-heading">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
