import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

import CartTable from "./cartTable/CartTable";
import CartInfo2 from "./cartInfo2/CartInfo2";
import CartInfo3 from "./cartInfo3/CartInfo3";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import Step from "../step/Step";
import CartNull from "../cartNull/CartNull";

import "./Cart2.css";
import { useData } from "../../../utils/useData";

function CartTwo() {
  
  const { ShippingWays } = useData();
  const [cart, setCart] = useState(
    window.localStorage.getItem("cart") !== null ? JSON.parse(window.localStorage.getItem("cart")) : []
  );

  if (
    window.localStorage.getItem("cart") === null ||
    cart.length === 0
  ) {
    return (
      <>
        <CartNull />
      </>
    );
  }

  async function handleSubmit(e) {
    console.log("handleSubmit");
    e.preventDefault();
    let response = await axios.post(
      "http://localhost:8080/api/cart/order_list",
      {
        ShippingWays,
      }
    );
    console.log(response.data);
  }

  return (
    <>
      <Header />
      <div className="cart-two">
        <div className="content">
          <Step />
          {/* part1 */}
          <CartTable />
          {/* part2 */}
          <CartInfo2 />
          {/* part3 */}
          <CartInfo3 />
        </div>

        <div className="CartSubmit d-flex justify-content-between">
          <Link
            to="/cart"
            className="back text-dark fw-border text-decoration-none"
          >
            <AiOutlineArrowLeft />
            返回購物車
          </Link>
          <Link to="/cart3" className="btn btn-secondary text-light">
              提交訂單
          </Link>
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CartTwo;
