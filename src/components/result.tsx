import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PiGreaterThanBold } from "react-icons/pi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { fetchFirestoreData } from "../features/fetch/courseList";
import NavBar2 from "./navBar2";
import Dropdown from "./dropdown";
import Footer from "./footer";
import SkeletonCourseItem from "./skeleton";
import "../styles/result.css";
import { LuContact2 } from "react-icons/lu";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface Course {
  courseTitle: string;
  courseImage: string;
  courseLevel: string;
  learningType: string;
  discountPrice: number;
  id: string;
}

const Result: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error, lastDoc, hasMore } = useSelector(
    (state: RootState) => state.firestore
  );

  const pageSize = 20;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");

  useEffect(() => {
    dispatch(
      fetchFirestoreData({
        collectionName: "courses",
        pageSize,
        startAfterDoc: null,
      })
    );
  }, [dispatch, pageSize]);

  const fetchPageData = (pageNumber: number) => {
    const startAfterDoc = pageNumber > currentPage ? lastDoc : null;
    dispatch(
      fetchFirestoreData({ collectionName: "courses", pageSize, startAfterDoc })
    );
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (hasMore) {
      fetchPageData(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      fetchPageData(currentPage - 1);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleDropdownSelect = (value: string) => {
    setSelectedOption(value);
  };

  // Dropdown options, including an option to show all results
  const options = [
    { value: "", label: "All Levels" },
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Advanced", label: "Advanced" },
  ];

  // Filtering logic
  const filteredData = data.filter((course: Course) => {
    const matchesSearchQuery = course.courseTitle
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesDropdown =
      selectedOption === "" || course.courseLevel === selectedOption;

    return matchesSearchQuery && matchesDropdown;
  });

  // Count the number of filtered results
  const displayedResultsCount = filteredData.length;

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
          placeholder="Search by Course Title"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Dropdown
          options={options}
          onSelect={handleDropdownSelect}
          placeholder="Choose Level"
        />
        <button className="resultSearch_button">Submit</button>
        <button className="resultSearch_filter">
          <TbAdjustmentsHorizontal />
        </button>
      </div>
      <div className="resultDataWrapper">
        <div className="totalCount">
          <p>{displayedResultsCount} Results Found</p>
        </div>
        <div className="resultData">
          {loading &&
            Array.from({ length: pageSize }).map((_, indexskel) => (
              <SkeletonCourseItem key={indexskel} />
            ))}
          {error && <p>Error: {error}</p>}
          {!loading && !error && filteredData.length === 0 && (
            <p>No results found</p>
          )}
          {!loading &&
            !error &&
            filteredData.map((doc: Course) => (
              <div key={doc.id} className="courseItem">
                <img
                  src={doc.courseImage}
                  alt={doc.courseTitle}
                  className="courseImage"
                />
                <div className="courseHead">
                  <Link to={`/items/${doc.id}`} className="courseTitle">
                    {doc.courseTitle}
                  </Link>
                  <div className="courseHeadBody">
                    <p>
                      <LiaSuitcaseSolid /> {doc.courseLevel}
                    </p>
                    <p>
                      <LuContact2 /> {doc.learningType}
                    </p>
                  </div>
                </div>
                <div className="lineCard"></div>
                <div className="courseCta">
                  <p>
                    #{doc.discountPrice} <span>/ one time fee</span>
                  </p>
                  <Link to={`/items/${doc.id}`}>
                    <button className="cta">Enroll</button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="paginationControls">
        <button onClick={prevPage} disabled={currentPage === 1 || loading}>
          <FaArrowLeft />
        </button>
        <span> {currentPage}</span>
        <button onClick={nextPage} disabled={!hasMore || loading}>
          <FaArrowRight />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Result;
