import { FC } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import "../styles/card.css";

interface Props {
  text1: string;
  text2: string;
  imgr: string;
  alt: string;
}

const Card: FC<Props> = ({ text1, text2, imgr, alt }) => {
  return (
    <div className="card-container">
      <div className="card-head">
        <img src={imgr} alt={alt} />
        <p>{text1}</p>
      </div>
      <p className="card-body">{text2}</p>
      <button className="button__courses">
        See Courses  
        <IoMdArrowRoundForward />
      </button>
    </div>
  );
};

export default Card;
