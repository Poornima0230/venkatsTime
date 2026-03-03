import "../styles/events.css";
import events from "../../data/releasedEvents.json";
import { useEffect, useState } from "react";
import { Brouchure } from "./Brouchure";
export const Released = () => {
  const [showBrochure, setShowBrochure] = useState(false);
  useEffect(() => {
    document.body.style.overflow = showBrochure ? "hidden" : "auto";
  }, [showBrochure]);
  return (
    <div className="released-container" data-aos="fade-up">
      <h1 data-aos="zoom-in">Released Events</h1>
      <hr data-aos="zoom-in" />
      <div className="event-container">
        {[...events].reverse().map((event) => (
          <div key={event.id} className="each-event">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <ul className="event-info">
              <li>{event.date}</li>
              <li>{event.venue}</li>
              <li>{event.mode}</li>
            </ul>
            <button onClick={() => setShowBrochure(true)}>View Details</button>
          </div>
        ))}
      </div>

      {/* pop up of brochure */}
      {/* {showBrochure && (
        <div className="brochure-overlay">
          <button className="close-btn" onClick={() => setShowBrochure(false)}>
            X
          </button>

          <Brouchure />
        </div>
      )} */}
      {showBrochure && (
        <div
          className="brochure-overlay"
          onClick={() => setShowBrochure(false)}
        >
          {/* <button className="close-btn" onClick={() => setShowBrochure(false)}>
            X
          </button> */}

          <div onClick={(e) => e.stopPropagation()}>
            <Brouchure />
          </div>
        </div>
      )}

      {/* {showBrochure && (
        <div className="brochure-overlay">
          <div className="brochure-wrapper">
            <button
              className="close-btn"
              onClick={() => setShowBrochure(false)}
            >
              X
            </button>

            <Brouchure />
          </div>
        </div>
      )} */}
    </div>
  );
};
