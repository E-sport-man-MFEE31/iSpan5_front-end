import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import OrderListSellerContent from "./OrderListSellerContent";
import "./orderListSeller.scss";

function OrderListSeller() {
  const [content, setContent] = useState([]);
  const { sellerid } = useParams();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    async function getContent() {
      let response = await axios.get(
        `http://localhost:8080/api/orderSeller/${sellerid}?page=${page}`
      );
      let result = response.data.data;
      const moment = require("moment");
      result.map((v) => {
        v.date = moment(v.start_time).utc().format("YYYY-MM-DD");
        return v;
      });
      setContent(result);
      setTotalPage(response.data.pagination.totalPage);
    }
    getContent();
  }, [page]);

  const getPages = () => {
    let pages = [];
    for (let i = 1; i <= totalPage; i++) {
      // push整個li 一直往後面放li
      pages.push(
        <li
          key={i}
          style={{
            fontWeight: "bold",
            padding: "13px 20px",
            border: "1px solid",
            borderColor: page === i ? "#FB570B" : "transparent",
            backgroundColor: page === i ? "#FB570B" : "transparent",
            borderRadius: "50%",
          }}
          onClick={(e) => {
            setPage(i);
          }}
        >
          {i}
        </li>
      );
    }
    return pages;
  };

  // 資料呈現用
  const [contentDisplay, setContentDisplay] = useState([]);

  const [statusFilter, setStatusFilter] = useState("全部訂單");

  const filterOptions = [
    "全部訂單",
    "已出貨",
    "未出貨",
    "運送中",
    "商品已送達目的地",
  ];

  // 搜尋用的
  const [searchWord, setSearchWord] = useState("");

  // 搜尋的功能
  const getSearchedTodos = (todoArray, searchWord) => {
    return todoArray.filter((v, i) => {
      return v.toString().includes(searchWord);
    });
  };

  const getfilterTodos = (todoArray, statusFilter) => {
    if (statusFilter === "全部訂單") {
      return todoArray;
    } else {
      return todoArray.filter((value) => value.status === statusFilter);
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
              className={statusFilter === v ? "btnFirst" : "btnSecond"}
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
          <button className="btn btnSearch" type="button" onClick={() => {}}>
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
            <th>收件信箱</th>
            <th>收件電話</th>
            <th>收件地址</th>
            <th>付款方式</th>
            <th>訂單狀態</th>
            <th>查看詳細</th>
          </tr>
        </thead>
        <tbody>
          <OrderListSellerContent content={contentDisplay} />
        </tbody>
      </table>
      <ul className="paginationUl">{getPages()}</ul>
      目前在第{page}頁
    </>
  );
}
export default OrderListSeller;
