import FunctionToggle from "../reUseable/SideBar";
import DetailTable from "./detail/DetailTable";
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
      <div className="tableFrames">
        <div className="tableLeft">
          <FunctionToggle />
        </div>
        <div className="tableRight">
          {content.map((v, i) => {
            const {
              orId,
              company_name,
              product_name,
              price,
              amount,
              payment_price,
              delivery_fee,
            } = v;
            return (
              <DetailTable
                content={content}
                orId={orId}
                company_name={company_name}
                product_name={product_name}
                price={price}
                amount={amount}
                payment_price={payment_price}
                delivery_fee={delivery_fee}
              />
            );
          })}
          <div className="underBox">
            {content.map((v, i) => {
              const {
                orId,
                recip_email,
                date,
                name,
                phone,
                type_name,
                dStatus,
                deliWay,
                recip_name,
                recip_phone,
                recip_address,
                orderStatus,
              } = v;
              return (
                <OrderInfo
                  orId={orId}
                  recip_email={recip_email}
                  date={date}
                  name={name}
                  phone={phone}
                  type_name={type_name}
                  dStatus={dStatus}
                  deliWay={deliWay}
                  recip_name={recip_name}
                  recip_phone={recip_phone}
                  recip_address={recip_address}
                  orderStatus={orderStatus}
                />
              );
            })}
          </div>
          <div className="comments">
            {content.map((v, i) => {
              const {
                company_name,
                product_id,
                orId,
                sellers_id,
                user_id,
              } = v;
              return (
                <OrderComment
                  company_name={company_name}
                  content={content}
                  orId={orId}
                  product_id={product_id}
                  sellers_id={sellers_id}
                  user_id={user_id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderDetail;
