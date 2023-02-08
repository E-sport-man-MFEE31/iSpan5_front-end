import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./couponSeller.scss";
import CouponEdit from "./coupon_edit";
import CouponAdd from "./coupon_add";

function CouponSeller() {
  //資料的狀態
  const [content, setContent] = useState([]);
  //button切換的狀態
  const [show, setShow] = useState(false);
  //初始化spinner的狀態
  const [isLoading, setIsLoading] = useState(false);
  //分頁的狀態
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [totalData, setTotalData] = useState(0);

  //彈跳視窗的開關
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getContent() {
    let response = await axios.get(
      `http://localhost:8080/api/couponSeller?page=${page}`
    );
    let result = response.data.data;
    const moment = require("moment");
    result.map((v) => {
      v.start_time = moment(v.start_time)
        .utcOffset(8)
        .format("YYYY-MM-DD");
      v.end_time = moment(v.end_time)
        .utcOffset(8)
        .format("YYYY-MM-DD");
      return v;
    });
    setContent(result);
    setTotalPage(response.data.pagination.totalPage);
    setTotalData(response.data.pagination.total);
  }

  //顯示資料的地方
  useEffect(() => {
    setIsLoading(true);
    getContent();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [page]);

  //分頁的功能
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
            border: "1px solid",
            borderColor:
              page === i ? "#FB570B" : "transparent",
            backgroundColor:
              page === i ? "#FB570B" : "transparent",
            borderRadius: "50%",
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

  const [inputId, setInputId] = useState("");
  const [inputCoupon, setInputCoupon] = useState("");
  const [inputLimit, setInputLimit] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputStart, setInputStart] = useState("");
  const [inputEnd, setInputEnd] = useState("");

  const [edit, setEdit] = useState(true);
  const btnEditing = () => {
    setEdit(!edit);
  };

  const spinner = (
    <>
      <div
        className="spinner-grow text-danger"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow text-warning"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow text-secondary"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  );

  const display = (
    <>
      <div className="d-flex justify-content-between">
        <Button
          className="btn btnAddCoupon"
          onClick={handleShow}
        >
          新增折扣碼
        </Button>

        <div className="fw-bold">
          {edit ? (
            <>
              <h3>
                您總共有&nbsp;{totalData}&nbsp;張優惠券
              </h3>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      <CouponAdd
        inputId={inputId}
        inputCoupon={inputCoupon}
        inputLimit={inputLimit}
        inputPrice={inputPrice}
        inputStart={inputStart}
        inputEnd={inputEnd}
        setContent={setContent}
        content={content}
        handleClose={handleClose}
        show={show}
        setInputCoupon={setInputCoupon}
        setInputLimit={setInputLimit}
        setInputPrice={setInputPrice}
        setInputStart={setInputStart}
        setInputEnd={setInputEnd}
      />

      <table>
        <thead>
          <tr>
            <th>折扣碼</th>
            <th>折扣方式</th>
            <th>最低消費金額</th>
            <th>折扣金額</th>
            <th>開始日期</th>
            <th>結束日期</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {content.map((v, i) => {
            const {
              id,
              price,
              limited,
              coupon_code,
              start_time,
              end_time,
            } = v;
            return edit ? (
              <tr key={id}>
                <td>{coupon_code}</td>
                <td>
                  滿${limited}折${price}
                </td>
                <td>${limited}</td>
                <td>${price}</td>
                <td>{start_time}</td>
                <td>{end_time}</td>
                <td>
                  <Button
                    className="btn btn-warning fw-bold"
                    onClick={(data, index) => {
                      let new_content = content.filter(
                        (data, index) => {
                          return data.id === id;
                        }
                      );
                      setContent(new_content);
                      btnEditing();
                    }}
                  >
                    修改
                  </Button>
                </td>
              </tr>
            ) : (
              <CouponEdit
                id={id}
                coupon_code={coupon_code}
                limited={limited}
                price={price}
                start_time={start_time}
                inputLimit={inputLimit}
                setInputLimit={setInputLimit}
                inputPrice={inputPrice}
                setInputPrice={setInputPrice}
                inputEnd={inputEnd}
                setInputEnd={setInputEnd}
                btnEditing={btnEditing}
                setContent={setContent}
                setTotalPage={setTotalPage}
              />
            );
          })}
        </tbody>
      </table>
      {edit ? (
        <>
          <ul className="paginationUl ">{getPages()}</ul>
        </>
      ) : (
        <></>
      )}
    </>
  );

  return (
    <>
      <div>{isLoading ? spinner : display}</div>
    </>
  );
}
export default CouponSeller;
