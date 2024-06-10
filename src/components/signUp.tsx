import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom"
import "../styles/signUp.css";

const SignUp: React.FC = () => {
  return (
    <div className="signupContainer">
      <div className="signupHead">
        <p>Faculte</p>
        <Link to="/"><a href="">
          <IoCloseSharp />
        </a>
        </Link>
      </div>
      <p className="join">Join Faculte to start learning</p>
      <div className="signupBody">
        <div className="signupContent">
          <form>
            <label>
              Full Name <br />
              <input type="text" placeholder="John Doe" />
            </label>
            <br />
            <label>
              Email Address <br />
              <input type="email" placeholder="Johndoe@mail.com" />
            </label>
            <br />
            <label>
              Password <br />
              <input type="password" placeholder="Johndoe@mail.com" />
            </label>{" "}
            <br />
          </form>
          <button className="signupButton">Sign up</button>
        </div>
        <div className="signupBottom">
          <p>
            You agree to our <a href="">Terms of Use</a> and{" "}
            <a href="">Privacy Policy</a> by signing up
          </p>
          <div className="line"></div>
          <p>
            Already have an Account? <Link to="/login"><a href="">Log in </a></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
