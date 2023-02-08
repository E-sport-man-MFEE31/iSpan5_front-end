import React from "react";
// import Header from "../header/Header";
import Cart from "./cart/Cart";
// import Cart2 from "./cart2/Cart2"
// import Cart3 from "./cart3/Cart3"
// import BankTransfer from "./bankTransfer/BankTransfer"
// import Footer from "../footer/Footer";

// route
import { Link } from "react-router-dom";

import "./checkout.css";

function Checkout() {
  return (
    <>
      <Cart />
      <Link to="/cart2"></Link>
      <Link to="/cart3"></Link>
    </>
  );
}

export default Checkout;
