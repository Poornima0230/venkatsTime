import "../styles/events.css";
import events from "../../data/releasedEvents.json";
import { useState } from "react";
import { Brouchure } from "./Brouchure";
import vt8 from "../assets/vt4.jpeg";
import { EventList } from "../components/events/EventList";
import { EventModal } from "../components/events/EventModal";

export const ReleasedEvents = () => {
  const [showBrochure, setShowBrochure] = useState(false);
  const [image, setImage] = useState(null);

  const files = {
    1: "brochure",
    2: vt8,
  };

  const handleViewDetails = (event) => {
    const file = files[event.id];

    if (!file) return;

    if (file === "brochure") {
      setShowBrochure(true);
      return;
    }

    setImage(file);
  };
  // useEffect(() => {
  //   document.body.style.overflow = showBrochure || image ? "hidden" : "auto";

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [showBrochure, image]);

  // const images = {
  //   1: Brouchure,
  //   2: vt8,
  // };
  return (
    <div
      className="released-container"
      // data-aos="fade-up"
    >
      <h1 data-aos="zoom-in">Released Events</h1>
      <hr data-aos="zoom-in" />

      <EventList events={events} onViewDetails={handleViewDetails} />

      <EventModal isOpen={showBrochure} onClose={() => setShowBrochure(false)}>
        <Brouchure />
      </EventModal>

      <EventModal isOpen={!!image} onClose={() => setImage(null)}>
        <img src={image} alt="Event Brochure" className="brochure-image" />
      </EventModal>
      {/* <div className="event-container">
        {[...events].reverse().map((event) => (
          <div key={event.id} className="each-event">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <ul className="event-info">
              <li>{event.date}</li>
              <li>{event.venue}</li>
              <li>{event.mode}</li>
            </ul>
            <button
              // onClick={() => setShowBrochure(true)}
              onClick={() => {
                const file = images[event.id];

                if (event.id == 1) {
                  setShowBrochure(true);
                } else {
                  setImage(file);
                  // setSelImg(true);
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
      {/* {showBrochure && (
        <div
          className="brochure-overlay"
          onClick={() => setShowBrochure(false)}
        >
          {/* <button className="close-btn" onClick={() => setShowBrochure(false)}>
            X
          </button> */}

      {/* <div onClick={(e) => e.stopPropagation()}>
            <Brouchure />
          </div> */}
      {/* </div> */}
      {/* )} */}

      {/* pop images */}
      {/* // {image && ( */}
      {/* //   <div className="brochure-overlay" onClick={() => setImage(null)}>
      //     <button className="close-btn" onClick={() => setImage(null)}>
      //       X
      //     </button>

      //     <img src={image} alt="Event Brochure" className="brochure-image" />
      //   </div>
      // )} */}
    </div>
  );
};
