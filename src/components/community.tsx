import React, { useState } from "react";
import azeez from "../assets/azeez.png";
import "../styles/community.css";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

interface DataItem {
  img: string;
  name: string;
  text: string;
  review: string;
}

const data: DataItem[] = [
  {
    img: azeez,
    name: "Azeez Laughter",
    text: "Principal, Kemtop Academy",
    review:
      "“Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.”",
  },
  {
    img: azeez,
    name: "Azeez Laughter",
    text: "Principal, Kemtop Academy",
    review:
      "“Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.”",
  },
  {
    img: azeez,
    name: "Azeez Laughter",
    text: "Principal, Kemtop Academy",
    review:
      "“Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.”",
  },
  {
    img: azeez,
    name: "Azeez Laughter",
    text: "Principal, Kemtop Academy",
    review:
      "“Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.”",
  },
];

const Community: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="communityhead">
      <div className="community">
        <p>From the Faculte community</p>

        <div className="community__body-container">
          <div
            className="community__body"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {data.map((d, index) => (
              <div className="community__body1" key={index}>
                <img src={d.img} alt={d.name} />
                <div className="community__body1content">
                  <p>{d.name}</p>
                  <p className="text">{d.text}</p>
                  <p>{d.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="buttons">
          <button className="buttons__carousel" onClick={handlePrevClick}>
            <FaRegArrowAltCircleLeft className="carouselIcon"/>
          </button>
          <button className="buttons__carousel" onClick={handleNextClick}>
            <FaRegArrowAltCircleRight className="carouselIcon"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
