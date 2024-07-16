import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PiGreaterThanBold } from "react-icons/pi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { LuContact2 } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { fetchFirestoreData } from "../features/fetch/courseList";
import NavBar2 from "./navBar2";
import Dropdown from "./dropdown";
import Footer from "./footer";
import "../styles/result.css";

interface Course {
  courseTitle: string;
  courseImage: string;
  courseLevel: string;
  learningType: string;
  discountPrice: number;
  // Add other fields as needed
}

const Result: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.firestore
  );

  useEffect(() => {
    dispatch(fetchFirestoreData({ collectionName: "courses" }));
  }, [dispatch]);

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
        <input
          className="resultSearch_input"
          type="text"
          placeholder="UX Design"
        />
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
      <div className="resultData">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data.map((doc: Course, index: number) => (
          <div key={index} className="courseItem">
            <img
              src={doc.courseImage}
              alt={doc.courseTitle}
              className="courseImage"
            />
            <div className="courseHead">
              <p className="courseTitle">{doc.courseTitle}</p>
              <div className="courseHeadBody">
                <p>
                  <LiaSuitcaseSolid /> {doc.courseLevel}
                </p>
                <p>
                  <LuContact2 /> {doc.learningType}
                </p>
              </div>
            </div>
            <div className="courseCta">
              <p>
                #{doc.discountPrice} <span>/ one time fee</span>
              </p>
              <button className="cta">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Result;
