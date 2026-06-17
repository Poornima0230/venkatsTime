import "../../styles/events.css";

export const EventCard = ({ event, onViewDetails }) => {
  return (
    <div className="each-event">
      <h3>{event.title}</h3>

      <p>{event.description}</p>

      <ul className="event-info">
        <li>{event.date}</li>

        {event.venue && <li>{event.venue}</li>}

        <li>{event.mode}</li>
      </ul>

      <button onClick={() => onViewDetails(event)}>View Details</button>
    </div>
  );
};
