import React, { useState } from "react";
import "../css/UserProfile.css";
import Header from "./Header";

const UserProfile = () => {
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
      <div
        className={`userprofile ${
          isSideNavMinimized ? "minimized" : "expanded"
        }`}
      >
        <h1>ユーザープロフィール</h1>

        <div className="userprofile-content">
          <div className="profile-info">
            <h3>
              First Name: <span>Lorry Mae</span>
            </h3>
            <h3>
              Last Name: <span>Mcintire</span>
            </h3>

            <h3>
              Email: <span>Mcintiire@test.com</span>
            </h3>
            <h3>
              Role: <span>User</span>
            </h3>
          </div>
          <div className="profile-info">
            <h3>
              First Name: <span>Lorry Mae</span>
            </h3>
            <h3>
              Last Name: <span>Mcintire</span>
            </h3>

            <h3>
              Email: <span>Mcintiire@test.com</span>
            </h3>
            <h3>
              Role: <span>User</span>
            </h3>
          </div>
          <div className="profile-info">
            <h3>
              First Name: <span>Lorry Mae</span>
            </h3>
            <h3>
              Last Name: <span>Mcintire</span>
            </h3>

            <h3>
              Email: <span>Mcintiire@test.com</span>
            </h3>
            <h3>
              Role: <span>User</span>
            </h3>
          </div>
          <div className="profile-info">
            <h3>
              First Name: <span>Lorry Mae</span>
            </h3>
            <h3>
              Last Name: <span>Mcintire</span>
            </h3>

            <h3>
              Email: <span>Mcintiire@test.com</span>
            </h3>
            <h3>
              Role: <span>User</span>
            </h3>
          </div>
          <div className="profile-info">
            <h3>
              First Name: <span>Lorry Mae</span>
            </h3>
            <h3>
              Last Name: <span>Mcintire</span>
            </h3>

            <h3>
              Email: <span>Mcintiire@test.com</span>
            </h3>
            <h3>
              Role: <span>User</span>
            </h3>
          </div>
          <div className="profile-info">
            <h3>
              First Name: <span>Lorry Mae</span>
            </h3>
            <h3>
              Last Name: <span>Mcintire</span>
            </h3>

            <h3>
              Email: <span>Mcintiire@test.com</span>
            </h3>
            <h3>
              Role: <span>User</span>
            </h3>
          </div>
          <div className="profile-info">
            <h3>
              First Name: <span>Lorry Mae</span>
            </h3>
            <h3>
              Last Name: <span>Mcintire</span>
            </h3>

            <h3>
              Email: <span>Mcintiire@test.com</span>
            </h3>
            <h3>
              Role: <span>User</span>
            </h3>
          </div>
          <div className="profile-info">
            <h3>
              First Name: <span>Lorry Mae</span>
            </h3>
            <h3>
              Last Name: <span>Mcintire</span>
            </h3>

            <h3>
              Email: <span>Mcintiire@test.com</span>
            </h3>
            <h3>
              Role: <span>User</span>
            </h3>
          </div>
          <div className="profile-info">
            <h3>
              First Name: <span>Lorry Mae</span>
            </h3>
            <h3>
              Last Name: <span>Mcintire</span>
            </h3>

            <h3>
              Email: <span>Mcintiire@test.com</span>
            </h3>
            <h3>
              Role: <span>User</span>
            </h3>
          </div>
          <div className="profile-info">
            <h3>
              First Name: <span>Lorry Mae</span>
            </h3>
            <h3>
              Last Name: <span>Mcintire</span>
            </h3>

            <h3>
              Email: <span>Mcintiire@test.com</span>
            </h3>
            <h3>
              Role: <span>User</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
