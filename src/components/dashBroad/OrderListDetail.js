import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useParams } from "react-router-dom";

import OrderListChange from "./orderListTodo/OrderListChange";

function OrlistDetail({ orId }) {
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
  const updateTodo = (
    id,
    recip_name,
    recip_phone,
    recip_address
  ) => {
    const newContent = content.map((v, i) => {
      console.info(
        "編輯前data",
        v.recip_name,
        v.recip_phone,
        v.recip_address
      );
      if (v.id === id) {
        let name =
          recip_name !== "" ? recip_name : v.recip_name;
        let phone =
          recip_phone !== "" ? recip_phone : v.recip_phone;
        let address =
          recip_address !== ""
            ? recip_address
            : v.recip_address;
        console.info("編輯後data", name, phone, address);
        return {
          ...v,
          recip_name: name,
          recip_phone: phone,
          recip_address: address,
        };
      }
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
              <Modal.Title key={i}>
                訂單編號:{v.orId}
              </Modal.Title>
            );
          })}
        </Modal.Header>
        <Modal.Body>
          {content.map((v, i) => {
            const {
              orId,
              name,
              product_name,
              price,
              amount,
            } = v;
            return (
              <div>
                <div className="custoInfo mb-5">
                  <h2 key={orId}>來自{name}的訂單</h2>;
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>商品資料</th>
                      <th>單件價格</th>
                      <th>數量</th>
                      <th>小計</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="productInfo">
                        <div className="d-flex">
                          <div className="d-flex align-items-center imageFrame">
                            <img
                              className="computerImage mx-2"
                              src=""
                              alt="./images/testComputer.jpg"
                            />
                          </div>
                          <div className="imageWords d-flex align-items-center">
                            <p className="pt-3">
                              {product_name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>{price}</td>
                      <td>{amount}</td>
                      <td>{price * amount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}

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
            {content.map((v, i) => {
              const { orId, payment_price, delivery_fee } =
                v;
              return (
                <ul>
                  <li key={orId}>
                    <div>小計:</div>
                    <div>NT${parseInt(payment_price)}</div>
                  </li>
                  <li key={orId}>
                    <div>運費:</div>
                    <div>NT${delivery_fee}</div>
                  </li>
                  <li>
                    <div>優惠代碼折扣:</div>
                    <div>- NT$100</div>
                  </li>
                  <li key={orId}>
                    <div>合計:</div>
                    <div>
                      NT$
                      {parseInt(payment_price) +
                        parseInt(delivery_fee) -
                        100}
                    </div>
                  </li>
                </ul>
              );
            })}
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
                      訂單電郵 : {v.recip_email}
                      <br />
                      訂單日期 : {v.date}
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
                      電話號碼 : {v.phone}
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
                      付款狀態 : {v.orderStatus}
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
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
              }}
            >
              關閉
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrlistDetail;
