import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { RootState, AppDispatch } from '../store';
import { fetchCourseDetails } from '../features/fetch/courseList';
import { addToCart } from '../features/cart/cart';
import {
  PiGreaterThanBold,
  PiShoppingCartSimpleBold,
  PiExam,
  PiCertificate,
} from 'react-icons/pi';
import { FaRegHeart } from 'react-icons/fa';
import { CiYoutube } from 'react-icons/ci';
import { MdOutlineArticle, MdDevices, MdClose } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';
import { BiShare } from 'react-icons/bi';
import { GiReceiveMoney } from 'react-icons/gi';
import NavBar3 from './navBar3';
import '../styles/courseDetail.css';
import Footer from './footer';

const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { selectedCourse, loading, error } = useSelector(
    (state: RootState) => state.firestore
  );

  const [isExpanded, setIsExpanded] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchCourseDetails(id));
    } else {
      navigate('/');
    }
  }, [dispatch, id, navigate]);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleAddToCart = () => {
    if (selectedCourse) {
      dispatch(
        addToCart({
          id: selectedCourse.id,
          title: selectedCourse.courseTitle,
          image: selectedCourse.courseImage,
          price: selectedCourse.discountPrice,
          branch: selectedCourse.courseType,
        })
      );
      togglePopup();
    }
  };

  const handleProceedToCart = () => {
    handleAddToCart();
    navigate('/cart');
  };

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
    <div className='courseDetails'>
      <NavBar3 />
      <div className='courseDetails_top'>
        <p>
          Home <PiGreaterThanBold /> {selectedCourse.courseType}{' '}
          <PiGreaterThanBold /> <span>{selectedCourse.courseTitle}</span>
        </p>
      </div>
      <div className='courseDetails_body'>
        <div className='courseDetails_body1'>
          <div className='courseDetails_body1Head'>
            <h1>{selectedCourse.courseTitle}</h1>
            <p>{selectedCourse.courseType}</p>
            <div className='courseDetails_body1HeadList'>
              <p>
                Last Updates <br /> <span>{selectedCourse.dateCreated}</span>
              </p>
              <p>
                Level <br />
                <span>{selectedCourse.courseType}</span>
              </p>
              <p>
                Type <br />
                <span>{selectedCourse.learningType}</span>
              </p>
              <p>
                Language <br />
                <span>{selectedCourse.language}</span>
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
            <video width='600' controls>
              <source src={selectedCourse.courseVideo} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='courseDetails_overview'>
            <p>Overview</p>
            <p className={isExpanded ? 'text-expand' : 'text-collapse'}>
              {selectedCourse.markdown}
            </p>
            <button className='toggleButton' onClick={toggleText}>
              {isExpanded ? 'Show less' : 'Show more'}
            </button>
          </div>
          <div className='courseDetails_learn'>
            <p>What you'll learn </p>
            <ul>
              <li>Introduction to the course in details</li>
              <li>Obtain strong knowledge of the course and use cases</li>
              <li>Write your own independent program</li>
              <li>Understand in details</li>
              <li>Indepth knowledge</li>
            </ul>
          </div>
          <div className='courseDetails_requirements'>
            <p>Requirements</p>
            <ul>
              <li>Access to a computer system</li>
              <li>Internet connection to setup development and watch videos</li>
            </ul>
          </div>
        </div>
        <div className='courseDetails_body2'>
          <div className='coursePrice'>
            <p>#{selectedCourse.discountPrice}</p>
            <div className='discount'>
              <p>#{selectedCourse.actualPrice}</p>
              <span>40% off</span>
            </div>
            <button onClick={handleAddToCart}>
              <PiShoppingCartSimpleBold />
              Add to Cart
            </button>
            <button onClick={handleProceedToCart}>
              <GiReceiveMoney />
              Buy Now
            </button>
          </div>
          <div className='courseLists'>
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
      <Footer />
      {isPopupVisible && selectedCourse && (
        <Popup selectedCourse={selectedCourse} onClose={togglePopup} />
      )}
    </div>
  );
};

interface PopupProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedCourse: any;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ selectedCourse, onClose }) => {
  const navigate = useNavigate();

  const handleProceedToCart = () => {
    navigate('/cart');
  };

  return (
    <div className='popup'>
      <div className='popup-inner'>
        <div className='popup-innerHead'>
          <p>
            Added to cart <br />
            <span>The course has been added to your cart</span>
          </p>
          <button onClick={onClose}>
            <MdClose />
          </button>
        </div>
        <div className='popup-innerBody'>
          <img src={selectedCourse.courseImage} alt={selectedCourse.courseTitle} />
          <p>
            {selectedCourse.courseTitle} <br />
            <span>{selectedCourse.courseBranch}</span>
          </p>
        </div>
        <button className='innerBtn' onClick={handleProceedToCart}>
          Proceed to Cart
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
