import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Login: React.FC = () => {
  return (
    <div className="loginContainer">
      <div className="loginHead">
        <p>Faculte</p>
        <Link to="/"><a href="">
          <IoCloseSharp />
        </a>
        </Link>
      </div>
      <p className="join">Log in to your Faculte account</p>
      <div className="loginBody">
        <div className="loginContent">
          <form>
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
          <button className="loginButton">Log in</button>
        </div>
        <div className="loginBottom">
          <div className="line"></div>
          <p className="or">or</p>
          <button className="loginSocialButton1"><FcGoogle />Continue with Google</button>
          <button className="loginSocialButton2"> <FaFacebook />Continue with Facebook</button>
          <p>
            Don't have an Account? <Link to="/signup"><a href="">Sign up </a></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
