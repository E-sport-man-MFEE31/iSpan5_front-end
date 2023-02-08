import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Rate } from "antd";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const App = () => (
  <Rate
    disabled
    defaultValue={5}
    style={{
      fontSize: "0.8rem",
    }}
  />
);

function ProductContent({
  id,
  name,
  images,
  price,
  storage,
  rate,
  favorites,
}) {
  return (
    <Card
      className="shadow"
      style={{ width: "13rem", height: "100%" }}
    >
      <Card.Img
        variant="top"
        src={images}
        style={{
          height: "14rem",
          cursor: "pointer",
        }}
      />
      <Card.Body>
        <Card.Title
          style={{
            cursor: "pointer",
          }}
        >
          {name}
        </Card.Title>
        <Card.Text>
          <App />
        </Card.Text>
        <div className="d-flex align-items-center justify-content-between">
          <Button
            variant="primary"
            className="text-light"
            style={{
              width: "16rem",
            }}
            onClick={() => {
              let cart = [];
              if (localStorage.getItem("cart")) {
                cart = JSON.parse(
                  localStorage.getItem("cart")
                );
              }

              let item = {
                id: id,
                name: name,
                price: price,
                amount: 1,
              };

              let isExist = false;
              for (let i = 0; i < cart.length; i++) {
                if (cart[i].id === id) {
                  isExist = true;
                  break;
                }
              }

              if (!isExist) {
                cart.push(item);
                MySwal.fire({
                  icon: "success",
                  title: "加入成功",
                  showConfirmButton: false,
                  timer: 1500,
                });
              } else {
                MySwal.fire({
                  icon: "warning",
                  title: "已加入購物車",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }

              localStorage.setItem(
                "cart",
                JSON.stringify(cart)
              );
            }}
          >
            加入購物車
          </Button>
          <div className="d-flex flex-column align-items-center fw-bold">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div
                style={{
                  fontSize: "1rem",
                  margin: "5px",
                }}
              >
                $<strong>{price}</strong>
              </div>
              <div
                style={{
                  fontSize: "0.5rem",
                }}
              >
                數量{storage}
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductContent;
