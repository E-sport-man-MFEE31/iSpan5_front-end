function OrderInfo({
  orId,
  recip_email,
  date,
  name,
  phone,
  type_name,
  dStatus,
  deliWay,
  recip_name,
  recip_phone,
  recip_address,
  orderStatus,
}) {
  return (
    <>
      <div className="FirstBox d-flex">
        <div className="boxes">
          <h3 className="py-3 mt-3">訂單資訊</h3>

          <p>
            訂單號碼 : {orId}
            <br />
            訂單電郵 : {recip_email}
            <br />
            訂單日期 : {date}
          </p>
        </div>
        <div className="boxes">
          <h3 className="py-3 mt-3">顧客資訊</h3>

          <p>
            名稱 : {name}
            <br />
            電話號碼 : {phone}
          </p>
        </div>
      </div>
      <div className="SecondBox d-flex">
        <div className="boxes">
          <h3 className="py-3 mt-3">送貨資訊</h3>

          <p>
            送貨方式 : {deliWay}
            <br />
            <button className="sevenEleven">
              7-11物流追蹤
            </button>
            <br />
            送貨狀態 : {dStatus}
            <br />
            收件人姓名 : {recip_name}
            <br />
            收件人電話號碼 : {recip_phone}
            <br />
            收件地址 : {recip_address}
            <br />
          </p>
        </div>
        <div className="boxes">
          <h3 className="py-3 mt-3">付款資訊</h3>

          <p>
            付款方式 : {type_name}
            <br />
            付款狀態 : {orderStatus}
            <br />
            付款指示 :
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;戶名
            : 電競人股份有限公司
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中國信託銀行敦南分行
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;帳號
            : 111-222-444866 ATM : 822
            <br />
            發票狀態 : 沒有此表格
            <br />
            發票申請類型 : 雲端發票(沒有此表格)
            <br />
            發票載去類型 : 會員載具 (admin@test.com)
            沒有此表格
          </p>
        </div>
      </div>
    </>
  );
}
export default OrderInfo;
