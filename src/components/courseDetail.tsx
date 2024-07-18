import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../store";
import { fetchCourseDetails } from "../features/fetch/courseList";

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
      <h1>{selectedCourse.courseTitle}</h1>
      <img src={selectedCourse.courseImage} alt={selectedCourse.courseTitle} />
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
      <div dangerouslySetInnerHTML={{ __html: selectedCourse.markdown }}></div>
    </div>
  );
};

export default CourseDetails;
