import "../../styles/footer.css";
import venkatlLogo from "../../assets/venkatLogo.jpg";
import isoLogo from "../../assets/isoLogo.avif";
import msme from "../../assets/msme.png";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="ff">
        <h3>
          Organized by <b>VENKAT'S TIME</b>
        </h3>
        <p>An Academy of Excellence</p>
        <p>An ISO & MSME certified company</p>
      </div>
      <div className="footer-logo">
        <img src={venkatlLogo} alt="venkat's time logo" />
        <img src={isoLogo} alt="iso certified company" />
        <img src={msme} alt="msme logo" />
      </div>
      <p>Design and developed by vignora edge</p>
    </footer>
  );
};
