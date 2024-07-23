import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../store";
import { fetchCourseDetails } from "../features/fetch/courseList";
import { PiGreaterThanBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import NavBar3 from "./navBar3";
import "../styles/courseDetail.css";

const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { selectedCourse, loading, error } = useSelector(
    (state: RootState) => state.firestore
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchCourseDetails(id));
    } else {
      navigate("/");
    }
  }, [dispatch, id, navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!selectedCourse) {
    return <p>No course found.</p>;
  }

  return (
    <div className="courseDetails">
      <NavBar3 />
      <div className="courseDetails_top">
        <p>
          Home <PiGreaterThanBold /> {selectedCourse.courseType}{" "}
          <PiGreaterThanBold /> <span>{selectedCourse.courseTitle}</span>
        </p>
      </div>
      {/* {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>} */}
      <div className="courseDetails_body1">
        <div className="courseDetails_body1Head">
          <p>{selectedCourse.courseTitle}</p>
          <p>{selectedCourse.courseType}</p>
          <div className="courseDetails_body1HeadList">
            <p>
              Last Updates <span>{selectedCourse.dateCreated}</span>
            </p>
            <p>
              Level <span>{selectedCourse.courseType}</span>
            </p>
            <p>
              Type <span>{selectedCourse.learningType}</span>
            </p>
            <p>
              Language <span>{selectedCourse.language}</span>
            </p>
            <button>
              <FaRegHeart />
              Wishlist
            </button>
            <button>
              <BiShare />
              Share
            </button>
          </div>
        </div>
        <img
          src={selectedCourse.courseImage}
          alt={selectedCourse.courseTitle}
        />
        <p>Level: {selectedCourse.courseLevel}</p>
        <p>Learning Type: {selectedCourse.learningType}</p>
        <p>Discount Price: #{selectedCourse.discountPrice}</p>
        <p>Actual Price: #{selectedCourse.actualPrice}</p>
        <p>Branch: {selectedCourse.courseBranch}</p>
        <p>Type: {selectedCourse.courseType}</p>
        <p>Date Created: {selectedCourse.dateCreated}</p>
        <p>Language: {selectedCourse.language}</p>
        <video width="600" controls>
          <source src={selectedCourse.courseVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          dangerouslySetInnerHTML={{ __html: selectedCourse.markdown }}
        ></div>
      </div>
    </div>
  );
};

export default CourseDetails;
