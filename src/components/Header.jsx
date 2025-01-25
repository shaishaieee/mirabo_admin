import React from "react";
import { FaBars, FaRegBell, FaSearch, FaWindows } from "react-icons/fa";
import "../css/Header.css";
import { TbMessages } from "react-icons/tb";
import { FaMaximize } from "react-icons/fa6";

const Header = ({ toggleSideNav }) => {
  return (
    <header>
      <div className="header">
        <div className="header-left">
          <i onClick={toggleSideNav}>
            <FaBars />
          </i>
          <h4>Home</h4>
          <h4>Contact</h4>
        </div>
        <div className="header-right">
          <i>
            <FaSearch />
          </i>
          <i>
            <TbMessages />
          </i>
          <i>
            <FaRegBell />
          </i>
          <i>
            <FaMaximize />
          </i>
          <i>
            <FaWindows />
          </i>
        </div>
      </div>
    </header>
  );
};

export default Header;
