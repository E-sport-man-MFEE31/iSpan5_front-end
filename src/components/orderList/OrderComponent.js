import { Link } from "react-router-dom";

function OrderComponent(props) {
  const {
    user_id,
    orId,
    date,
    payment_price,
    type_name,
    deliStatus,
  } = props;
  return (
    <>
      <td>{orId}</td>
      <td className="dNone">{date}</td>
      <td className="dNone">{payment_price}</td>
      <td className="dNone">{type_name}</td>
      <td>{deliStatus}</td>
      <td>
        <button className="btnDetail">
          <Link
            to={`/${user_id}/orders/${orId}`}
            className="btnContent"
          >
            查看詳細
          </Link>
        </button>
      </td>
    </>
  );
}
export default OrderComponent;
