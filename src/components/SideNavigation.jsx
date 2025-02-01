import Logo from "../images/logo.png";
import { FaUpload, FaUser, FaUsers } from "react-icons/fa";
import "../css/SideNavigation.css";
import { AiFillDashboard } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const SideNavigation = ({ children }) => {
  const navigate = useNavigate();
  const [isSideNavMinimized, setIsSideNavMinimized] = useState(false);
  const toggleSideNav = () => {
    setIsSideNavMinimized(!isSideNavMinimized);
  };

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <AiFillDashboard />,
    },

    {
      path: "/usermanagement",
      name: "User Management",
      icon: <FaUsers />,
    },

    {
      path: "/userprofile",
      name: "User Profile",
      icon: <FaUser />,
    },

    {
      path: "/csvexcelupload",
      name: "CSV/Excel Upload",
      icon: <FaUpload />,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <>
      <Header
        toggleSideNav={toggleSideNav}
        isSideNavMinimized={isSideNavMinimized}
      />
      <div className="container">
        <div
          className={`side-nav ${
            isSideNavMinimized ? "minimized" : "expanded"
          }`}
        >
          <div className="side-nav-logo">
            <img src={Logo} alt="Logo" />
            <h2>Admin MIRABO</h2>
          </div>

          <div className="side-nav-profile">
            <img src={Logo} alt="Profile" />
            <h3>Alexander Pierce</h3>
          </div>

          <div className="side-nav-options">
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="side-nav-link"
                activeClassName="active"
              >
                <div className="side-nav-icon">{item.icon}</div>
                <div
                  className={`side-nav-linktext ${
                    isSideNavMinimized ? "minimized" : "expanded"
                  }`}
                >
                  {item.name}
                </div>
              </NavLink>
            ))}

            <div className="side-nav-logout" onClick={handleLogout}>
              <i>
                <IoLogOut />
              </i>
              <button
                className={`side-nav-button ${
                  isSideNavMinimized ? "minimized" : "expanded"
                }`}
              >
                Log out
              </button>
            </div>
          </div>
        </div>

        <main className={` ${isSideNavMinimized ? "minimized" : "expanded"}`}>
          {children}
        </main>
      </div>
    </>
  );
};

export default SideNavigation;
