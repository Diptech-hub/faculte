import { FaSquareFacebook, FaSquareTwitter } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import "../styles/footer.css"

const Footer: React.FC = () => {
  return (
    <div className="foot-container">
      <p>Faculte</p>
      <div className="foot-body">
        <div className="body1">
          <a href="">Udemy Business</a>
          <a href="">Teach on Udemy</a>
          <a href="">Get the App</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
        </div>
        <div className="body2">
          <a href="">Career</a>
          <a href="">Blog</a>
          <a href="">Help and Support</a>
          <a href="">Affiliate</a>
          <a href="">Investors</a>
        </div>
        <div className="body3">
          <a href="">Terms</a>
          <a href="">Privacy Policy</a>
          <a href="">Cookies Settings</a>
          <a href="">Sitemap</a>
          <a href="">Accessibility Statement</a>
        </div>
      </div>
      <div className="footer">
        <p>© CareerMi Inc. All rights reserved.</p>
        <div className="footer-icon">
          <a href="">
            <FaSquareFacebook />
          </a>
          <a href="">
            <BiLogoInstagramAlt />
          </a>
          <a href="">
            <FaSquareTwitter />
          </a>
          <a href="">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
