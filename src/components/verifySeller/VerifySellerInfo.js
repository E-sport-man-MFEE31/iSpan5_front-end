function VerifySellerInfo() {
  return (
    <>
      <div className="inputChanging d-flex">
        <label className="account">帳號</label>
        <div className="inputWord">Jodie@test.com</div>
      </div>
      <div className="inputChanging">
        <label className="storeName">賣場名稱</label>
        <input
          type="text"
          placeholder=""
          className="input"
        />
      </div>
      <div className="inputChanging">
        <label className="taxID">統一編號</label>
        <input
          type="email"
          placeholder=""
          className="input"
        />
      </div>
      <div className="inputChanging">
        <label className="storeIntro">賣場簡介</label>
        <textarea
          type="text"
          placeholder=""
          className="introInput"
          row={3}
        />
      </div>
      <div className="inputChanging">
        <button className="btnVerify">驗證</button>
      </div>
    </>
  );
}
export default VerifySellerInfo;
