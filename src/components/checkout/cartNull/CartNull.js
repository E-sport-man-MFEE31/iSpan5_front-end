import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Result } from "antd";
import Stack from "react-bootstrap/Stack";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

function ButtonsGroup() {
  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <Link to="/product" className="btn btn-secondary btn-outline-primary bg-primary text-light">
        繼續購物
      </Link>
      <Link to="/profile/orders" className="btn btn-light btn-outline-primary bg-light mb-5">
        我的訂單
      </Link>
    </Stack>
  );
}

const App = () => (
  <Result
    style={{
      fontWeight: "bold",
    }}
    icon={
      <BsFillCartFill
        style={{
          width: "20rem",
          height: "20rem",
          color: "#FB570B",
        }}
      />
    }
    title="你的購物車是空的"
  />
);

function CartNull() {
  return (
    <>
      <Header />
      <App />
      <ButtonsGroup />
      <Footer />
    </>
  );
}

export default CartNull;
