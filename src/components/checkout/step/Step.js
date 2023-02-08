import React from "react";
import "./step.css";
import { useLocation } from "react-router-dom";

function Step() {
  const location = useLocation();

  return (
    <>
      <div className="step-groups">
        <div className="step-group">
          <div
            className={`number ${
              location.pathname.includes(`cart`) ||
              location.pathname.includes(`cart2`) ||
              location.pathname.includes(`cart3`)
                ? "active"
                : ""
            }`}
          >
            1
          </div>

          <div className="cart">購物車</div>
        </div>
        <div className="line"></div>
        <div className="step-group">
          <div
            className={`number ${
              location.pathname.includes(`cart2`) ||
              location.pathname.includes(`cart3`)
                ? "active"
                : ""
            }`}
          >
            2
          </div>
          <div className="cart">填寫資料</div>
        </div>
        <div className="line"></div>
        <div className="step-group">
          <div
            className={`number ${
              location.pathname.includes(`cart3`)
                ? "active"
                : ""
            }`}
          >
            3
          </div>
          <div className="cart">訂單確認</div>
        </div>
      </div>
    </>
  );
}

export default Step;
