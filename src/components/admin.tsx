import { useState } from "react";
import Markdown from "../utils/markdown";
import "../styles/admin.css";

interface AdminFormState {
  courseTitle: string;
  courseBranch: string;
  courseLevel: string;
  learningType: string;
  courseType: string;
  actualPrice: number;
  discountPrice: number;
  language: string;
  dateCreated: string;
  authorName: string;
  authorImage: File | null;
  authorProfession: string;
}

const Admin: React.FC = () => {
  const [formState, setFormState] = useState<AdminFormState>({
    courseTitle: "",
    courseBranch: "",
    courseLevel: "",
    learningType: "",
    courseType: "",
    actualPrice: 0,
    discountPrice: 0,
    language: "",
    dateCreated: "",
    authorName: "",
    authorImage: null,
    authorProfession: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setFormState({ ...formState, [name]: files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = Object.values(formState).every(
      (value) => value !== "" && value !== null
    );
    if (isValid) {
      // Handle form submission
      alert("Details Submited");
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  return (
    <div>
      <p className="admin">Register your Faculty Course</p>
      <div className="adminDetails">
        <form onSubmit={handleSubmit}>
          <label>Course Title:</label>
          <input
            type="text"
            name="courseTitle"
            value={formState.courseTitle}
            onChange={handleInputChange}
            required
          />
          <br />
          <label>Course Branch:</label>
          <input
            type="text"
            name="courseBranch"
            value={formState.courseBranch}
            onChange={handleInputChange}
            required
          />
          <br />
          <label>Course Level:</label>
          <select
            name="courseLevel"
            value={formState.courseLevel}
            onChange={handleInputChange}
            required
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <br />
          <label>Learning Type:</label>
          <select
            name="learningType"
            value={formState.learningType}
            onChange={handleInputChange}
            required
          >
            <option value="Self paced">Self paced</option>
            <option value="Scheduled classes">Scheduled Class</option>
          </select>
          <br />
          <label>Course Type:</label>
          <select
            name="courseType"
            value={formState.courseType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Development">Development</option>
            <option value="Design">Design</option>
            <option value="Art">Art</option>
            <option value="Science">Science</option>
            <option value="Business">Business</option>
            <option value="Photogrpahy">Photography</option>
            <option value="Music">Music</option>
            <option value="Basic Education">Basic Education</option>
          </select>
          <br />
          <label>Actual Price:</label>
          <input
            type="number"
            name="actualPrice"
            value={formState.actualPrice}
            onChange={handleInputChange}
            required
          />
          <br />
          <label>Discount Price:</label>
          <input
            type="number"
            name="discountPrice"
            value={formState.discountPrice}
            onChange={handleInputChange}
            required
          />
          <br />
          <label>Language:</label>
          <input
            type="text"
            name="language"
            value={formState.language}
            onChange={handleInputChange}
            required
          />
          <br />
          <label>Overview</label>
          <Markdown />
          <br />
          <label>Date Created:</label>
          <input
            type="date"
            name="dateCreated"
            value={formState.dateCreated}
            onChange={handleInputChange}
            required
          />
          <br />
          <label>Author Name:</label>
          <input
            type="text"
            name="authorName"
            value={formState.authorName}
            onChange={handleInputChange}
            required
          />
          <br />
          <label>Author Image:</label>
          <input
            type="file"
            name="authorImage"
            onChange={handleFileChange}
            required
          />
          <br />
          <label>Author Profession:</label>
          <input
            type="text"
            name="authorProfession"
            value={formState.authorProfession}
            onChange={handleInputChange}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
