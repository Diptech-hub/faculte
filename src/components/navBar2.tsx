import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "../styles/navBar2.css";

const NavBar2: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);
  const [isHovered, setIsHovered] = useState(false);

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
      <div className="body">
        <a href="">Categories</a>
        <a href="">For Schools</a>
        <a href="">Teach</a>
        <a href="">
          <LuShoppingCart />
        </a>
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
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar2;
