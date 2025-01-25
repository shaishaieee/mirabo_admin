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
                Lorem、ipsum dolor
                は、エリートを構築するために座っています。イブニエット、 陣痛。
              </p>
            </div>

            <div className="forget-password-box">
              <p>
                パスワードを忘れましたか？ここで簡単に新しいパスワードを取得できます
              </p>
              <form action="" className="forget-password-form">
                <div className="forgetpasswor-email">
                  <input type="email" placeholder="メール" />
                  <i>
                    <FaEnvelope />
                  </i>
                </div>

                <div className="forgetpassword-button">
                  <button onClick={() => navigate("/")}>
                    新しいパスワードをリクエスト
                  </button>
                </div>
              </form>

              <h5 onClick={() => navigate("/")}>ログイン</h5>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ForgetPassword;
