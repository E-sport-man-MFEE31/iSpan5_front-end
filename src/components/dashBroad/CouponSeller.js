import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function CouponSeller() {
  const [content, setContent] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    async function getContent() {
      let response = await axios.get(
        "http://localhost:8080/api/couponSeller"
      );
      setContent(response.data);
      console.log(response.data);
    }
    getContent();
  }, []);
  return (
    <>
      <Button
        className="btn btnAddCoupon"
        onClick={handleShow}
      >
        新增折扣碼
      </Button>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          {content
            .filter(
              (value) => value.couponId === content.length
            )
            .map((v, i) => {
              return (
                <Modal.Title key={i}>
                  編號{v.id + 1}
                </Modal.Title>
              );
            })}
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <div className="btnGroup d-flex">
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
              }}
            >
              關閉
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <table>
        <thead>
          <tr>
            <th>編號</th>
            <th>折扣碼</th>
            <th>折扣方式</th>
            <th>最低消費金額</th>
            <th>折扣金額</th>
            <th>開始日期</th>
            <th>結束日期</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {content.map((v, i) => {
            const {
              id,
              price,
              limited,
              coupon_code,
              start_time,
              end_time,
            } = v;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{coupon_code}</td>
                <td>
                  滿{limited}折{price}
                </td>
                <td>{limited}</td>
                <td>{price}</td>
                <td>{start_time}</td>
                <td>{end_time}</td>
                <td>
                  <button className="btn btn-warning">
                    修改
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default CouponSeller;
