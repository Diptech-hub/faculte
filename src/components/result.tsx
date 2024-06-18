import NavBar2 from "./navBar2";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PiGreaterThanBold } from "react-icons/pi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import Dropdown from "./dropdown";
import Footer from "./footer";
import "../styles/result.css";

const Result: React.FC = () => {
  const [, setSelectedOption] = useState<string>("");

  const handleSelect = (value: string) => {
    setSelectedOption(value);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="resultContent">
      <NavBar2 />
      <div className="resultHead">
        <Link to="/" className="resultHead_1">
          Home <PiGreaterThanBold /> <span>Search Result</span>
        </Link>
        <h1 className="resultHead_2">Search Results</h1>
      </div>
      <div className="resultSearch">
        <input className="resultSearch_input" type="text" placeholder="UX Design" />
        <Dropdown
          options={options}
          onSelect={handleSelect}
          placeholder="Choose"
        />
        <button className="resultSearch_button">Submit</button>
        <button className="resultSearch_filter">
          <TbAdjustmentsHorizontal />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Result;
