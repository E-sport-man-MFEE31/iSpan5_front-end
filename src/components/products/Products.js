import { Breadcrumb, Layout, theme } from "antd";
import React from "react";
import Header from "../header/Header";
import ProductContent from "./product/Product";
import { FilterFilled } from "@ant-design/icons";
import FiterBrand from "./fiter/FiterBrand";
import FilterPrice from "./fiter/FilterPrice";
import FiterRates from "./fiter/FiterRates";
import axios from "axios";

import "./products.css";
import { useState, useEffect } from "react";
import {
  useSearchParams,
  useNavigate,
} from "react-router-dom";

const { Content, Sider } = Layout;

const Products = () => {
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");
  const [page, setPage] = useState(
    parseInt(currentPage, 10) || 1
  );
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    async function getData() {
      let response = await axios.get(
        `http://localhost:8080/api/product?page=${page}`
      );
      setData(response.data.data);
      setTotalPage(response.data.pagination.totalPage);
    }
    getData();
  }, [page]);

  const getPages = () => {
    let pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <li
          style={{
            display: "inline-block",
            margin: "2px",
            backgroundColor: page === i ? "#fb570b" : "",
            borderColor: page === i ? "#fb570b" : "#dbdbdb",
            color: page === i ? "#fff" : "#363636",
            borderWidth: "1px",
            width: "28px",
            height: "28px",
            borderRadius: "3px",
            textAlign: "center",
            cursor: "pointer",
          }}
          key={i}
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

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header />
      <Layout>
        <Sider
          className="sidebar"
          width={200}
          style={{
            background: "#f5f5f5",
            marginTop: "3rem",
            textAlign: "center",
            color: "black",
            fontWeight: "bold",
          }}
        >
          <FilterFilled
            style={{
              fontSize: "1.3rem",
            }}
          />
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            條件篩選
          </span>
          <br />
          <FiterBrand />
          <hr />
          <FilterPrice />
          <hr />
          <FiterRates />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>所有商品</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <div
              style={{
                display: "flex",
                flex: "1 1 0%",
                flexWrap: "wrap",
                justifyContent: "start",
                gap: "1.5rem",
              }}
            >
              {data.map((v, i) => {
                return (
                  <div
                    className="card-shadow-hover"
                    key={v.id}
                  >
                    <ProductContent
                      id={v.id}
                      name={v.product_name}
                      images={v.images}
                      price={v.price}
                      storage={v.storage}
                      rate={v.rate}
                      favorites={v.favorites}
                    />
                  </div>
                );
              })}
            </div>
          </Content>
          <ul
            style={{
              margin: "0 auto",
            }}
          >
            {getPages()}
          </ul>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Products;
