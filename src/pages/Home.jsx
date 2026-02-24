import { HeroContent } from "../components/ui/HeroContent";
import { ImageSlider } from "../components/ui/ImageSlider";
import "../styles/home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="slider-container" data-aos="fade-up">
        <ImageSlider data-aos="zoom-in" />
        <HeroContent data-aos="zoom-in" />
      </div>
    </div>
  );
};
