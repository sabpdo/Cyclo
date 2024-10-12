import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return(
    <>
      <nav className="navbar">
          <header className="logo"> 
            <a href="/">
            </a>
          </header>
          <div className="hamburger-menu" onClick={handleClick}>
            {click ? <IoMdClose size={32} style={{color: "white"}}/> : <IoMenuOutline size={32} style={{color: "white"}}/>}
          </div>
        <div className={click ? "nav-container active" : "nav-container"}>
          <ul className={click ? "nav-menu" : "nav-menu"}>
            {/* <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;