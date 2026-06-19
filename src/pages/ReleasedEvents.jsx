import "../styles/events.css";
import events from "../../data/releasedEvents.json";
import { useState } from "react";
import { Brouchure } from "./Brouchure";
import vt8 from "../assets/vt4.jpeg";
import upcoming1 from "../assets/upcoming1.pdf";

import pdf1 from "../assets/old1.pdf";
import pdf2 from "../assets/up1.pdf";

import { EventList } from "../components/events/EventList";
import { EventModal } from "../components/events/EventModal";

export const ReleasedEvents = () => {
  const [showBrochure, setShowBrochure] = useState(false);
  const [image, setImage] = useState(null);

  const files = {
    1: "brochure",
    2: vt8,
    3: upcoming1,
    4: pdf1,
    5: pdf2,
  };

  const handleViewDetails = (event) => {
    const file = files[event.id];

    if (!file) return;

    if (file === "brochure") {
      setShowBrochure(true);
      return;
    }

    if (file.endsWith(".pdf")) {
      window.open(file, "_blank");
      return;
    }

    setImage(file);
  };

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
    </div>
  );
};
