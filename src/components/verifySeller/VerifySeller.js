import Header from "../header/Header";
import Footer from "../footer/Footer";
import SideBar from "../reUseable/SideBar";
import VerifySellerPath from "./VerifySellerPath";
import "./VerifySeller.css";
import FormInput from "./formInput/FormInput";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function VerifySeller() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    user_id: "8",
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
      pattern: `{8}`,
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
      "http://localhost:8080/api/verifySeller",
      values
    );
    navigate("/profile");
    console.log(response);
    setValues({
      ...values,
      authorityStatus: "賣家",
    });
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
        <h2 className=" fw-bold titleFirst">驗</h2>
        <h2 className=" fw-bold">證成賣家</h2>
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
                Jodie@test.com
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
                src="./images/profileImage.jpg"
                alt="profileImage"
                className="profileImage"
              />
            </div>
            <div className="profileName">Jodie</div>
            <div className="authorityStatus">
              認證狀態 : 賣家
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VerifySeller;
