import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function OrderListEdit({
  name,
  id,
  type_name,
  dStatus,
  user_phone,
  user_address,
  updateTodo,
}) {
  // 編輯 input 裡面的值的功能
  const [inputName, setInputName] = useState("");

  async function handleSubmit(e) {
    // 關閉表單的預設行為
    e.preventDefault();
    // 用ajax的方式
    let response = await axios.post(
      "http://localhost:3001/api/orders",
      {
        name,
      }
    );
    console.log(response.data);
  }

  return (
    <>
      <form>
        <p>
          送貨方式 : {type_name}
          &nbsp;這個表格待釐清
          <br />
          <button className="sevenEleven">
            7-11物流追蹤
          </button>
          <br />
          送貨狀態 : {dStatus}
          <br />
          <label>收件人姓名 :</label>
          <input
            type="text"
            value={inputName}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setInputName(e.target.value);
              }
            }}
          />
          <br />
          收件人電話號碼 : {user_phone}
          <br />
          收件地址 : {user_address}
          <br />
        </p>
        <Button variant="secondary" onClick={handleSubmit}>
          完成
        </Button>
      </form>
    </>
  );
}
export default OrderListEdit;
