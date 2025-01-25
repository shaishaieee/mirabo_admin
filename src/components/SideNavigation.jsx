import React from "react";
import Logo from "../images/logo.png";
import { FaSearch, FaUser, FaUsers } from "react-icons/fa";
import "../css/SideNavigation.css";
import { AiFillDashboard } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SideNavigation = ({ isOpen }) => {
  const navigate = useNavigate();

  return (
    <aside className={`side-nav ${isOpen ? "open" : "close"}`}>
      <div className="side-nav-logo">
        <img src={Logo} alt="Logo" />
        <h2>Admin AICE</h2>
      </div>

      <div className="side-nav-profile">
        <img src={Logo} alt="Profile" />
        <h3>Alexander Pierce</h3>
      </div>

      <nav>
        <div className="side-nav-search">
          <input type="text" placeholder="Search" />
          <i>
            <FaSearch />
          </i>
        </div>

        <ul>
          <li onClick={() => navigate("/dashboard")}>
            <i>
              <AiFillDashboard />
            </i>
            <button className="side-nav-button">Dashboard</button>{" "}
          </li>
          <li onClick={() => navigate("/usermanagement")}>
            <i>
              <FaUsers />
            </i>
            <button className="side-nav-button">User Management</button>
          </li>
          <li onClick={() => navigate("/userprofile")}>
            <i>
              <FaUser />
            </i>
            <button className="side-nav-button">User Profile</button>
          </li>
          <li onClick={() => navigate("/")}>
            <i>
              <IoLogOut />
            </i>
            <button className="side-nav-button">Log Out</button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNavigation;
