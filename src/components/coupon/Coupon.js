import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import FunctionToggle from "../reUseable/SideBar";
import CouponPath from "./CouponPath";
import CouponUnexpired from "./CouponUnexpired";

import "./coupon.scss";

const Coupon = () => {
  const [content, setContent] = useState([]);

  // 製作分頁
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [total, setTotal] = useState(0);

  // 使用規則 -> OffCanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    async function getContent() {
      let response = await axios.get(
        `http://localhost:8080/api/coupon?page=${page}`
      );
      let result = response.data.data;
      const moment = require("moment");
      result.map((v) => {
        v.end_time = moment(v.end_time)
          .utcOffset(8)
          .format("YYYY-MM-DD");
        return v;
      });
      setTotalPage(response.data.pagination.totalPage);
      setTotal(response.data.pagination.total);
      // let isExpired = result.filter(
      //   (v) => new Date(v.end_time) < new Date()
      // );
      // setIsExpired(isExpired);

      // let isNotExpired = result.filter(
      //   (v) => new Date(v.end_time) >= new Date()
      // );
      setContent(result);
    }
    getContent();
  }, [page]);

  // 分頁的功能
  const getPages = () => {
    let pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <li
          className="paginationLi"
          key={i}
          style={{
            fontWeight: "bold",
            padding: "13px 20px",
            color: page === i ? "#FB570B" : "transparent",
          }}
          onClick={(e) => {
            setPage(i);
          }}
        >
          {i}
        </li>
      );
    }
    return pages;
  };

  return (
    <>
      <div className="position-absolute detailPath d-flex">
        <CouponPath />
      </div>
      <div className="titleCoupon p-5 mb-5">
        <div className="titleContent">
          <h2 className=" fw-bold titleFirst">優</h2>
          <h2 className=" fw-bold">惠券</h2>
        </div>
      </div>
      <div className="tableFrame">
        <div className="tableLeft">
          <FunctionToggle />
        </div>
        <div className="tableRight">
          <div className="unExpired">
            <div className="unExpiredWord">
              您目前有&nbsp;{total}&nbsp;張優惠券
            </div>
            <Button
              variant="primary"
              onClick={handleShow}
              className="me-2 couponRules"
            >
              優惠券使用規則
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="rules">
                  優惠券使用規則
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                優惠券使用規則的文案
              </Offcanvas.Body>
            </Offcanvas>
          </div>
          <div className="unExpiredCoupon">
            <CouponUnexpired content={content} />
          </div>
          <ul className="paginationUl">{getPages()}</ul>
        </div>
      </div>
    </>
  );
};
export default Coupon;
