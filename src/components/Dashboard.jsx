import React, { useState } from "react";
import "../css/Dashboard.css";
import SideNavigation from "./SideNavigation";
import Header from "./Header";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaArrowCircleRight } from "react-icons/fa";

const Dashboard = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);
  return (
    <>
      <Header toggleSideNav={() => setIsSideNavOpen(!isSideNavOpen)} />
      <SideNavigation
        isOpen={isSideNavOpen}
        toggleSideNav={() => setIsSideNavOpen(!isSideNavOpen)}
      />

      <div
        className={`dashboard ${
          isSideNavOpen ? "sidenav-open" : "sidenav-close"
        }`}
      >
        <div className="dashboard-content">
          <h1>Dashboard</h1>
          <div className="dashboard-boxes">
            {/* Box */}
            <div>
              <div className="box A">
                <div className="box-text">
                  <h1>150</h1>
                  <h4>New Order</h4>
                </div>

                <i>
                  <HiOutlineShoppingBag />
                </i>
              </div>

              <div className="box-button A">
                <h4>More Info</h4>
                <i>
                  <FaArrowCircleRight />
                </i>
              </div>
            </div>

            {/* Box */}
            <div>
              <div className="box B">
                <div className="box-text">
                  <h1>53%</h1>
                  <h4>Bounce Rate</h4>
                </div>

                <i>
                  <HiOutlineShoppingBag />
                </i>
              </div>

              <div className="box-button B">
                <h4>More Info</h4>
                <i>
                  <FaArrowCircleRight />
                </i>
              </div>
            </div>

            {/* Box */}
            <div>
              <div className="box C">
                <div className="box-text">
                  <h1>150</h1>
                  <h4>New Order</h4>
                </div>

                <i>
                  <HiOutlineShoppingBag />
                </i>
              </div>

              <div className="box-button C">
                <h4>More Info</h4>
                <i>
                  <FaArrowCircleRight />
                </i>
              </div>
            </div>

            {/* Box */}
            <div>
              <div className="box D">
                <div className="box-text">
                  <h1>150</h1>
                  <h4>New Order</h4>
                </div>

                <i>
                  <HiOutlineShoppingBag />
                </i>
              </div>

              <div className="box-button D">
                <h4>More Info</h4>
                <i>
                  <FaArrowCircleRight />
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
