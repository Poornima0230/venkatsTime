import "../styles/publications.css";

export const UpPublications = () => {
  return (
    <div className="publication-container">
      <h1 data-aos="zoom-in">Upcoming Publications</h1>
      <hr data-aos="zoom-in" />

      <div className="each-publication-container" data-aos="fade-up">
        <h3>Nothing scheduled yet — new publications will appear here soon.</h3>
      </div>
    </div>
  );
};
