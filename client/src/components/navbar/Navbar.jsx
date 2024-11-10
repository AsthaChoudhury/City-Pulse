import { useState, useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext.jsx";

function Navbar() {
  const { currentUser } = useContext(AuthContext); 
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>Travel</span>
        </a>
        <Link to="/">Home</Link>
        <Link to="/list">Explore</Link>
        {/* <Link to="/">About</Link> */}
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src="./user.svg" alt="User avatar" />
            <span>{currentUser.username || "User"}</span>
            <Link to="/profile" className="profile">
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="register">Sign up</Link>
          </>
        )}
        <div className="menuIcon">
          <img src="/menu.png" alt="Menu icon" onClick={() => setOpen((prev) => !prev)} />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/list">Explore</Link>
          <Link to="/">About</Link>
          {currentUser ? (
            <Link to="/profile">Profile</Link>
          ) : (
            <>
              <Link to="/login">Sign in</Link>
              <Link to="/register">Sign up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
