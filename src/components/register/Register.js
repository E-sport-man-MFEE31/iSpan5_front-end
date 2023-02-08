import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../header/Header";
import FormInput from "./formInput/FormInput";
import Footer from "../footer/Footer";

import "./register.css";

function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    user_name: "",
    password: "",
    repeatPassword: "",
    email: "",
    address: "",
    phone: "",
  });

  const inputs = [
    {
      id: 1,
      name: "user_name",
      type: "text",
      placeholder: "name",
      errorMessage: "用戶名不能超過50個字",
      label: "帳號",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "它應該是一個有效的電子郵件地址！",
      label: "E-mail",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "密碼應為6-30個字符",
      pattern: "^[a-zA-Z0-9]{6,30}$",
      label: "密碼",
      required: true,
    },
    {
      id: 4,
      name: "repeatPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "密碼不匹配！",
      label: "確認密碼",
      pattern: values.password,
      required: true,
    },
    {
      id: 5,
      name: "phone",
      type: "tel",
      placeholder: "phone",
      errorMessage: "電話格式錯誤",
      label: "行動電話",
      pattern: `^[0-9]{3}[0-9]{3}[0-9]{4}$`,
      required: true,
    },
    {
      id: 6,
      name: "address",
      type: "text",
      placeholder: "address",
      label: "地址",
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await axios.post(
      "http://localhost:8080/api/user/register",
      values
    );
    navigate("/signIn");

    console.log(response);
  };

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>
            <span
              style={{
                color: "#fb570b",
              }}
            >
              會
            </span>
            員註冊
          </h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button type="submit">註冊</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Register;
