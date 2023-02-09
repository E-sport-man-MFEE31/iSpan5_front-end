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
      <div className="FirstBox">
        <div className="boxes">
          <div className="orderInfo py-3 mt-3">
            訂單資訊
          </div>
          <div className="contentInfo">
            <div className="d-flex content">
              <div>訂單號碼 :</div>
              <div>&nbsp;{orId}</div>
            </div>
            <br />
            <div className="d-flex content">
              <div>訂單電郵 :</div>
              <div>&nbsp;{recip_email}</div>
            </div>
            <br />
            <div className="d-flex content">
              <div>訂單日期 : </div>
              <div>&nbsp;{date}</div>
            </div>
          </div>
        </div>
        <div className="boxes">
          <div className="orderInfo py-3 mt-3">
            顧客資訊
          </div>
          <div className="contentInfo">
            <div className="d-flex content">
              <div>名稱 : </div>
              <div>&nbsp;{name}</div>
            </div>
            <br />
            <div className="d-flex content">
              <div>電話號碼 : </div>
              <div>&nbsp;{phone}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="FirstBox">
        <div className="boxes">
          <div className="orderInfo py-3 mt-3">
            送貨資訊
          </div>
          <div className="contentInfo">
            <div className="d-flex content">
              <div>送貨方式 :</div>
              <div>&nbsp;{deliWay}</div>
            </div>
            <br />
            <div>
              <button className="sevenEleven">
                7-11物流追蹤
              </button>
            </div>
            <br />
            <div className="d-flex content">
              <div>送貨狀態 : </div>
              <div>&nbsp;{dStatus}</div>
            </div>
            <br />
            <div className="d-flex content">
              <div>收件人姓名 : </div>
              <div>&nbsp;{recip_name}</div>
            </div>
            <br />
            <div className="d-flex content">
              <div>收件人電話號碼 : </div>
              <div>&nbsp;{recip_phone}</div>
            </div>
            <br />
            <div className="d-flex content">
              <div>收件地址 : </div>
              <div>&nbsp;{recip_address}</div>
            </div>
          </div>
        </div>
        <div className="boxes">
          <div className="orderInfo py-3 mt-3">
            付款資訊
          </div>
          <div className="contentInfo">
            <div className="d-flex content">
              <div>付款方式 :</div>
              <div>&nbsp;{type_name}</div>
            </div>
            <br />
            <div className="d-flex content">
              <div>付款狀態 : </div>
              <div>&nbsp;{orderStatus}</div>
            </div>
            <br />
            <div className="content">付款指示 :</div>
            <br />
            <div className="contentPay">
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;戶名
                : 電競人股份有限公司
              </div>
            </div>
            <br />
            <div className="contentPay">
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中國信託銀行敦南分行
              </div>
            </div>
            <br />
            <div className="contentPay">
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;帳號
                : 111-222-444866 ATM : 822
              </div>
            </div>
            <br />
            <div className="d-flex content">
              <div>發票類型 :</div>
              <div>雲端發票</div>
            </div>
            <br />
            <div className="d-flex content">
              <div>載具類型 : </div>
              <div>會員載具 (發票會寄至您的電郵)</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderInfo;
