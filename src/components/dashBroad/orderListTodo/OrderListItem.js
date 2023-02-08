import Button from "react-bootstrap/Button";
import { FaRegEdit } from "react-icons/fa";

function OrderListItem({
  deliStatus,
  deliWay,
  recip_name,
  recip_phone,
  recip_address,
  btnEditing,
}) {
  return (
    <>
      <div className="boxes">
        <h3 className="py-3 mt-3">
          送貨資訊
          <Button className="btnDeli" onClick={btnEditing}>
            修改收件資訊&nbsp;
            <FaRegEdit />
          </Button>
        </h3>
        <p>
          送貨方式 : {deliWay}
          <br />
          <button className="sevenEleven">7-11物流追蹤</button>
          <br />
          送貨狀態 : {deliStatus}
          <br />
          收件人姓名 : {recip_name}
          <br />
          收件人電話號碼 : {recip_phone}
          <br />
          收件地址 : {recip_address}
          <br />
        </p>
      </div>
    </>
  );
}
export default OrderListItem;
