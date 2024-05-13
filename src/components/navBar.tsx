// import { Link } from "react-router-dom"
import { LuShoppingCart } from "react-icons/lu";
import "../styles/navBar.css"

const NavBar: React.FC = () => {
    return (
      <div className="topBar">
        <p className="top-name">Faculte</p>
        <div className="body">
            <a href="">Categories</a>
            <a href="">For Schools</a>
            <a href="">Teach</a>
            <a href=""><LuShoppingCart /></a>
            <a href="">Login</a>
            <button>Signup</button>
        </div>
      </div>
    );
  }
  
  export default NavBar;