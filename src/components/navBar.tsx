// import { Link } from "react-router-dom"
import { LuShoppingCart } from "react-icons/lu";
import "../styles/navBar.css"

const NavBar: React.FC = () => {
    return (
      <div className="topBar">
        <p className="top-name">Faculte</p>
        <div className="body">
            <a>Categories</a>
            <a>For Schools</a>
            <a>Teach</a>
            <a><LuShoppingCart /></a>
            <a>Login</a>
            <button>Signup</button>
        </div>
      </div>
    );
  }
  
  export default NavBar;