import "../styles/events.css";
import events from "../../data/upcomingEvents.json";
import { useState } from "react";
import image1 from "../assets/upcomingEvent1.png";

import { EventList } from "../components/events/EventList";
import { EventModal } from "../components/events/EventModal";

export const UpcomingEvents = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const brochureFiles = {
    1: image1,
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
    </div>
  );
};
