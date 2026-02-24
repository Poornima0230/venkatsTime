import "../styles/events.css";
import events from "../../data/upcomingEvents.json";

export const Upcoming = () => {
  return (
    <div className="upcoming-container" data-aos="fade-up">
      <h1 data-aos="zoom-in">Upcoming events</h1>
      <hr data-aos="zoom-in" />
      <div className="event-container" data-aos="fade-up">
        {[...events].reverse().map((event) => (
          <div key={event.id} className="each-event">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <ul className="event-info">
              <li>{event.date}</li>
              <li>{event.venue}</li>
              <li>{event.mode}</li>
            </ul>
            <button>More info</button>
          </div>
        ))}
      </div>
    </div>
  );
};
