import React, { useEffect, useState } from "react";

import SignInForm from "./SignInForm";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import "./signIn.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Header />
      <div className="signIn">
        {/* 標題 */}
        <div className="signIn_title">
          <h2>
            <span>會</span>員登入
          </h2>
        </div>

        <div className="signIn_container">
          <SignInForm
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SignIn;
