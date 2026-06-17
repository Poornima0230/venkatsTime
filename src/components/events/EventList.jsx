import "../../styles/events.css";
import { EventCard } from "./EventCard";

export const EventList = ({ events, onViewDetails }) => {
  return (
    <div className="event-container">
      {[...events].reverse().map((event) => (
        <EventCard key={event.id} event={event} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
};
