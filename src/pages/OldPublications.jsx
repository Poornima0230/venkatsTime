import "../styles/publications.css";
import old1 from "../assets/oldPub1.jpeg";
export const OldPublications = () => {
  return (
    <div className="publication-container">
      <h1 data-aos="zoom-in">Released Publications</h1>
      <hr data-aos="zoom-in" />
      <div className="each-publication-container" data-aos="fade-up">
        <img src={old1} alt="upcoming publication" />
      </div>
    </div>
  );
};
