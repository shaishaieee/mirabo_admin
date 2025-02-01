import React from "react";
import "../css/UserManagemenr.css";
import { FaSearch, FaUserEdit } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";
import { HiUserAdd } from "react-icons/hi";
import { TiUserDelete } from "react-icons/ti";

const UserManagement = () => {
  return (
    <>
      <div className="usermanagement">
        <h1>ユーザー管理</h1>
        <div className="usermanagement-content">
          <div className="management-header">
            <div className="management-search">
              <input type="text" placeholder="検索" />
              <i>
                <FaSearch />
              </i>
            </div>

            <div className="management-crudicons">
              <i>
                <HiUserAdd />
              </i>
            </div>
          </div>

          <div className="management-table">
            <table>
              <thead>
                <tr>
                  <th>
                    名前
                    <i>
                      <LuArrowDownUp />
                    </i>
                  </th>
                  <th>
                    作成日
                    <i>
                      <LuArrowDownUp />
                    </i>
                  </th>
                  <th>役割</th>
                  <th>アクション</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="management-actionicon">
                      <i>
                        <FaUserEdit />
                      </i>
                      <i>
                        <TiUserDelete />
                      </i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="management-actionicon">
                      <i>
                        <FaUserEdit />
                      </i>
                      <i>
                        <TiUserDelete />
                      </i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="management-actionicon">
                      <i>
                        <FaUserEdit />
                      </i>
                      <i>
                        <TiUserDelete />
                      </i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="management-actionicon">
                      <i>
                        <FaUserEdit />
                      </i>
                      <i>
                        <TiUserDelete />
                      </i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="management-actionicon">
                      <i>
                        <FaUserEdit />
                      </i>
                      <i>
                        <TiUserDelete />
                      </i>
                    </div>
                  </td>
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
