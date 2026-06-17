import "../styles/events.css";
import events from "../../data/upcomingEvents.json";
import { useState } from "react";
import upcoming1 from "../assets/upcoming1.pdf";

import pdf1 from "../assets/old1.pdf";
import pdf2 from "../assets/up1.pdf";
import { EventList } from "../components/events/EventList";
import { EventModal } from "../components/events/EventModal";

export const UpcomingEvents = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const brochureFiles = {
    1: upcoming1,
    4: pdf1,
    5: pdf2,
  };

  const handleViewDetails = (event) => {
    const file = brochureFiles[event.id];

    if (!file) return;

    if (file.endsWith(".pdf")) {
      window.open(file, "_blank");
      return;
    }

    setSelectedImage(file);
  };

  // useEffect(() => {
  //   document.body.style.overflow = selectedImage ? "hidden" : "auto";
  // }, [selectedImage]);

  return (
    <div
      className="upcoming-container"
      // data-aos="fade-up"
    >
      <h1 data-aos="zoom-in">Upcoming Events</h1>
      <hr data-aos="zoom-in" />

      <EventList events={events} onViewDetails={handleViewDetails} />
      <EventModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      >
        <img
          src={selectedImage}
          alt="Event Brochure"
          className="brochure-image"
        />
      </EventModal>
      {/* <div className="event-container" data-aos="fade-up">
        {[...events].reverse().map((event) => (
          <div key={event.id} className="each-event">
            <h3>{event.title}</h3>
            <p>{event.description}</p>

            <ul className="event-info">
              <li>{event.date}</li> */}
      {/* <li>{event.venue}</li> */}
      {/* <li>{event.mode}</li>
            </ul> */}
      {/* <button onClick={() => setShowBrochure(true)}>View Details</button> */}
      {/* <button */}
      {/* // onClick={() => setSelectedImage(images[index])}
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
      </div> */}

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
      {/* {selectedImage && (
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
      )} */}
    </div>
  );
};
