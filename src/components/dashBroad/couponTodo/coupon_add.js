import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";

function CouponAdd({
  inputId,
  inputCoupon,
  inputLimit,
  inputPrice,
  inputStart,
  inputEnd,
  setContent,
  content,
  handleClose,
  show,
  setInputCoupon,
  setInputLimit,
  setInputPrice,
  setInputStart,
  setInputEnd,
}) {
  //資料新增的功能(前端)
  const addTodo = (e) => {
    if (e.key === "Enter") {
      const newObj = {
        id: inputId,
        coupon_code: inputCoupon,
        limited: inputLimit,
        price: inputPrice,
        start_time: inputStart,
        end_time: inputEnd,
      };
      setContent([...content, newObj]);
    }
  };
  // 傳資料到後端去做新增
  async function handleSubmit() {
    const couponObj = {
      inputId,
      inputCoupon,
      inputLimit,
      inputPrice,
      inputStart,
      inputEnd,
    };
    let response = await axios.post(
      "http://localhost:8080/api/sellerCoupon",
      couponObj
    );
    setContent([
      {
        id: inputId,
        coupon_code: inputCoupon,
        limited: inputLimit,
        price: inputPrice,
        start_time: inputStart,
        end_time: inputEnd,
      },
      ...content,
    ]);
    console.log(content);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "新增優惠券成功",
    });
    handleClose();
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {content
            .filter((value) => value.couponId === content.length)
            .map((v, i) => {
              return (
                <Modal.Title key={i} className="fw-bold">
                  第&nbsp;{v.id + 1}&nbsp;張優惠券
                </Modal.Title>
              );
            })}
        </Modal.Header>
        <Modal.Body className="formOutside">
          <form>
            <div className="formDiv">
              <label>折扣碼</label>
              <input
                type="text"
                placeholder="請輸入折扣碼"
                value={inputCoupon}
                onChange={(e) => {
                  setInputCoupon(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setInputCoupon(e.target.value);
                  }
                }}
              />
            </div>
            <div className="formDiv">
              <label>低消</label>
              <input
                type="text"
                placeholder="請輸入低消金額"
                value={inputLimit}
                onChange={(e) => {
                  setInputLimit(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setInputLimit(e.target.value);
                  }
                }}
              />
            </div>
            <div className="formDiv">
              <label>折扣金額</label>
              <input
                type="text"
                placeholder="請輸入折扣金額"
                value={inputPrice}
                onChange={(e) => {
                  setInputPrice(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setInputPrice(e.target.value);
                  }
                }}
              />
            </div>
            <div className="formDiv">
              <label>開始日期</label>
              <input
                type="date"
                value={inputStart}
                onChange={(e) => {
                  setInputStart(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setInputStart(e.target.value);
                  }
                }}
              />
            </div>
            <div className="formDiv">
              <label>結束日期</label>
              <input
                type="date"
                value={inputEnd}
                onChange={(e) => {
                  setInputEnd(e.target.value);
                }}
                onKeyDown={addTodo}
              />
            </div>
            <Button
              variant="secondary"
              className="my-3"
              onClick={() => {
                handleSubmit();
                setInputCoupon("");
                setInputLimit("");
                setInputPrice("");
                setInputStart("");
                setInputEnd("");
              }}
            >
              新增折扣碼
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default CouponAdd;
