import NavBar from "./navBar";
import { Link } from "react-router-dom";
import { PiGreaterThanBold } from "react-icons/pi";
import "../styles/result.css";

const Result: React.FC = () => {
  return (
    <div className="resultContent">
      <NavBar />
      <div className="resultHead">
        <Link to="/" className="resultHead_1">
          Home <PiGreaterThanBold /> <span>Search Result</span>
        </Link>
        <h1 className="resultHead_2">Search Results</h1>
      </div>
    </div>
  );
};

export default Result;
