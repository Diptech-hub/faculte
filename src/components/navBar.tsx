import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "../styles/navBar.css";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="topBar">
      <p className="top-name">Faculte</p>
      <button className="mobileBtn" onClick={toggleMenu}>
        {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
      </button>
      {isMenuOpen && (
        <div className="mobileBody">
          <a href="">Categories</a>
          <a href="">For Schools</a>
          <a href="">Teach</a>
          <Link to="/cart">
            <a href="">
              <LuShoppingCart />
            </a>
          </Link>
          <Link to="/login">
            <a href="">Login</a>
          </Link>
          <Link to="/signup">
            <button className="signup">Signup</button>
          </Link>
        </div>
      )}
      <div className="body">
        <a href="">Categories</a>
        <a href="">For Schools</a>
        <a href="">Teach</a>
        <Link to="/cart">
          <a href="">
            <LuShoppingCart />
          </a>
        </Link>
        <Link to="/login">
          <a href="">Login</a>
        </Link>
        <Link to="/signup">
          <button className="signup">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
