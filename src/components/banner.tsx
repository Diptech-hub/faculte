import star from "../assets/star.png";
import "../styles/banner.css"

const Banner: React.FC = () => {
  return (
    <div className="container">
      <div className="banner1">
        <p>EDUCATION</p>
        <img src={star} alt="star" />
        <p>ONLINE COURSE</p>
        <img src={star} alt="star" />
        <p>E-LEARNING</p>
      </div>
      <div className="banner2">
        <p>EDUCATION</p>
        <img src={star} alt="star" />
        <p className="spec">ONLINE COURSE</p>
        <img src={star} alt="star" />
        <p>E-LEARNING</p>
      </div>
    </div>
  );
};

export default Banner;
