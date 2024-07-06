import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, User } from "firebase/auth";
import Markdown from "../utils/markdown";
import { db, storage, auth } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore"; // Modular Firestore imports
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Modular Storage imports
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
  markdown: string;
  courseImage: File | null;
  courseVideo: File | null;
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
    markdown: "",
    courseImage: null,
    courseVideo: null,
  });

  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null); // Ensure user state is correctly reset on logout
        navigate("/login"); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleMarkdownChange = (markdown: string) => {
    setFormState({ ...formState, markdown });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormState({ ...formState, [name]: files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      alert("You must be logged in to submit the form");
      return;
    }

    const isValid = Object.values(formState).every(
      (value) => value !== "" && value !== null && value !== 0
    );

    // Add specific numeric validations
    if (isValid && formState.actualPrice >= formState.discountPrice) {
      alert("Discounted price should be less than or equal to actual price");
      return;
    }

    if (isValid) {
      try {
        let courseImageUrl = null;
        let courseVideoUrl = null;

        if (formState.courseImage) {
          const courseImageRef = ref(
            storage,
            `courseImages/${formState.courseImage.name}`
          );
          await uploadBytes(courseImageRef, formState.courseImage);
          courseImageUrl = await getDownloadURL(courseImageRef);
        }

        if (formState.courseVideo) {
          const courseVideoRef = ref(
            storage,
            `courseVideos/${formState.courseVideo.name}`
          );
          await uploadBytes(courseVideoRef, formState.courseVideo);
          courseVideoUrl = await getDownloadURL(courseVideoRef);
        }

        const firestoreData = {
          ...formState,
          courseImage: courseImageUrl,
          courseVideo: courseVideoUrl,
        };

        await addDoc(collection(db, "courses"), firestoreData);

        alert("Details Submitted");

        setFormState({
          courseTitle: "",
          courseBranch: "",
          courseLevel: "",
          learningType: "",
          courseType: "",
          actualPrice: 0,
          discountPrice: 0,
          language: "",
          dateCreated: "",
          markdown: "",
          courseImage: null,
          courseVideo: null,
        }); // Clear form after submission
      } catch (error) {
        console.error("Error adding document: ", error);
        alert("Failed to submit details. Please try again.");
      }
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  return (
    <div>
      <p className="admin">Register your Faculte Course</p>
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
            <option value="">Select Level</option>
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
            <option value="">Select Type</option>
            <option value="Self paced">Self Paced</option>
            <option value="Curriculum Learning">Curriculum Learning</option>
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
          <Markdown onChange={handleMarkdownChange} />
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
          <label>Course Image:</label>
          <input
            type="file"
            name="courseImage"
            onChange={handleFileChange}
            required
          />
          <br />
          <label>Course Video:</label>
          <input
            type="file"
            name="courseVideo"
            onChange={handleFileChange}
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
