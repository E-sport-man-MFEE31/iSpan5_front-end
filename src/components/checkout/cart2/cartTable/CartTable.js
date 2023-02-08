import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { FcExpand } from "react-icons/fc";

function CartTable() {
  const [toggleForm, setToggleForm] = useState(false);
  const [cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem("cart"))
  );
  const [cart_total, setCart_Total] = useState(0);

  useEffect(() => {
    let total = cart.reduce((acc, cur) => {
      return acc + Number(cur.price) * Number(cur.amount);
    }, 0);
    setCart_Total(total);
  }, [cart]);

  const handleForm = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <>
      <Table className="border">
        <thead>
          <tr className="bg-secondary">
            <th
              colSpan={5}
              className="text-center text-dark fw-bolder h3"
            >
              <p style={{ fontWeight: "700" }}>
                合計：NT${cart_total}
              </p>
              <p>購物車</p>
              <FcExpand onClick={handleForm} />
            </th>
          </tr>
          {toggleForm ? (
            <tr className="text-center">
              <th>商品資料</th>
              <th>單價</th>
              <th>數量</th>
              <th>小計</th>
            </tr>
          ) : (
            <></>
          )}
        </thead>
        {toggleForm ? (
          <tbody className="">
            {cart.map((v, i) => (
              <tr key={v.id}>
                <td className="text-left">
                  {/* <img
                    src={v.picture}
                    alt=""
                    className="w-25"
                  /> */}
                  {v.name}
                </td>
                <td className="text-center">
                  NT${v.price}
                </td>
                <td className="text-center">{v.amount}</td>
                <td className="text-center">
                  NT${Number(v.price) * Number(v.amount)}
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div className="d-flex flex-column text-start">
                  <p>小計:</p>
                  <p>運費 :</p>
                  <p>優惠代碼折扣 :</p>
                  <p>合計 :</p>
                </div>
              </td>
              <td>
                <div className="d-flex flex-column text-end">
                  <p>NT${cart_total}</p>
                  <p>NT$100</p>
                  <p>NT$0</p>
                  <p>NT${Number(cart_total) + 100}</p>
                </div>
              </td>
            </tr>
          </tbody>
        ) : (
          <></>
        )}
      </Table>
    </>
  );
}

export default CartTable;
