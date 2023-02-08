import React, { useState, useEffect } from "react";
import { Button, DatePicker, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import InputArea from "../cart2/cartInfo3/InputArea";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import CartNull from "../cartNull/CartNull";

import "./BankTransfer.css";

function BankTransfer() {

  const [cart, setCart] = useState(
    window.localStorage.getItem("cart") !== null ? JSON.parse(window.localStorage.getItem("cart")) : []
  );

  const [cart_total, setCart_Total] = useState(0);

  useEffect(() => {
    let total = cart.reduce((acc, cur) => {
      return acc + Number(cur.price) * Number(cur.amount);
    }, 0);
    setCart_Total(total);
  }, [cart]);

  if (
    window.localStorage.getItem("cart") === null ||
    cart.length === 0
  ) {
    return (
      <>
        <CartNull />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="bank-transfer border text-center">
        <div className="top-transfer d-flex flex-row justify-content-center mb-5">
          <div className="left-transfer d-flex flex-column justify-content-center">
            <div className="order-price bg-warning mb-5 text-nowrap">
              <h2 className="fw-bolder p-4 m-0 ">
                訂單金額 NT${cart_total}
              </h2>
            </div>
            <div className="payment-method mb-5">
              <h3 className="fw-bolder">付款方式</h3>
              <h5>銀行轉帳/ATM</h5>
            </div>
            <div className="payment-info mb-5">
              <h3 className="fw-bolder">付款說明</h3>
              <h5>
                戶名：電競人股份有限公司
                <br />
                中國信託銀行敦南分行(822)
                <br />
                帳號：111-222-444866
              </h5>
            </div>
          </div>
          <div className="line me-5"></div>
          <div className="right-transfer d-flex flex-column justify-content-center">
            <h3 className="fw-bolder">
              完成轉帳後，請上傳轉帳明細
            </h3>
            <Button
              type="primary"
              icon={
                <UploadOutlined className="fs-2 mb-2" />
              }
              className="bg-dark p-4 mb-3"
            >
              <h5 className="fw-bold">
                上傳明細
                <br />
                請確認圖片清晰，並包含帳號後五碼、轉帳時間、轉帳金額
              </h5>
            </Button>
            <h5>轉帳時間</h5>
            <Space
              direction="vertical"
              className="transfer-time"
            >
              <DatePicker
                onChange={() => {}}
                className="date"
              />
              <InputArea placeholder="填寫付款備住" />
              <Button
                type="primary"
                className="send bg-secondary  py-2"
              >
                <h5 className=" fw-bold m-0">
                  發送明細給賣家
                </h5>
              </Button>
            </Space>
          </div>
        </div>
        <div className="buttom-transfer">
          <h5 className="fw-bolder text-black-50">
            您填寫的付款資訊僅用於訂單對帳並經過加密技術，敬請安心付款。
          </h5>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BankTransfer;
