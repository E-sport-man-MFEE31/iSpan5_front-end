import React from "react";
import { Select } from "antd";

function ShipTW({
  island,
  payment,
  handleIslandSelect,
  handlePaymentSelect,
}) {
  return (
    <>
      <p>送貨方式</p>
      <Select
        defaultValue="0"
        placeholder="Search to Select"
        style={{
          width: "100%",
        }}
        onChange={handleIslandSelect}
        value={island}
        options={[
          {
            value: "7-11取貨不付款",
            label: "7-11取貨不付款",
          },
          {
            value: "離島郵寄",
            label:
              "離島郵寄(須先付款，澎湖/金門/馬祖/蘭嶼/綠島/琉球各離島地區)",
          },
          {
            value: "本島宅配到府",
            label: "本島宅配到府(須先付款)",
          },
        ]}
      />
      <p>付款方式</p>
      <Select
        defaultValue="0"
        placeholder="Search to Select"
        style={{
          width: "100%",
        }}
        onChange={handlePaymentSelect}
        value={payment}
        options={[
          {
            value: "ATM轉帳",
            label: "ATM轉帳",
          },
          {
            value: "貨到付款",
            label: "貨到付款",
          },
          {
            value: "Line Pay",
            label: "Line Pay",
          },
          {
            value: "信用卡(綠界科技)",
            label: "信用卡(綠界科技)",
          },
        ]}
      />
    </>
  );
}

export default ShipTW;
