// src/components/Login.js
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInUser,
  signInWithGoogle,
} from "../../features/auth/loginAuthSlice";
import "../../styles/login.css";
import { RootState, AppDispatch } from "../../store";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch: AppDispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.login);

  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resultAction = await dispatch(signInUser({ email, password }));
    if (signInUser.fulfilled.match(resultAction)) {
      navigate("/");
    }
  };

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle());
  };

  return (
    <div className="loginContainer">
      <div className="loginHead">
        <p>Faculte</p>
        <Link to="/">
          <IoCloseSharp />
        </Link>
      </div>
      <p className="join">Log in to your Faculte account</p>
      <div className="loginBody">
        <div className="loginContent">
          <form onSubmit={handleSignIn}>
            <label>
              Email Address <br />
              <input
                type="email"
                placeholder="Johndoe@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password <br />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>{" "}
            <br />
            <button type="submit" className="loginButton" disabled={loading}>
              {loading ? "Logging in..." : "Log in"}
            </button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
        <div className="loginBottom">
          <div className="line"></div>
          <p className="or">or</p>
          <button className="loginSocialButton1" onClick={handleGoogleSignIn}>
            <FcGoogle />
            Continue with Google
          </button>
          <button className="loginSocialButton2">
            <FaFacebook />
            Continue with Facebook
          </button>
          <p>
            Don't have an Account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
