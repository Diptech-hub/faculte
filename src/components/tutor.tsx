import lady from "../assets/lady.png";
import { IoMdArrowRoundForward } from "react-icons/io";
import "../styles/tutor.css";
import teamapt from "../assets/teamapt.png"
import altSchool from "../assets/altSchool.png"
import access from "../assets/access.png"
import schoolableLogo from "../assets/schoolableLogo.png"
import cowrywise from "../assets/cowrywise.png"

const Tutor: React.FC = () => {
  return (
    <div className="top">
      <div className="t-body1">
        <div>
          <div className="square"></div>
          <img src={lady} alt="lady" />
        </div>
        <div className="tutor">
          <p>Become a Tutor</p>
          <p>
            Instructors from around the world teach millions of students on
            Udemy. We provide the tools and skills to teach what you love.
          </p>
          <button>
            Join Faculte <IoMdArrowRoundForward />
          </button>
        </div>
      </div>
      <div className="t-body2">
        <p>Trusted by over thousands of learners and schools.</p>
        <p>Leading schools use the same courses to help students keep their brain fresh</p>
      </div>
      <div className="t-body3">
        <img src={access} alt="access" />
        <img src={cowrywise} alt="cowrywise" />
        <img src={schoolableLogo} alt="schoolable" />
        <img src={teamapt} alt="teamapt" />
        <img src={altSchool} alt="altSchool" />
      </div>
    </div>
  );
};

export default Tutor;
