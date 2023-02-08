import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignInWrapper() {
  const handleFBLogin = async () => {
    await axios
      .get("http://localhost:8080/auth/facebook")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleGoogleLogin = async () => {
    await axios
      .get("http://localhost:8080/auth/google")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <div className="signIn_wrapper">
        <button className="btn-SignIn" type="submit">
          登入
        </button>
        <br />
        <button
          className="btn-FB"
          type="button"
          onClick={handleFBLogin}
        >
          <AiFillFacebook />
          使用Facebook登入
        </button>
        <br />
        <button
          className="btn-Google"
          type="button"
          onClick={handleGoogleLogin}
        >
          <AiOutlineGoogle />
          使用Google登入
        </button>
        <div className="signIn_wrap">
          <Link href="/#">免費註冊會員</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link href="/#">忘記密碼</Link>
        </div>
      </div>
    </>
  );
}
