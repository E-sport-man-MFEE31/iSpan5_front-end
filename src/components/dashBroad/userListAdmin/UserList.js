import { useState, useEffect } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";

function UserList() {
  const [data, setData] = useState();
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
        `http://localhost:8080/api/user?page=${page}`
      );
      setData(response.data.user);
      setTotalPage(response.data.pagination.totalPage);
    }
    getData();
  }, [data, page]);

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

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Created_at</th>
            <th>Valid</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((v, i) => {
              const {
                name,
                email,
                address,
                created_at,
                valid,
              } = v;
              return (
                <tr key={i}>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{address}</td>
                  <td>{created_at}</td>
                  <td>{valid}</td>
                  <td>
                    <button className="btn btn-warning">
                      加入黑名單
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <ul
        style={{
          margin: "0 auto",
        }}
      >
        {getPages()}
      </ul>
    </>
  );
}

export default UserList;
