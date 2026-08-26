import { useEffect, useState } from "react";
// import image1 from "../../assets/img1.jpeg";
// import image2 from "../../assets/img2.jpeg";
// import image4 from "../../assets/img3.jpeg";
// import image1 from "../../assets/upcomingEvent1.png";
// import image2 from "../../assets/latest.jpeg";
import image1 from "../../assets/WhatsApp.jpeg";
import image2 from "../../assets/25Sept.jpeg";

export const ImageSlider = () => {
  const images = [image1, image2];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // auto sliding
  useEffect(() => {
    if (isHover) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isHover]);

  return (
    <div
      className="slider"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
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
