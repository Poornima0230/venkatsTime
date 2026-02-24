import { useEffect, useState } from "react";
import image1 from "../../assets/bgImage.png";
import image2 from "../../assets/SLICE.png";
import image4 from "../../assets/slice.png";

export const ImageSlider = () => {
  const images = [image1, image2, image4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    // setCurrentIndex((currentIndex + 1) % images.length);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    // setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // auto sliding
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {/* <button onClick={prevSlide}>Prev</button> */}
      <span className="arrow left" onClick={prevSlide}>
        &#10094;
      </span>

      {/* image container */}
      <div className="slider-wrapper">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img key={index} src={img} alt="slide" className="slider-image" />
          ))}
        </div>
      </div>

      {/* <button onClick={nextSlide}>Next</button> */}
      <span className="arrow right" onClick={nextSlide}>
        &#10095;
      </span>

      {/* dots */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={currentIndex === index ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};
