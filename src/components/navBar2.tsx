import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "../styles/navBar2.css";

const NavBar2: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        const userName = user.email;
        alert(`${userName} signed out`);
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
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
          <a href="">
            <MdOutlineNotificationAdd />
          </a>
          <div
            className="account-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link to="/signup">
              <RiAccountPinCircleFill className="account" />
            </Link>
            {isHovered && user && (
              <div className="hover-content">
                <p>{user.email}</p>
                <button onClick={handleLogout}>
                  Logout <FiLogOut />
                </button>
              </div>
            )}
          </div>
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
        <a href="">
          <MdOutlineNotificationAdd />
        </a>
        <div
          className="account-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link to="/signup">
            <RiAccountPinCircleFill className="account" />
          </Link>
          {isHovered && user && (
            <div className="hover-content">
              <p>{user.email}</p>
              <button onClick={handleLogout}>
                Logout <FiLogOut />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar2;
