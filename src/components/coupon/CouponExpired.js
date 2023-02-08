import { AiOutlineShopping } from "react-icons/ai";
function CouponExpired({ content }) {
  return (
    <>
      {content.map((v, i) => {
        return (
          <div className="Coupon2">
            <div className="CouponLeft">
              <div className="CouponIcon">
                <AiOutlineShopping className="shoppingIcon" />
              </div>
              <div className="CouponContent">
                {" "}
                滿{v.limited}折{v.price}
              </div>
            </div>
            <div className="CouponRight">
              <div className="CouponUp">
                <div className="discount">
                  {v.coupon_code}
                </div>
                <div className="lowest">
                  低消 ${v.limited}
                </div>
              </div>
              <div className="CouponDown">
                <div className="date">
                  {v.end_time} 生效
                </div>
                <div className="rules">使用規則</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default CouponExpired;
