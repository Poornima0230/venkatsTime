import "../styles/publications.css";

import publications from "../../data/publications.json";
import genderPower from "../assets/vt7.jpeg";
import teachingAI from "../assets/vt8.jpeg";
import bachpan from "../assets/bachpanC.jpeg";
import textualEmbodiment from "../assets/textualEmbodimentC.jpeg";

export const OldPublications = () => {
  const publicationImages = {
    genderPowerPatriarchy: genderPower,
    teachingEnglishAI: teachingAI,
    bachpan: bachpan,
    textualEmbodiment: textualEmbodiment,
  };
  return (
    <div className="publication-container">
      <h1 data-aos="zoom-in">Released Publications</h1>
      <hr data-aos="zoom-in" />
      <div
        // className="each-publication-container"
        className="publication-grid"
        data-aos="fade-up"
      >
        {/* <img src={old1} alt="upcoming publication" /> */}
        {[...publications].reverse().map((book) => (
          <div className="publication-card" key={book.id} data-aos="fade-up">
            <div className="book-cover">
              <img src={publicationImages[book.image]} alt={book.title} />
            </div>

            <div className="book-info">
              <span className="category">{book.category}</span>
              <h2>{book.title}</h2>
              <p className="subtitle">{book.subtitle}</p>
              <p className="authors">
                {book.authors
                  ? book.authors.join(", ")
                  : book.editors.join(", ")}
              </p>

              <div className="book-meta">
                {book.isbn && (
                  <p>
                    <strong>ISBN:</strong> {book.isbn}
                  </p>
                )}

                {book.price && (
                  <p>
                    <strong>Price:</strong> {book.price}
                  </p>
                )}
              </div>

              <p className="description">{book.description}</p>

              <div className="features">
                {book.features.map((feature, index) => (
                  <span key={index}>{feature}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <button onClick={() => window.open(pdf1, "_blank")} data-aos="fade-up">
        View More Details
      </button> */}
    </div>
  );
};
