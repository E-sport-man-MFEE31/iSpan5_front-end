import * as React from "react";
import TextField from "@mui/material/TextField";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function FullWidthTextField() {
  return (
    <TextField
      fullWidth
      label="有什麼想告訴賣家嗎?"
      id="fullWidth"
    />
  );
}
function OrderComment() {
  return (
    <>
      <div className="d-flex">
        <h3 className="commentsTitle">給 賣家 評價</h3>
        <div className="stars">
          <AiFillStar className="star" />
          <AiFillStar className="star" />
          <AiFillStar className="star" />
          <AiFillStar className="star" />
          <AiOutlineStar className="star" />
        </div>

        <h3 className="commentsTitle"> 4 / 5 分</h3>
      </div>
      <div className="textField">
        <FullWidthTextField />
      </div>
      <div className="pt-3 ps-3">
        <button className="btnSubmit">送出</button>
      </div>
    </>
  );
}
export default OrderComment;
