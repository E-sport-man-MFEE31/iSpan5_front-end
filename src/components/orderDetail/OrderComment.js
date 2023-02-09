import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";

function OrderComment({
  company_name,
  content,
  orId,
  product_id,
  sellers_id,
  user_id,
}) {
  const [sellerStar, setSellerStar] = useState(2);
  const [sellerComment, setSellerComment] = useState("");
  const [productStar, setProductStar] = useState(2);
  const [productComment, setProductComment] = useState("");

  // 評論狀態改變
  const [comment, setComment] = useState(true);

  // 評論內容儲存
  const [orderComment, setOrderComment] = useState([]);

  const [commentResult, setCommentResult] = useState({});

  // 點擊評論送出鍵
  const handleSubmit = async (e) => {
    e.preventDefault();
    let sellerIsComment =
      sellerComment.trim() !== "" ? 1 : 0;
    let productIsComment =
      productComment.trim() !== "" ? 1 : 0;
    const response = await axios.post(
      `http://localhost:8080/api/${user_id}/orders/${orId}/comment`,
      {
        sellerStar,
        sellerComment,
        productStar,
        productComment,
        product_id,
        orId,
        user_id,
        sellers_id,
        sellerIsComment,
        productIsComment,
      }
    );
    console.log(response.data);
    setOrderComment(response.data);
    Swal.fire("感謝您寶貴的評價!");
    setComment(!comment);
  };

  useEffect(() => {
    async function getComment(e) {
      const commentResponse = await axios.get(
        `http://localhost:8080/api/${user_id}/orders/${orId}/comment`
      );
      console.log(commentResponse.data);
      // setCommentResult({productIsComment: commentResponse.data[0].is_comment, sellerIsComment: commentResponse.data[0].seller_is_comment})
      // console.log(commentResponse.data.is_comment)
    }
    getComment();
  }, []);

  return (
    <>
      {comment ? (
        <>
          <form onSubmit={handleSubmit}>
            {/* 賣家 */}
            <div>
              <h3 className="commentsTitle">
                給 {company_name} 評價
              </h3>
              <div className="d-flex commentsStars justify-content-between">
                <div className="d-flex">
                  <div className="stars">
                    <Box
                      component="fieldset"
                      borderColor="transparent"
                      autoComplete="off"
                    >
                      <Rating
                        name="simple-controlled"
                        value={sellerStar}
                        onChange={(e) => {
                          setSellerStar(e.target.value);
                        }}
                      />
                    </Box>
                  </div>
                  <h4 className="commentsTitle">
                    {" "}
                    {sellerStar} / 5 分
                  </h4>
                </div>
                <div className="d-flex">
                  <div className="tag d-flex">
                    <Button
                      className="good w-20 bg-gray"
                      onClick={(e) => {
                        e.preventDefault();
                        setSellerComment("超棒");
                      }}
                    >
                      超棒
                    </Button>
                    <Button
                      className="good w-20 bg-gray"
                      onClick={(e) => {
                        e.preventDefault();
                        setSellerComment("不錯");
                      }}
                    >
                      不錯
                    </Button>
                    <Button
                      className="good w-20 bg-gray"
                      onClick={(e) => {
                        e.preventDefault();
                        setSellerComment("普通");
                      }}
                    >
                      普通
                    </Button>
                    <Button
                      className="good w-20 bg-gray"
                      onClick={(e) => {
                        e.preventDefault();
                        setSellerComment("差");
                      }}
                    >
                      差
                    </Button>
                    <Button
                      className="good w-20 bg-gray"
                      onClick={(e) => {
                        e.preventDefault();
                        setSellerComment("很差");
                      }}
                    >
                      很差
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="textField">
              <TextField
                id="outlined-basic"
                label="有什麼想告訴賣家嗎?"
                variant="outlined"
                fullWidth
                value={sellerComment}
                onChange={(e) => {
                  setSellerComment(e.target.value);
                }}
              />
            </div>
            {/* 商品 */}
            {content.map((v, i) => {
              return (
                <>
                  <h3 className="commentsTitle">
                    給 商品{v.product_name} 評價
                  </h3>
                  <div className="d-flex commentsStars justify-content-between">
                    <div className="d-flex">
                      <div className="stars">
                        <Box
                          component="fieldset"
                          borderColor="transparent"
                          autoComplete="off"
                        >
                          <Rating
                            name="simple-controlled"
                            value={productStar}
                            onChange={(e) => {
                              setProductStar(
                                e.target.value
                              );
                            }}
                          />
                        </Box>
                        <h4 className="commentsTitle">
                          {" "}
                          {productStar} / 5 分
                        </h4>
                      </div>
                    </div>
                    <div className="tag d-flex">
                      <Button
                        className="good w-20 bg-gray"
                        onClick={(e) => {
                          e.preventDefault();
                          setProductComment("超棒");
                        }}
                      >
                        超棒
                      </Button>
                      <Button
                        className="good w-20 bg-gray"
                        onClick={(e) => {
                          e.preventDefault();
                          setProductComment("不錯");
                        }}
                      >
                        不錯
                      </Button>
                      <Button
                        className="good w-20 bg-gray"
                        onClick={(e) => {
                          e.preventDefault();
                          setProductComment("普通");
                        }}
                      >
                        普通
                      </Button>
                      <Button
                        className="good w-20 bg-gray"
                        onClick={(e) => {
                          e.preventDefault();
                          setProductComment("差");
                        }}
                      >
                        差
                      </Button>
                      <Button
                        className="good w-20 bg-gray"
                        onClick={(e) => {
                          e.preventDefault();
                          setProductComment("很差");
                        }}
                      >
                        很差
                      </Button>
                    </div>
                  </div>
                  <div className="textField">
                    <TextField
                      id="outlined-basic"
                      label="分享您對此商品的購物體驗"
                      variant="outlined"
                      fullWidth
                      value={productComment}
                      onChange={(e) => {
                        setProductComment(e.target.value);
                      }}
                    />
                  </div>
                </>
              );
            })}
            <div className="pt-3 ps-3">
              <Button className="btnSubmit" type="submit">
                送出
              </Button>
            </div>
          </form>
        </>
      ) : (
        <>
          <form>
            <h3 className="commentsTitle">給 賣家 評價</h3>
            {/* 賣家 */}
            <div className="d-flex">
              <div className="stars">
                {}
                <Box
                  component="fieldset"
                  borderColor="transparent"
                >
                  <Rating
                    name="simple-controlled"
                    value={sellerStar}
                    readOnly
                  />
                </Box>
              </div>
              <h3 className="commentsTitle">
                {" "}
                {sellerStar} / 5 分
              </h3>
            </div>
            <div className="textFieldFinish">
              <h4>
                您想告訴賣家之內容&nbsp;&nbsp;:&nbsp;&nbsp;
                {sellerComment}
              </h4>
            </div>
            {/* 商品 */}
            {content.map((v, i) => {
              return (
                <>
                  <div
                    className="d-flex"
                    key={v.product_id}
                  >
                    <h3 className="commentsTitle">
                      給 商品{v.product_name} 評價
                    </h3>
                    <div className="stars">
                      {}
                      <Box
                        component="fieldset"
                        borderColor="transparent"
                      >
                        <Rating
                          name="simple-controlled"
                          value={productStar}
                          readOnly
                        />
                      </Box>
                    </div>
                    <h3 className="commentsTitle">
                      {" "}
                      {productStar} / 5 分
                    </h3>
                  </div>
                  <div className="textFieldFinish">
                    <h4>
                      您對此商品的購物體驗&nbsp;&nbsp;:&nbsp;&nbsp;
                      {productComment}
                    </h4>
                  </div>
                </>
              );
            })}
          </form>
        </>
      )}
    </>
  );
}
export default OrderComment;
