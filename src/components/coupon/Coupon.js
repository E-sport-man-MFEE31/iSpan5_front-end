import "./coupon.scss";
import FunctionToggle from "../reUseable/SideBar";
import CouponPath from "./CouponPath";
import CouponUnExpired from "./CouponUnexpired";
import { AiOutlineShopping } from "react-icons/ai";
import BasicPagination from "./Pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import CouponExpired from "./CouponExpired";

function Coupon() {
  const [unExpired, setUnExpired] = useState([]);
  const [isExpired, setIsExpired] = useState([]);

  // 過期

  useEffect(() => {
    async function getContent() {
      let response = await axios.get(
        "http://localhost:8080/api/coupon"
      );
      let isExpired = response.data.filter(
        (v) => new Date(v.end_time) < new Date()
      );
      setIsExpired(isExpired);
      let unExpired = response.data.filter(
        (v) => new Date(v.end_time) >= new Date()
      );
      setUnExpired(unExpired);
    }
    getContent();
  }, []);

  return (
    <>
      <div className="position-absolute detailPath d-flex">
        <CouponPath />
      </div>
      <div className="title p-5 mb-5">
        <div className="titleContent">
          <h2 className=" fw-bold titleFirst">優</h2>
          <h2 className=" fw-bold">惠券</h2>
        </div>
      </div>
      <div className="tableFrame d-flex">
        <div className="tableLeft">
          <FunctionToggle />
        </div>
        <div className="tableRight">
          <div className="unExpired">
            <div className="unExpiredWord">
              未過期 / 可使用
            </div>
          </div>
          <div className="unExpiredCoupon">
            <CouponUnExpired content={unExpired} />
          </div>
          <div className="expired">
            <div className="expiredWord">
              已過期 / 不可使用
            </div>
          </div>
          <div className="expiredCoupon">
            <CouponExpired content={isExpired} />
          </div>
          <div className="d-flex justify-content-end">
            <BasicPagination />
          </div>
        </div>
      </div>
    </>
  );
}
export default Coupon;
