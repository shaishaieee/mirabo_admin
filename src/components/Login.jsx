import React from "react";
import "../css/Login.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import LoginPhoto from "../images/login.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <h1>
        Admin <span>MIRABO</span>
      </h1>

      <div className="login-container">
        <div className="login-left">
          <h3>サインインして開始</h3>

          <form action="">
            <div className="user-input">
              <input type="text" placeholder="メール" />{" "}
              <i>
                <FaEnvelope />
              </i>
            </div>

            <div className="user-input">
              <input type="password" placeholder="パスワード" />{" "}
              <i>
                <FaLock />
              </i>
            </div>

            <div className="login-options">
              <div className="checkbox">
                <input type="checkbox" /> 私を覚えてますか
              </div>

              <p onClick={() => navigate("/forgetpassword")}>
                パスワードを忘れました
              </p>
            </div>
          </form>

          <div className="signin-button" onClick={() => navigate("/dashboard")}>
            <button>サインイン</button>
          </div>
        </div>

        <div className="login-right">
          <p>
            Lorem、ipsum dolor
            は、エリートを構築するために座っています。イブニエット、 陣痛。
          </p>
          <img src={LoginPhoto} alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
