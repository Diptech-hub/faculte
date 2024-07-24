import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../store";
import { fetchCourseDetails } from "../features/fetch/courseList";
import {
  PiGreaterThanBold,
  PiShoppingCartSimpleBold,
  PiExam,
  PiCertificate,
} from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineArticle, MdDevices } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
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
      <div className="courseDetails_body">
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
            <video width="600" controls>
              <source src={selectedCourse.courseVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="courseDetails_overview">
            <p>Overview</p>
            <p>{selectedCourse.markdown}</p>
          </div>
          <div className="courseDetails_learn">
            <p>What you'll learn </p>
            <ul>
              <li>Introduction to the course in details</li>
              <li>Obtain strong knowledge of the course and use cases</li>
              <li>Write your own independent program</li>
              <li>Understand in details</li>
              <li>Indepth knowledge</li>
            </ul>
          </div>
          <div className="courseDetails_require">
            <p>Requirements</p>
            <ul>
              <li>Access to a computer system</li>
              <li>Internet connection to setup development and watch videos</li>
            </ul>
          </div>
        </div>
        <div className="courseDetails_body2">
          <div className="coursePrice">
            <p>{selectedCourse.discountPrice}</p>
            <p>
              {selectedCourse.actualPrice}
              <span>40% off</span>
            </p>
            <button>
              <PiShoppingCartSimpleBold />
              Enroll
            </button>
          </div>
          <div className="courseLists">
            <p>This course includes</p>
            <ul>
              <li>
                <CiYoutube />
                Months of lecture
              </li>
              <li>
                <MdOutlineArticle />
                Articles
              </li>
              <li>
                <FiDownload />
                Downloadable resources
              </li>
              <li>
                <PiExam />
                Tests
              </li>
              <li>
                <PiExam />
                Exams
              </li>
              <li>
                <MdDevices />
                Access to Mobile and TV
              </li>
              <li>
                <PiCertificate />
                Certificate of completion
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
