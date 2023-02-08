import OrderComponent from "./OrderComponent";

function OrderItem({ content }) {
  return (
    <>
      {content.map((v, i) => {
        const {
          user_id,
          orId,
          company_name,
          date,
          payment_price,
          type_name,
          deliStatus,
        } = v;
        return (
          <tr
            user_id={user_id}
            key={orId}
            company_name={company_name}
            date={date}
            payment_price={payment_price}
            type_name={type_name}
            deliStatus={deliStatus}
          >
            <OrderComponent
              user_id={user_id}
              orId={orId}
              company_name={company_name}
              date={date}
              payment_price={payment_price}
              type_name={type_name}
              deliStatus={deliStatus}
            />
          </tr>
        );
      })}
    </>
  );
}
export default OrderItem;
