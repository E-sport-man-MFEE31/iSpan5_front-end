import { useEffect, useState } from "react";
import {
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import OrderItem from "./OrderItem";
import axios from "axios";

function OrderTable() {
  // 畫面內容
  const [content, setContent] = useState([]);

  // 最終要呈現出來的
  const [contentDisplay, setContentDisplay] = useState([]);

  // 全部訂單 已出貨 未出貨 切換用的
  const [statusFilter, setStatusFilter] =
    useState("全部訂單");

  // 搜尋用的
  const [searchWord, setSearchWord] = useState("");

  // 製作分頁
  let navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");
  const [page, setPage] = useState(
    parseInt(currentPage, 10) || 1
  );
  const [totalPage, setTotalPage] = useState(1);

  // 撈後端的資料
  const getContent = async () => {
    const response = await axios.post(
      `http://localhost:8080/api/orders?page=${page}`,
      {
        statusFilter,
        searchWord,
      }
    );
    let result = response.data.data;
    const moment = require("moment");
    result.map((v) => {
      v.date = moment(v.start_time)
        .utc()
        .format("YYYY-MM-DD");
      return v;
    });
    setContent(result);
    setTotalPage(response.data.pagination.totalPage);
  };
  useEffect(() => {
    getContent();
  }, [page, statusFilter, searchWord]);

  // 分頁的功能
  const getPages = () => {
    let pages = [];

    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <li
          className="paginationLi"
          key={i}
          style={{
            fontWeight: "bold",
            padding: "13px 20px",
            border: "1px solid",
            borderColor:
              page === i ? "#FB570B" : "transparent",
            backgroundColor:
              page === i ? "#FB570B" : "transparent",
            borderRadius: "50%",
          }}
          onClick={(e) => {
            setPage(i);
            navigate(`?page=${i}`);
          }}
        >
          {i}
        </li>
      );
    }
    return pages;
  };

  // 製作 button 的迴圈
  const filterOptions = [
    "全部訂單",
    "已出貨",
    "未出貨",
    "運送中",
    "商品已送達目的地",
  ];

  // 搜尋的功能
  const getSearchedTodos = (todoArray, searchWord) => {
    return todoArray.filter((v, i) => {
      return v.orId.toString().includes(searchWord);
    });
  };

  // 訂單狀態切換的功能
  const getfilterTodos = (todoArray, statusFilter) => {
    if (statusFilter === "全部訂單") {
      return todoArray;
    } else {
      return todoArray.filter(
        (value) => value.deliStatus === statusFilter
      );
    }
  };

  //多重篩選的處理
  useEffect(() => {
    // 依各過濾條件產生的新資料陣列
    // 此處可作判斷或最佳化調整…或調整誰先誰後等等
    // 用let宣告陣列newTodos，是有可能在處理過程中，重新指定為另個新陣列
    let newContent = getSearchedTodos(content, searchWord);
    newContent = getfilterTodos(newContent, statusFilter);

    setContentDisplay(newContent);

    // 注意因為getSearchedTodos需要在searchWord變動時執行，所以需要相依
    // getFilterTodos與currentFilter同樣道理
    // 寫為外部傳入的傳入參數來使用，減少錯誤的機會
  }, [content, statusFilter, searchWord]);

  return (
    <>
      <div className="statusSearch">
        <div className="orderStatus">
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
        </div>
      </div>
      <div className="inputs">
        <div className="inputGroup">
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
            <th className="dNone">日期</th>
            <th className="dNone">總金額</th>
            <th className="dNone">付款方式</th>
            <th>出貨狀態</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <OrderItem content={contentDisplay} />
        </tbody>
      </table>
      <ul className="paginationUl ">{getPages()}</ul>
    </>
  );
}
export default OrderTable;
