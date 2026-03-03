import "../styles/publications.css";
import up1 from "../assets/upPub1.jpeg";
// import pdf1 from "../assets/up1.pdf";

export const UpPublications = () => {
  return (
    <div className="publication-container">
      <h1 data-aos="zoom-in">Upcoming Publications</h1>
      <hr data-aos="zoom-in" />

      <div className="each-publication-container" data-aos="fade-up">
        <img src={up1} alt="upcoming publication" />
      </div>
      {/* <button onClick={() => window.open(pdf1, "_blank")} data-aos="fade-up">
        View More Details
      </button> */}
    </div>
  );
};
