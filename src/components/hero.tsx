import "../styles/hero.css";

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
        <button>Search</button>
      </div>
    </div>
  );
};

export default Hero;
