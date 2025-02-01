import { FaBars } from "react-icons/fa";
import "../css/Header.css";

const Header = ({ toggleSideNav, isSideNavMinimized }) => {
  return (
    <>
      <header>
        <div
          className={`header ${isSideNavMinimized ? "minimized" : "expanded"}`}
        >
          <div className="header-left">
            <i onClick={toggleSideNav}>
              <FaBars />
            </i>

            <h4>MIRABO</h4>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
