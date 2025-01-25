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
        Admin <span>AICE</span>
      </h1>

      <div className="login-container">
        <div className="login-left">
          <h3>Sign in to Start</h3>

          <form action="">
            <div className="user-input">
              <input type="text" placeholder="Email" />{" "}
              <i>
                <FaEnvelope />
              </i>
            </div>

            <div className="user-input">
              <input type="password" placeholder="Password" />{" "}
              <i>
                <FaLock />
              </i>
            </div>

            <div className="login-options">
              <div className="checkbox">
                <input type="checkbox" /> Remember me
              </div>

              <p>I forgot my password</p>
            </div>
          </form>

          <div className="signin-button" onClick={() => navigate("/dashboard")}>
            <button>Sign In</button>
          </div>
        </div>

        <div className="login-right">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            laborum.
          </p>
          <img src={LoginPhoto} alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
