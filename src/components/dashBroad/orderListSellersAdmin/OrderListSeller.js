import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import OrderListSellerContent from "./OrderListSellerContent";

import "./orderListSeller.scss";

function OrderListSeller() {
  const [content, setContent] = useState([]);

  const { sellerid } = useParams();

  useEffect(() => {
    async function getContent() {
      let response = await axios.get(
        `http://localhost:8080/api/orderSeller/${sellerid}`
      );
      setContent(response.data);
    }
    getContent();
  }, []);

  // 資料呈現用
  const [contentDisplay, setContentDisplay] = useState([]);

  const [statusFilter, setStatusFilter] =
    useState("全部訂單");

  const filterOptions = [
    "全部訂單",
    "已出貨",
    "未出貨",
    "運送中",
    "商品已送達目的地",
  ];

  // 搜尋用的
  const [searchWord, setSearchWord] = useState("");

  // 搜尋的功能 (目前暫時先用價格去做搜尋)
  const getSearchedTodos = (todoArray, searchWord) => {
    return todoArray.filter((v, i) => {
      return v.payment_price.includes(searchWord);
    });
  };

  const getfilterTodos = (todoArray, statusFilter) => {
    if (statusFilter === "全部訂單") {
      return todoArray;
    } else {
      return todoArray.filter(
        (value) => value.status === statusFilter
      );
    }
  };

  useEffect(() => {
    let newContent = getSearchedTodos(content, searchWord);
    newContent = getfilterTodos(newContent, statusFilter);

    setContentDisplay(newContent);
  }, [content, statusFilter, searchWord]);

  return (
    <>
      <div className="btnGroup">
        {filterOptions.map((v, i) => {
          return (
            <button
              key={i}
              className={
                statusFilter === v
                  ? "btnFirst"
                  : "btnSecond"
              }
              onClick={() => {
                setStatusFilter(v);
              }}
            >
              {v}
            </button>
          );
        })}
      </div>
      <div className="inputs">
        <div className="input-group">
          <input
            type="text"
            className="form-control inputSearch"
            placeholder="搜尋訂單編號..."
            value={searchWord}
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          />
          <button
            className="btn btnSearch"
            type="button"
            onClick={() => {}}
          >
            搜尋
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>訂單編號</th>
            <th>成立日期</th>
            <th>總金額</th>
            <th>買家帳號</th>
            <th>買家信箱</th>
            <th>買家電話</th>
            <th>買家地址</th>
            <th>付款方式</th>
            <th>訂單狀態</th>
            <th>查看詳細</th>
          </tr>
        </thead>
        <tbody>
          <OrderListSellerContent
            content={contentDisplay}
          />
        </tbody>
      </table>
    </>
  );
}
export default OrderListSeller;
