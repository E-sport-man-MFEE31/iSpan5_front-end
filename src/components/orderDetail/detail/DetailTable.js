function DetailTable({ content }) {
  return (
    <>
      <div className="sellerInfo mb-5">
        {content.map((v, i) => {
          return (
            <h2 key={v.orId}>來自{v.company_name}的賣場</h2>
          );
        })}
      </div>
      <table>
        <thead>
          <tr>
            <th>商品資料</th>
            <th>顏色</th>
            <th>單件價格</th>
            <th>數量</th>
            <th>小計</th>
          </tr>
        </thead>
        <tbody>
          {content.map((v, i) => {
            const { orId, product_name, price, amount } = v;
            return (
              <tr
                key={orId}
                product_name={product_name}
                price={price}
                amount={amount}
              >
                <td className="productInfo">
                  <div className="d-flex">
                    <div className="d-flex align-items-center imageFrame">
                      <img
                        className="computerImage mx-2"
                        src="./images/profileImage.jpg"
                        alt=""
                      />
                    </div>
                    <div className="imageWords d-flex align-items-center">
                      <p className="pt-3">{product_name}</p>
                    </div>
                  </div>
                </td>
                <td>黑色Black:資料庫無此欄位</td>
                <td>{price}</td>
                <td>{amount}</td>
                <td>{price * amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default DetailTable;
