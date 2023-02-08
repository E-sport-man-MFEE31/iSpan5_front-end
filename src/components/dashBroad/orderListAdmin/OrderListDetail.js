import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useParams } from "react-router-dom";

import OrderListChange from "./OrderListChange";

function OrderListDetail({ orId }) {
  const [content, setContent] = useState([]);
  const { sellerid } = useParams();

  // 查看詳細按鈕的功能
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 資料庫撈出來每一筆訂單的資料
  const getContent = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/orderSeller/${sellerid}/orders/${orId}`
    );
    setContent(response.data);
  };

  useEffect(() => {
    getContent();
  }, []);

  // 資料更新的功能
  const updateTodo = (id, name) => {
    const newContent = content.map((v, i) => {
      if (v.id === id) return { ...v, text: name };
      return { ...v };
    });
    setContent(newContent);
  };

  return (
    <>
      <Button className="buttonDetail" onClick={handleShow}>
        查看詳細
      </Button>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          {content.map((v, i) => {
            return (
              <Modal.Title>訂單編號:{v.orId}</Modal.Title>
            );
          })}
        </Modal.Header>
        <Modal.Body>
          <div className="custoInfo mb-5">
            {content.map((v, i) => {
              return (
                <h2 key={v.orId}>來自{v.name}的訂單</h2>
              );
            })}
          </div>
          <table>
            <thead>
              <tr>
                <th>商品資料</th>
                <th>顏色</th>
                <th>單件價格</th>
                <th>數量</th>
                <th>小計</th>
              </tr>
            </thead>
            <tbody>
              {content.map((v, i) => {
                const {
                  orId,
                  product_name,
                  price,
                  amount,
                } = v;
                return (
                  <tr
                    key={orId}
                    product_name={product_name}
                    price={price}
                    amount={amount}
                  >
                    <td className="productInfo">
                      <div className="d-flex">
                        <div className="d-flex align-items-center imageFrame">
                          <img
                            className="computerImage mx-2"
                            src="./images/testComputer.jpg"
                            alt=""
                          />
                        </div>
                        <div className="imageWords d-flex align-items-center">
                          <p className="pt-3">
                            {product_name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>黑色Black:資料庫無此欄位</td>
                    <td>{price}</td>
                    <td>{amount}</td>
                    <td>{price * amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="Coupon">
            <div className="fw-bold py-3 ms-2 mt-3">
              已使用過的優惠券
            </div>
            <div className="d-flex my-3">
              <div className="couponSticker ms-2 mb-3">
                購物狂歡節
              </div>
              <div className="d-flex align-items-center mx-3">
                <p>1212雙12大優惠，任選三件折100</p>
              </div>
            </div>
          </div>

          <div className="subtotal">
            <ul>
              {content.map((v, i) => {
                return (
                  <li key={v.orId}>
                    <div>小計:</div>
                    <div>
                      NT${parseInt(v.payment_price)}
                    </div>
                  </li>
                );
              })}
              {content.map((v, i) => {
                return (
                  <li key={v.orId}>
                    <div>運費:</div>
                    <div>NT${v.delivery_fee}</div>
                  </li>
                );
              })}
              <li>
                <div>優惠代碼折扣:</div>
                <div>- NT$100</div>
              </li>
              {content.map((v, i) => {
                return (
                  <li key={v.orId}>
                    <div>合計:</div>
                    <div>
                      NT$
                      {parseInt(v.payment_price) +
                        parseInt(v.delivery_fee) -
                        100}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="underBox">
            <div className="FirstBox d-flex">
              <div className="boxes">
                <h3 className="py-3 mt-3">訂單資訊</h3>
                {content.map((v, i) => {
                  return (
                    <p>
                      訂單號碼 : {v.orId}
                      <br />
                      訂單電郵 : {v.user_email}
                      <br />
                      訂單日期 : {v.date}
                      <br />
                      訂單狀態 : 沒有這個表格
                      <br />
                    </p>
                  );
                })}
              </div>
              <div className="boxes">
                <h3 className="py-3 mt-3">顧客資訊</h3>
                {content.map((v, i) => {
                  return (
                    <p>
                      名稱 : {v.name}
                      <br />
                      電話號碼 : {v.user_phone}
                      <br />
                      生日日期 : 沒有這個表格
                      <br />
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="SecondBox d-flex">
              <OrderListChange
                content={content}
                updateTodo={updateTodo}
              />
              <div className="boxes">
                <h3 className="py-3 mt-3">付款資訊</h3>
                {content.map((v, i) => {
                  return (
                    <p>
                      付款方式 : {v.type_name}
                      <br />
                      付款狀態 : 沒有此表格
                      <br />
                      付款指示 :
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;戶名
                      : 電競人股份有限公司
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中國信託銀行敦南分行
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;帳號
                      : 111-222-444866 ATM : 822
                      <br />
                      發票狀態 : 沒有此表格
                      <br />
                      發票申請類型 : 雲端發票(沒有此表格)
                      <br />
                      發票載去類型 : 會員載具
                      (admin@test.com) 沒有此表格
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="btnGroup d-flex">
            {/* <Button onClick={btnEditing}>編輯</Button> */}
            {/* <Button variant="secondary">完成</Button> */}
            <Button variant="primary" onClick={handleClose}>
              關閉
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrderListDetail;
