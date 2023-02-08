import { useState, useEffect } from "react";
import axios from "axios";

import ProfilePath from "./ProfilePath";
import SideBar from "../reUseable/SideBar";
import ProfileInfo from "./ProfileInfo";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import "./profile.scss";

function Profile() {
  const [userData, setUserData] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [image, setImage] = useState();

  // 選擇的檔案
  const [selectedFile, setSelectedFile] = useState(null);

  // 預覽圖片
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!selectedFile) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    console.log(objectUrl);
    setPreview(objectUrl);

    // 當元件unmounted時清除記憶體
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  async function getData() {
    let response = await axios.get(
      `http://localhost:8080/api/profile/1`
    );
    let result = response.data.user;
    console.log(response.data.user);
    setUserData(result[0]);
    setName(result[0].name);
    setEmail(result[0].email);
    setAddress(result[0].address);
    setPhone(result[0].phone);
    setImage("http://localhost:8080" + result[0].thumbnail);
  }

  useEffect(() => {
    getData();
  }, [image]);

  async function updateProfile() {
    const formData = new FormData();
    formData.append("thumbnail", selectedFile);
    formData.append("user_name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);

    try {
      let response = await axios.post(
        `http://localhost:8080/api/profile/1`,
        formData
      );
      getData();
    } catch (err) {
      console.error(err);
    }
  }

  const changeHandler = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  return (
    <>
      <Header />
      <div className="title p-5 d-flex w-100">
        <h2 className="fw-bold titleFirst">會</h2>
        <h2 className="fw-bold">員資料</h2>
      </div>
      <div className="Nav-title">
        <div className="detailPath d-flex">
          <ProfilePath />
        </div>
      </div>
      <div className="tableFrame d-flex">
        <div className="tableLeft">
          <SideBar />
        </div>
        <div className="tableRight d-flex">
          <div className="profileInfo">
            <ProfileInfo
              userData={userData}
              setUserData={setUserData}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              address={address}
              setAddress={setAddress}
              isEdit={isEdit}
              changeHandler={changeHandler}
            />
          </div>
          <div className="profileStatus">
            <div className="profilePhoto">
              {!!image ? (
                <img
                  src={preview || image}
                  alt="profileImage"
                  className="profileImage"
                />
              ) : (
                <img
                  src="./images/profileImage.jpg"
                  alt="profileImage"
                  className="profileImage"
                />
              )}
            </div>
            <div className="profileName">Jodie</div>
            <div className="authorityStatus">
              認證狀態 : 買家
            </div>
            {isEdit ? (
              <>
                <div className="btns">
                  <button
                    className="btnComplete fw-bold"
                    onClick={() => {
                      setIsEdit(false);
                      updateProfile();
                    }}
                  >
                    完成修改
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="btns">
                  <button
                    className="btnComplete fw-bold"
                    onClick={() => {
                      setIsEdit(true);
                    }}
                  >
                    修改
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Profile;
