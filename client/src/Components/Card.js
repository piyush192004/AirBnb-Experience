import React from "react";
import "../style.css";
import Katie from "../images/Katie.png";
import Wedding from "../images/Wedding.jpg";
import Bike from "../images/mountain bike.jpg";
import star from "../images/star.png";

function Card() {
  return (
    <div className="cards">
      <div className="katie">
        <img src={Katie} alt="Katie" className="Katie-Zaferes" />
        <div className="card-stats">
          <img src={star} alt="" />
          <span>5.0</span>
          <span>(6) • </span>
          <span>USA</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p>From $136/Person</p>
      </div>
      <div className="wedding">
        <img src={Wedding} alt="Bride" className="bride" />
        <div className="card-stats">
          <img src={star} alt="" />
          <span>5.0</span>
          <span>(6) • </span>
          <span>USA</span>
        </div>
        <p>Learn Wedding Photography</p>
        <p>From $125/Person</p>
      </div>
      <div className="mountain-bike">
        <img src={Bike} alt="Mountain Bike" className="bike" />
        <div className="card-stats">
          <img src={star} alt="" />
          <span>5.0</span>
          <span>(6) • </span>
          <span>USA</span>
        </div>
        <p>Group Mountain Biking</p>
        <p>From $50/Person</p>
      </div>
    </div>
  );
}

export default Card;
