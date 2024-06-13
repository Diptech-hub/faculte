import { IoCloseSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../features/auth/signupAuthSlice";
import "../../styles/signUp.css";
import { RootState, AppDispatch } from "../../store"

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch: AppDispatch = useDispatch(); 
  const { loading, error } = useSelector((state: RootState) => state.signIn);

  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resultAction = await dispatch(signUpUser({ email, password }));
    if (signUpUser.fulfilled.match(resultAction)) {
      navigate("/"); 
    }
  };

  return (
    <div className="signupContainer">
      <div className="signupHead">
        <p>Faculte</p>
        <Link to="/">
          <IoCloseSharp />
        </Link>
      </div>
      <p className="join">Join Faculte to start learning</p>
      <div className="signupBody">
        <div className="signupContent">
          <form onSubmit={handleSignUp}>
            <label>
              Full Name <br />
              <input
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
            <br />
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
            <button type="submit" className="signupButton" disabled={loading}>
              {loading ? "Signing up..." : "Sign up"}
            </button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
        <div className="signupBottom">
          <p>
            You agree to our <a href="">Terms of Use</a> and{" "}
            <a href="">Privacy Policy</a> by signing up
          </p>
          <div className="line"></div>
          <p>
            Already have an Account?{" "}
            <Link to="/login">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
