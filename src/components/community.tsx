import azeez from "../assets/azeez.png";
import "../styles/community.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Community: React.FC = () => {
    const settings = {
        dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
      };
      
  return (
    <div className="communityhead">
      <div className="community">
        <p>From the Faculte community</p>
        
        <div className="community__body">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="community__body1">
                <img src={d.img} alt={d.name} />
              <div className="community__body1content">
                <p>{d.name}</p>
                <p className="text">{d.text}</p>
                {/* <div className=".line"></div> */}
                <p>{d.review}</p>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    img: azeez,
    name: "Azeez Laughter",
    text: "Principal, Kemtop Academy",
    review:
      "“Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.”",
  },
  {
    img: azeez,
    name: "mickey Laughter",
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

export default Community;
