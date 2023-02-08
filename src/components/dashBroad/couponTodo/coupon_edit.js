import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import axios from "axios";

function CouponEdit({
  id,
  coupon_code,
  limited,
  price,
  start_time,
  inputLimit,
  setInputLimit,
  inputPrice,
  setInputPrice,
  inputEnd,
  setInputEnd,
  btnEditing,
  setContent,
  setTotalPage,
}) {
  async function refreshPage() {
    let response = await axios.get(
      `http://localhost:8080/api/couponSeller`
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
  }
  // 修改
  async function handleChange(e) {
    // e.preventDefault();
    let response = await axios.post(
      `http://localhost:8080/api/couponChange/${id}`,
      {
        inputLimit,
        inputPrice,
        inputEnd,
        id,
      }
    );
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener(
          "mouseenter",
          Swal.stopTimer
        );
        toast.addEventListener(
          "mouseleave",
          Swal.resumeTimer
        );
      },
    });

    Toast.fire({
      icon: "success",
      title: "修改優惠券成功",
    });
  }
  return (
    <>
      <tr>
        <td>{coupon_code}</td>
        <td>
          滿{limited}折{price}
        </td>
        <td>
          <input
            placeholder={inputLimit}
            className="changeInput"
            type="text"
            value={inputLimit}
            onChange={(e) => {
              setInputLimit(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setInputLimit(e.target.value);
              }
            }}
          />
        </td>
        <td>
          <input
            placeholder={inputPrice}
            className="changeInput"
            type="text"
            value={inputPrice}
            onChange={(e) => {
              setInputPrice(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setInputPrice(e.target.value);
              }
            }}
          />
        </td>
        <td>{start_time}</td>
        <td>
          <input
            placeholder={inputEnd}
            type="date"
            value={inputEnd}
            onChange={(e) => {
              setInputEnd(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setInputEnd(e.target.value);
              }
            }}
          />
        </td>
        <td>
          <Button
            className="btn btn-warning fw-bold"
            onClick={() => {
              handleChange();
              btnEditing();
              // updateTodo(id, inputLimit, inputPrice, inputEnd);
              refreshPage();
              setInputLimit("");
              setInputPrice("");
              setInputEnd("");
            }}
          >
            完成
          </Button>
        </td>
      </tr>
    </>
  );
}
export default CouponEdit;
