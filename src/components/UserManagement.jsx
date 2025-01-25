import React from "react";
import "../css/UserManagemenr.css";
import SideNavigation from "./SideNavigation";
import Header from "./Header";
import { FaSearch } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";

const UserManagement = () => {
  return (
    <>
      <Header />
      <SideNavigation />

      <div className="usermanagement">
        <h1>User Management</h1>
        <div className="usermanagement-content">
          <div className="management-search">
            <input type="text" placeholder="Search" />
            <i>
              <FaSearch />
            </i>
          </div>

          <div className="management-table">
            <table>
              <thead>
                <tr>
                  <th>
                    ID
                    <i>
                      <LuArrowDownUp />
                    </i>
                  </th>
                  <th>
                    Name
                    <i>
                      <LuArrowDownUp />
                    </i>
                  </th>
                  <th>Answer</th>
                  <th>
                    Date
                    <i>
                      <LuArrowDownUp />
                    </i>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManagement;
