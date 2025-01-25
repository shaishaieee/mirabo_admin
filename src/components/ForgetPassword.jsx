import React from "react";
import "../css/ForgetPassword.css";
import { FaEnvelope } from "react-icons/fa";
import Forget from "../images/forget.png";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="forget-password">
        <div className="forget-password-content">
          <h1>
            Admin <span>MIRABO</span>
          </h1>

          <div className="forgetpassword-wholebox">
            <div className="forgetpassword-topbox">
              <img src={Forget} alt="Forget Password" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                sunt!
              </p>
            </div>

            <div className="forget-password-box">
              <p>
                You forgot your password? Here you can easily retrieve a new
                password
              </p>
              <form action="" className="forget-password-form">
                <div className="forgetpasswor-email">
                  <input type="email" placeholder="Email" />
                  <i>
                    <FaEnvelope />
                  </i>
                </div>

                <div className="forgetpassword-button">
                  <button onClick={() => navigate("/")}>
                    Request new password
                  </button>
                </div>
              </form>

              <h5 onClick={() => navigate("/")}>Login</h5>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ForgetPassword;
