import OrderPath from "./OrderPath";
import SideBar from "../reUseable/SideBar";
import OrderTable from "./OrderTable";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import "./orderList.scss";

function OrderList() {
  return (
    <>
      <Header />
      <div className="title py-5 d-flex">
        <h2 className="fw-bold titleFirst">我</h2>
        <h2 className="fw-bold">的訂單</h2>
      </div>
      <div className="Nav-title d-flex justify-content-between">
        <div className="d-flex px-3 detailPath">
          <OrderPath />
        </div>
      </div>
      <div className="tableFrame">
        <div className="tableLeft">
          <SideBar />
        </div>
        <div className="tableRight">
          <OrderTable />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default OrderList;
