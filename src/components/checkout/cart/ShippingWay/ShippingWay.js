import React, { useState, useEffect } from "react";
import { Button, Select } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

import ShipBoard from "./ShipBoard";
import ShipTW from "./ShipTW";
import { useData } from "../../../../utils/useData";

function ShippingWay({ cart, cartTotal }) {
  // 選擇送貨及付款方式
  const { ShippingWays, setShippingWays } = useData();
  // 優惠折扣
  const { coupon, setCoupon } = useData();

  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    async function getCart() {
      let response = await axios.get(
        "http://localhost:8080/api/payment_type"
      );
      setPaymentData(response.data);
      console.log(response.data);
    }
    getCart();
  }, []);

  const handleCoupon = (value) => {
    setCoupon({ ...coupon, couponValue: value });
  };

  const handleDeliverySelect = (e) => {
    setShippingWays({ ...ShippingWays, location: e });
  };

  const handlePaymentSelect = (e) => {
    setShippingWays({
      ...ShippingWays,
      payment: e,
      overseaShip: "請選擇",
      overseaPayment: "請選擇",
    });
  };

  const handleSelect = (e) => {
    setShippingWays({
      ...ShippingWays,
      ship: e,
      overseaShip: "請選擇",
      overseaPayment: "請選擇",
    });
  };

  const handleOverseaSelect = (e) => {
    setShippingWays({
      ...ShippingWays,
      overseaShip: e,
      ship: "請選擇",
      payment: "請選擇",
    });
  };

  const handlePaymentOverseaSelect = (e) => {
    setShippingWays({
      ...ShippingWays,
      overseaPayment: e,
      ship: "請選擇",
      payment: "請選擇",
    });
  };

  return (
    <>
      <div className="shipping-way mb-5">
        <div className="left-bottom ">
          <div className="content-info m-3">
            <div className="title fw-bolder h5 mb-0">
              選擇送貨及付款方式
            </div>
            <ShipBoard
              oversea={ShippingWays.overseaShip}
              paymentOversea={ShippingWays.overseaPayment}
              handleOverseaSelect={handleOverseaSelect}
              handlePaymentOverseaSelect={
                handlePaymentOverseaSelect
              }
            />
            <ShipTW
              island={ShippingWays.ship}
              payment={ShippingWays.payment}
              handleIslandSelect={handleSelect}
              handlePaymentSelect={handlePaymentSelect}
            />
            <p>送貨地點</p>
            <Select
              defaultValue="0"
              placeholder="Search to Select"
              style={{
                width: "100%",
              }}
              onChange={handleDeliverySelect}
              value={ShippingWays.location}
              options={[
                {
                  value: "TW",
                  label: "台灣",
                },
                {
                  value: "CN",
                  label: "中國",
                },
                {
                  value: "JP",
                  label: "日本",
                },
                {
                  value: "SG",
                  label: "新加玻",
                },
                {
                  value: "HK",
                  label: "香港",
                },
              ]}
            />
          </div>
        </div>
        <div className="right-bottom ">
          <div className="title fw-bolder h5 mb-0 px-5">
            付款資訊
          </div>
          <div className="content-info p-3">
            <div class="subtotal mb-2">
              <tr>
                <td className="w-100">
                  <div class="d-flex flex-column text-start">
                    <p>小計:</p>
                    <p>運費 :</p>
                  </div>
                </td>
                <td>
                  <div class="d-flex flex-column text-end">
                    <p> NT${cartTotal}</p>
                    <p>NT$100</p>
                  </div>
                </td>
              </tr>
            </div>
            <div class="cart-coupon mb-0">
              <p>優惠券折扣：</p>
              <Select
                defaultValue="0"
                placeholder="Search to Select"
                style={{
                  width: 430,
                }}
                onChange={handleCoupon}
                value={ShippingWays.couponValue}
                options={[
                  {
                    value: "100",
                    label: "滿1000折100",
                  },
                  {
                    value: "200",
                    label: "滿2000折200",
                  },
                ]}
              />
            </div>
            <hr />
            <div class="total mb-2">
              <tr>
                <td className="w-100">
                  <div class="d-flex flex-column text-start">
                    <p>合計：</p>
                  </div>
                </td>
                <td>
                  <div class="d-flex flex-column text-end">
                    <p>
                      NT$
                      {Number(cartTotal) + Number(100)}
                    </p>
                  </div>
                </td>
              </tr>
            </div>
            <Link to="/cart2">
              <Button className="btn btn-primary text-light">
                前往結帳
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingWay;
