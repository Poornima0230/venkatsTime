import "../styles/events.css";
import events from "../../data/upcomingEvents.json";
import { useEffect, useState } from "react";
// import { Brouchure } from "./Brouchure";
import upcoming1 from "../assets/upcoming1.jpeg";
import upcoming2 from "../assets/upcoming2.jpeg";
import upcoming3 from "../assets/upcoming3.jpeg";

import pdf1 from "../assets/old1.pdf";
import pdf2 from "../assets/up1.pdf";

export const Upcoming = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const brochureFiles = {
    1: upcoming1,
    2: upcoming2,
    3: upcoming3,
    4: pdf1,
    5: pdf2,
  };
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
  }, [selectedImage]);

  // const images = [upcoming1, upcoming2, upcoming3];

  // const [showBrochure, setShowBrochure] = useState(false);
  // useEffect(() => {
  //   document.body.style.overflow = showBrochure ? "hidden" : "auto";
  // }, [showBrochure]);
  return (
    <div
      className="upcoming-container"
      // data-aos="fade-up"
    >
      <h1 data-aos="zoom-in">Upcoming Events</h1>
      <hr data-aos="zoom-in" />
      <div className="event-container" data-aos="fade-up">
        {[...events].reverse().map((event) => (
          <div key={event.id} className="each-event">
            <h3>{event.title}</h3>
            <p>{event.description}</p>

            <ul className="event-info">
              <li>{event.date}</li>
              {/* <li>{event.venue}</li> */}
              <li>{event.mode}</li>
            </ul>
            {/* <button onClick={() => setShowBrochure(true)}>View Details</button> */}
            <button
              // onClick={() => setSelectedImage(images[index])}
              onClick={() => {
                const file = brochureFiles[event.id];

                if (file.endsWith(".pdf")) {
                  window.open(file, "_blank");
                } else {
                  setSelectedImage(file);
                }
              }}
            >
              View Details
            </button>
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

      {/* pop images */}
      {selectedImage && (
        <div className="brochure-overlay">
          <button className="close-btn" onClick={() => setSelectedImage(null)}>
            X
          </button>

          <img
            src={selectedImage}
            alt="Event Brochure"
            className="brochure-image"
          />
        </div>
      )}
    </div>
  );
};
