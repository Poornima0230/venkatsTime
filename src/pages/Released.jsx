import "../styles/events.css";
import events from "../../data/releasedEvents.json";

export const Released = () => {
  return (
    <div className="released-container" data-aos="fade-up">
      <h1 data-aos="zoom-in">Released events</h1>
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
