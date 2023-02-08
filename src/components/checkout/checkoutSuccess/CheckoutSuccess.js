import { useState } from "react"
import { Button, Result } from "antd";

import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import CartNull from "../cartNull/CartNull";

const App = () => (
  <Result
    status="success"
    title="訂單已成立"
    subTitle={`Order number: 202301160221332 Cloud server configuration takes 1-5 minutes, please wait.`}
    extra={[
      <Button
        type="primary"
        style={{
          backgroundColor: "#FB570B",
        }}
      >
        返回首頁
      </Button>,
    ]}
  />
);

function CheckoutSuccess() {

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

  return (
    <>
      <Header />
      <App />
      <Footer />
    </>
  );
}

export default CheckoutSuccess;
