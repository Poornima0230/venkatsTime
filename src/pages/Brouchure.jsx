import front from "../assets/bFront.png";
import back from "../assets/bBack.png";
import { useState } from "react";
import "../styles/brouchure.css";

export const Brouchure = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="brochure-page" data-aos="fade-up">
      <h1 data-aos="zoom-in">Brochure</h1>
      <hr data-aos="zoom-in" />
      <div
        className="card-container"
        onClick={() => setIsFlipped(!isFlipped)}
        data-aos="zoom-in"
      >
        <div className={`card ${isFlipped ? "flipped" : ""}`}>
          {/* front */}
          <div className="card-face front">
            <img src={front} alt="" />
          </div>

          {/* back */}
          <div className="card-face back">
            <img src={back} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
