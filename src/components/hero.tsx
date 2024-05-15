import "../styles/hero.css";
import Reactangle3 from "../assets/Rectangle3.png"

const Hero: React.FC = () => {
  return (
    <div className="top-hero">
      <p className="hero1">
        Uncover New Passions and Skills with our Dynamic Blend of Curriculum and
        Self-paced Learning
      </p>
      <p className="hero2">
        With Faculte, you can learn new skills, expand your knowledge, and
        pursue your passions, all from the comfort of your own home.
      </p>
      <div className="hero-input">
        <input className="input1" type="text" placeholder="Search for courses" />
        <button className="button__search">Search</button>
      </div>
      <img src={Reactangle3} alt="rectangle3" />
    </div>
  );
};

export default Hero;
