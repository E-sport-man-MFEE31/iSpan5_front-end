import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import SideBar from "../reUseable/SideBar";
import VerifySellerPath from "./VerifySellerPath";
import FormInput from "./formInput/FormInput";
import { useAuth } from "../../utils/useAuth";

import "./VerifySeller.css";

function VerifySeller() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [image, setImage] = useState(
    "http://localhost:8080" +
      JSON.parse(localStorage.getItem("user")).member
        .thumbnail
  );
  const [values, setValues] = useState({
    user_id: JSON.parse(localStorage.getItem("user")).member
      .id,
    store_name: "",
    taxID: "",
    storeIntro: "",
  });

  const inputs = [
    {
      id: 1,
      name: "store_name",
      type: "text",
      placeholder: "賣場名稱",
      label: "賣場名稱",
      required: true,
    },
    {
      id: 2,
      name: "taxID",
      type: "text",
      placeholder: "統一編號",
      errorMessage: "統一編號不可為空，且應為8位數！",
      label: "統一編號",
      pattern: `^[0-9]{8}$`,
      required: true,
    },
    {
      id: 3,
      name: "storeIntro",
      type: "text",
      placeholder: "賣場簡介",
      errorMessage: "賣場名稱至少輸入 5 個字符！！",
      label: "賣場簡介",
      pattern: `{5}`,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await axios.post(
      `http://localhost:8080/api/profile/${currentUser.member.id}/verifySeller`,
      values
    );
    navigate("/profile");
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
      <div className="title p-5 d-flex">
        <h2 className="fw-bold titleFirst">驗</h2>
        <h2 className="fw-bold">證成賣家</h2>
      </div>
      <div className="Nav-title">
        <div className="detailPath d-flex">
          <VerifySellerPath />
        </div>
      </div>
      <div className="tableFrame d-flex">
        <div className="tableLeft">
          <SideBar />
        </div>
        <div className="tableRight d-flex">
          <form
            className="verifySellerInfo"
            onSubmit={handleSubmit}
          >
            {/* <VerifySellerInfo /> */}
            <div className="inputChanging d-flex">
              <label className="account">帳號</label>
              <div className="inputWord">
                {currentUser.member.email}
              </div>
            </div>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <div className="inputChanging">
              <button className="btnVerify" type="submit">
                驗證
              </button>
            </div>
          </form>
          <div className="profileStatus">
            <div className="profilePhoto">
              <img
                src={image}
                alt="profileImage"
                className="profileImage"
              />
            </div>
            <div className="profileName">
              {currentUser.member.name}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VerifySeller;
