import OrlistDetail from "./OrderListDetail";

function OrderListSellerContent({ content }) {
  return (
    <>
      {content.map((v, i) => {
        const {
          orId,
          date,
          payment_price,
          recip_name,
          recip_email,
          recip_phone,
          recip_address,
          type_name,
          deliStatus,
        } = v;
        return (
          <tr key={v.orId}>
            <td>{orId}</td>
            <td>{date}</td>
            <td>{payment_price}</td>
            <td>{recip_name}</td>
            <td>{recip_email}</td>
            <td>{recip_phone}</td>
            <td>{recip_address}</td>
            <td>{type_name}</td>
            <td>{deliStatus}</td>
            <td>
              <OrlistDetail orId={orId} />
            </td>
          </tr>
        );
      })}
    </>
  );
}
export default OrderListSellerContent;
