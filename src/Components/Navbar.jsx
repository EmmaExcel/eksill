import React from "react";
import "./Navbar.css";
import {useToggle} from "./UseToggle";
import logo from "../images/logo/Group4.png";

const Navbar = () => {
  const [click,openSidebar,closeSidebar,ToggleSidebar]=useToggle()
  return (
    <div className="nav-container">
      
      <div className="navbar">
        <div className="sidebar-toggle" onClick={ToggleSidebar}>
          <i className={ click ?"fa-solid fa-times":"fa-solid fa-bars" }></i>
        </div>
        <div className="nav-logo"><img src={logo} /></div>
        <nav className="navbar-container">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <div className="nav-buttons">
          <button className='login'>Login</button>
          <button className='register'>Register</button>
        </div>
      </div>


      <div className={click ? "sidebar-container show" : "sidebar-container"}>
      <nav className="">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>

     
    </div>
  );
};

export default Navbar;
