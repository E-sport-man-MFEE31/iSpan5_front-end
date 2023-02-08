import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { Button, Input, Select } from "antd";
import { useData } from "../../../../utils/useData";

function CartInfo2() {
  const { values, setValues } = useData();
  // 取貨者資料是否相同
  const handleReceiver = (e) => {
    if (e.target.checked) {
      setValues({ name: "joe", phone: "091111111" });
    }
  };
  // 門市選擇
  const { store, setStore } = useData();
  const handleStoreChoose = (value) => {
    // eslint-disable-next-line default-case
    switch (value) {
      case "海神":
        setStore({
          ...store,
          storeName: value,
          storeAddress: "新北市八里區中山路二段6號8號",
        });
        break;
      case "千禧":
        setStore({
          ...store,
          storeName: value,
          storeAddress: "桃園市龜山區光峰路千禧新城15號1樓",
        });
        break;
      case "福冠":
        setStore({
          ...store,
          storeName: value,
          storeAddress: "桃園市中壢區福州一街242號1樓及2樓",
        });
        break;
      case "台達電":
        setStore({
          ...store,
          storeName: value,
          storeAddress: "桃園市龜山區山鶯路252號B1樓",
        });
        break;
    }
  };
  const [toggle, setToggle] = useState(true);
  const handleStore = () => {
    setToggle(!toggle);
  };

  // 送貨格式切換
  const { ShippingWays } = useData();

  const Ship711 = (
    <>
      <hr />
      <p>選擇7-11超商門市</p>
      {toggle ? (
        <Row>
          <Col sm={8}>
            <Select
              defaultValue="海神"
              style={{
                width: 200,
              }}
              onChange={handleStoreChoose}
              value={store.storeName}
              options={[
                {
                  value: "海神",
                },
                {
                  value: "千禧",
                },
                {
                  value: "福冠",
                },
                {
                  value: "台達電",
                },
              ]}
            />
          </Col>
          <Col>
            <Button
              type="primary"
              style={{
                backgroundColor: "black",
              }}
              onClick={handleStore}
            >
              選擇門市
            </Button>
          </Col>
        </Row>
      ) : (
        <div>
          <p>已選擇的門市名稱：{store.storeName}</p>
          <p>門市地址：{store.storeAddress}</p>
          <Button
            type="primary"
            style={{
              backgroundColor: "black",
            }}
            className="w-100"
            onClick={handleStore}
          >
            更改
          </Button>
        </div>
      )}
    </>
  );

  const ShipOther = (
    <>
      <p className="mb-1">收件人地址</p>
      <Input
        className="mb-3"
        placeholder="請輸入收件人地址"
        value={values.address}
        onChange={(e) => {
          setValues({ ...values, address: e.target.value });
        }}
      ></Input>
    </>
  );

  return (
    <>
      <div className="info2 text-left">
        <div className="left">
          <div className="title fw-bolder h5 mb-0 w-100">
            買家資料
          </div>
          <div className="content-info ">
            <p>
              <span className="fw-bolder">買家名稱</span>
              <br />
              Jodie
            </p>
            <p>
              <span className="fw-bolder">電子信箱</span>
              <br />
              jodie@gmail.com
            </p>
            <p>
              <span className="fw-bolder">電話號碼</span>
              <br />
              0966666666
            </p>
          </div>
        </div>
        <div className="right">
          <div className="title fw-bolder h5 mb-0 w-100">
            送貨資料
          </div>
          <div className="content-info">
            <p value={ShippingWays.ship}>
              已選擇的送貨方式: {ShippingWays.ship}
            </p>
            <p>
              <input
                type="checkbox"
                value="info-correct"
                onChange={handleReceiver}
              />
              <span>收件人資料與顧客資料相同</span>
            </p>
            <p className="mb-1">收件人名稱</p>
            <Input
              className="mb-3"
              placeholder="請輸入收件人名稱"
              value={values.name}
              onChange={(e) => {
                setValues({
                  ...values,
                  name: e.target.value,
                });
              }}
            ></Input>
            <p className="mb-1">收件人電話</p>
            <Input
              className="mb-3"
              placeholder="請輸入收件人名稱"
              value={values.phone}
              onChange={(e) => {
                setValues({
                  ...values,
                  phone: e.target.value,
                });
              }}
            ></Input>

            {ShippingWays.ship === "7-11取貨不付款"
              ? Ship711
              : ShipOther}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartInfo2;
