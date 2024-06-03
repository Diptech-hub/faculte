import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import "../styles/signUp.css";

const Login: React.FC = () => {
  return (
    <div className="loginContainer">
      <div className="loginHead">
        <p>Faculte</p>
        <a href="">
          <IoCloseSharp />
        </a>
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
          <button className="loginSocialButton"><FcGoogle />Continue with Google</button>
          <button className="loginSocialButton"> <FaFacebook />Continue with Facebook</button>
          <p>
            Don't have an Account? <a href="">Sign up </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
