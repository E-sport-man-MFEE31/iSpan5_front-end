function OrderPrice({ orId, payment_price, delivery_fee }) {
  return (
    <>
      <ul>
        <li key={orId}>
          <div>小計:</div>
          <div>NT${parseInt(payment_price)}</div>
        </li>

        <li key={orId}>
          <div>運費:</div>
          <div>NT${delivery_fee}</div>
        </li>
        <li>
          <div>優惠代碼折扣:</div>
          <div>- NT$100</div>
        </li>

        <li key={orId}>
          <div>合計:</div>
          <div>
            NT$
            {parseInt(payment_price) +
              parseInt(delivery_fee) -
              100}
          </div>
        </li>
      </ul>
    </>
  );
}
export default OrderPrice;
