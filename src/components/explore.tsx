import Card from "../components/card";
import pen from "../assets/pen.png";
import "../styles/explore.css";
import { IoMdArrowRoundForward } from "react-icons/io";

const Explore: React.FC = () => {
  return (
    <div className="explore-top">
      <p className="explore-head">Explore Faculte</p>
      <div className="explore-body1">
        <Card
          text1="Basic Education"
          text2="Build a strong foundation for your future with our online basic education courses."
          imgr={pen}
          alt="desing"
        />
        <Card
          text1="Design"
          text2="Design that's both beautiful and functional."
          imgr={pen}
          alt="desing"
        />
        <Card
          text1="Development"
          text2="Development that makes your business wstand out from the crowd."
          imgr={pen}
          alt="desing"
        />
        <Card
          text1="Art"
          text2="Discover your inner artist with our online art education courses."
          imgr={pen}
          alt="desing"
        />
      </div>
      <div className="explore-body2">
        <Card
          text1="Science"
          text2="Discover your scientific skills and critical thinking with our online science educational courses."
          imgr={pen}
          alt="desing"
        />
        <Card
          text1="Business"
          text2="Learn the fundamental of business with our online business education courses."
          imgr={pen}
          alt="desing"
        />
        <Card
          text1="Photography"
          text2="Discover your photogrpahic skills and creativity with our online photogrpahy courses."
          imgr={pen}
          alt="desing"
        />
        <Card
          text1="Music"
          text2="BDiscover your inner musician with our online music courses."
          imgr={pen}
          alt="desing"
        />
      </div>
      <button className="explore-button">Explore Categories <IoMdArrowRoundForward /></button>
    </div>
  );
};

export default Explore;
