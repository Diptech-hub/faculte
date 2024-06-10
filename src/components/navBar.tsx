// import { Link } from "react-router-dom"
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom"
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
            <Link to="/login"><a href="">Login</a></Link>
            <Link to="/signup"><button className="signup">Signup</button></Link>
        </div>
      </div>
    );
  }
  
  export default NavBar;