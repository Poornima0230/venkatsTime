import "../styles/contact.css";
import { IoIosCall, IoIosMail } from "react-icons/io";
export const Contact = () => {
  return (
    <div className="contact-page">
      {/* <h1 className="contact-heading" data-aos="zoom-in">
        Contact
      </h1>
      <div className="underline" data-aos="zoom-in"></div> */}
      <div className="contact-glass">
        <h2>For more details contact:</h2>
        <h1 className="contact-name">Dr. K. Venkat Satish</h1>
        <h3 className="contact-icon">
          <IoIosCall /> 9912878008
        </h3>
        <h3 className="contact-icon">
          <IoIosMail /> venkatstime72@gmail.com
        </h3>
      </div>
    </div>
  );
};
