import "../css/Dashboard.css";
import { FaRobot } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import { RiAdvertisementFill } from "react-icons/ri";
import Header from "./Header";
import { useState } from "react";

const Dashboard = () => {
  const [isSideNavMinimized, setIsSideNavMinimized] = useState(false);
  const toggleSideNav = () => {
    setIsSideNavMinimized(!isSideNavMinimized);
  };

  return (
    <>
      <Header
        toggleSideNav={toggleSideNav}
        isSideNavMinimized={isSideNavMinimized}
      />
      <div className="dashboard">
        <div
          className={`dashboard-content ${
            isSideNavMinimized ? "minimized" : "expanded"
          }`}
        >
          <h1>ダッシュボード</h1>
          <div className="dashboard-boxes">
            {/* Box */}
            <div>
              <div className="box A">
                <div className="box-text">
                  <h1>150</h1>
                  <h4>ミニアプリユーザー総数</h4>
                </div>

                <i>
                  <FaUsersLine />
                </i>
              </div>
            </div>

            {/* Box */}
            <div>
              <div className="box B">
                <div className="box-text">
                  <h1>109</h1>
                  <h4>ミニアプリ広告再生回数合計</h4>
                </div>

                <i>
                  <RiAdvertisementFill />
                </i>
              </div>
            </div>

            {/* Box */}
            <div>
              <div className="box C">
                <div className="box-text">
                  <h1>290</h1>
                  <h4>総GPT応答</h4>
                </div>

                <i>
                  <FaRobot />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
