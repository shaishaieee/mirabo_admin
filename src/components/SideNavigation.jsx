import Logo from "../images/logo.png";
import { FaSearch, FaUpload, FaUser, FaUsers } from "react-icons/fa";
import "../css/SideNavigation.css";
import { AiFillDashboard } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SideNavigation = ({ isSideNavMinimized }) => {
  const navigate = useNavigate();

  return (
    <aside
      className={`side-nav ${isSideNavMinimized ? "minimized" : "expanded"}`}
    >
      <div className="side-nav-logo">
        <img src={Logo} alt="Logo" />
        <h2>Admin MIRABO</h2>
      </div>

      <div className="side-nav-profile">
        <img src={Logo} alt="Profile" />
        <h3>Alexander Pierce</h3>
      </div>

      <nav>
        <div className="side-nav-search">
          <input type="text" placeholder="検索" />
          <i>
            <FaSearch />
          </i>
        </div>

        <ul>
          <li onClick={() => navigate("/dashboard")}>
            <i>
              <AiFillDashboard />
            </i>
            <button
              className={`side-nav-button ${
                isSideNavMinimized ? "minimized" : "expanded"
              }`}
            >
              ダッシュボード
            </button>
          </li>
          <li onClick={() => navigate("/usermanagement")}>
            <i>
              <FaUsers />
            </i>
            <button
              className={`side-nav-button ${
                isSideNavMinimized ? "minimized" : "expanded"
              }`}
            >
              ユーザー管理
            </button>
          </li>
          <li onClick={() => navigate("/userprofile")}>
            <i>
              <FaUser />
            </i>
            <button
              className={`side-nav-button ${
                isSideNavMinimized ? "minimized" : "expanded"
              }`}
            >
              ユーザープロフィール
            </button>
          </li>
          <li onClick={() => navigate("/csvexcelupload")}>
            <i>
              <FaUpload />
            </i>
            <button
              className={`side-nav-button ${
                isSideNavMinimized ? "minimized" : "expanded"
              }`}
            >
              CVS/Excel ファイル
            </button>
          </li>
          <li onClick={() => navigate("/")}>
            <i>
              <IoLogOut />
            </i>
            <button
              className={`side-nav-button ${
                isSideNavMinimized ? "minimized" : "expanded"
              }`}
            >
              ログアウト
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNavigation;
