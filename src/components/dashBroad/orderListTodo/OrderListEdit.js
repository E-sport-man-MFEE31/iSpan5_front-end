import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function OrlistEdit({
  id,
  deliStatus,
  deliWay,
  recip_name,
  recip_phone,
  recip_address,
  updateTodo,
  btnEditing,
}) {
  // 編輯 input 裡面的值的功能
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputAddress, setInputAddress] = useState("");

  async function handleSubmit(e) {
    // 關閉表單的預設行為
    // e.preventDefault();
    // 用ajax的方式
    let response = await axios.post("http://localhost:8080/api/sellerOrders", {
      inputName,
      inputPhone,
      inputAddress,
    });
    console.log(response.data);
  }

  return (
    <>
      <form>
        <p>
          送貨方式 : {deliWay}
          <br />
          <button className="sevenEleven">7-11物流追蹤</button>
          <br />
          送貨狀態 : {deliStatus}
          <br />
          <label>收件人姓名 :</label>
          <input
            placeholder={recip_name}
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
          <label>收件人電話號碼 :</label>
          <input
            placeholder={recip_phone}
            type="text"
            value={inputPhone}
            onChange={(e) => {
              setInputPhone(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setInputPhone(e.target.value);
              }
            }}
          />
          <br />
          <label>收件地址 :</label>
          <input
            placeholder={recip_address}
            type="text"
            value={inputAddress}
            onChange={(e) => {
              setInputAddress(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setInputAddress(e.target.value);
              }
            }}
          />
          <br />
        </p>
        <Button
          variant="secondary"
          onClick={() => {
            handleSubmit();
            btnEditing();
            updateTodo(id, inputName, inputPhone, inputAddress);
          }}
        >
          完成
        </Button>
      </form>
    </>
  );
}
export default OrlistEdit;
