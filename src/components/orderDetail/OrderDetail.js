import FunctionToggle from "../reUseable/SideBar";
import OrderPrice from "./OrderPrice";
import DetailTable from "./detail/DetailTable";
import OrderCoupon from "./OrderCoupon";
import OrderInfo from "./OrderInfo";
import OrderComment from "./OrderComment";
import DetailPath from "./detail/DetailPath";
import DetailNumber from "./detail/DetailNumber";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./orderDetail.scss";

function OrderDetail() {
  const [content, setContent] = useState([]);

  const { user_id, orId } = useParams();

  const getContent = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/${user_id}/orders/${orId}`
    );
    setContent(response.data);
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <>
      <div className="position-absolute detailPath d-flex">
        <DetailPath />
      </div>
      <div className="title p-5 mb-5">
        <div className="d-flex mb-5 justify-content-center">
          <h2 className=" fw-bold titleFirst">訂</h2>
          <h2 className=" fw-bold">單詳細</h2>
        </div>
        <div>
          <DetailNumber content={content} />
        </div>
      </div>
      <div className="tableFrame d-flex">
        <div className="tableLeft">
          <FunctionToggle />
        </div>
        <div className="tableRight">
          <DetailTable content={content} />
          <div className="Coupon">
            <OrderCoupon />
          </div>
          <div className="subtotal pb-5">
            <OrderPrice content={content} />
          </div>
          <div className="underBox">
            <OrderInfo content={content} />
          </div>
          <div className="comments">
            <OrderComment />
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderDetail;
