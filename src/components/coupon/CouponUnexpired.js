import { AiOutlineShopping } from "react-icons/ai";
function CouponUnExpired({ content }) {
  return (
    <>
      {content.map((v, i) => {
        const {
          id,
          price,
          coupon_code,
          limited,
          end_time,
        } = v;
        return (
          <div key={id} className="Coupon1">
            <div className="CouponLeft">
              <div className="CouponIcon">
                <AiOutlineShopping className="shoppingIcon" />
              </div>
              <div className="CouponContent">
                滿{limited}
                <br />折{price}
              </div>
            </div>
            <div className="CouponRight">
              <div className="CouponUp">
                <div className="discount">
                  {coupon_code}
                </div>
              </div>
              <div className="CouponDown">
                <div className="date">{end_time} 生效</div>
                <div className="rules">低消 ${limited}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default CouponUnExpired;
