import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function VerifySellerPath() {
  return (
    <>
      <AiFillHome className="homeIcon" />
      <h5 className="fw-bold">&nbsp;首頁 /</h5>
      <Link
        to={"/profile"}
        className="text-decoration-none text-dark"
      >
        <h5 className="fw-bold">&nbsp;會員中心/</h5>
      </Link>
      <h5 className="fw-bold myOrder text-decoration-none">
        &nbsp;驗證成賣家
      </h5>
    </>
  );
}
export default VerifySellerPath;
