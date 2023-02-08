import OrListDetail from "../orderListAdmin/OrderListDetail";

function OrderListSellerContent({ content }) {
  return (
    <>
      {content.map((v, i) => {
        const {
          orId,
          date,
          payment_price,
          name,
          user_email,
          user_phone,
          user_address,
          type_name,
          deliStatus,
        } = v;
        return (
          <tr
            key={v.orId}
            // orId={orId}
            // date={date}
            // payment_price={payment_price}
            // name={name}
            // user_email={user_email}
            // user_phone={user_phone}
            // user_address={user_address}
            // type_name={type_name}
            // status={status}
          >
            <td>{orId}</td>
            <td>{date}</td>
            <td>{payment_price}</td>
            <td>{name}</td>
            <td>{user_email}</td>
            <td>{user_phone}</td>
            <td>{user_address}</td>
            <td>{type_name}</td>
            <td>{deliStatus}</td>
            <td>
              <OrListDetail orId={orId} />
            </td>
          </tr>
        );
      })}
    </>
  );
}
export default OrderListSellerContent;
