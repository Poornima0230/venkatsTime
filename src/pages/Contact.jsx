import "../styles/contact.css";
import { IoIosCall } from "react-icons/io";
export const Contact = () => {
  return (
    <div className="contact-page" data-aos="fade-up">
      <h1 className="contact-heading" data-aos="zoom-in">
        Contact
      </h1>
      <div className="underline" data-aos="zoom-in"></div>
      <div className="contact-glass" data-aos="fade-up">
        <h2>For more details contact:</h2>
        <h1 className="contact-name">Dr. K. Venkat Sathish</h1>
        <h3>
          <IoIosCall /> 9912878008
        </h3>
      </div>
    </div>
  );
};
