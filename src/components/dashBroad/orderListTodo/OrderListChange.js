import { useState } from "react";

import OrderListEdit from "./OrderListEdit";
import OrListItem from "./OrderListItem";

function OrderListChange({ content, updateTodo }) {
  const [edit, setEdit] = useState(true);

  // 編輯按鈕切換的功能
  const btnEditing = () => {
    setEdit(!edit);
  };

  return (
    <>
      {content.map((v, i) => {
        const {
          id,
          deliStatus,
          deliWay,
          recip_name,
          recip_phone,
          recip_address,
        } = v;
        return edit ? (
          <OrListItem
            deliStatus={deliStatus}
            deliWay={deliWay}
            recip_name={recip_name}
            recip_phone={recip_phone}
            recip_address={recip_address}
            btnEditing={btnEditing}
          />
        ) : (
          <div className="boxes">
            <h3 className="py-3 mt-3">送貨資訊</h3>
            <OrderListEdit
              id={id}
              deliStatus={deliStatus}
              deliWay={deliWay}
              recip_name={recip_name}
              recip_phone={recip_phone}
              recip_address={recip_address}
              updateTodo={updateTodo}
              btnEditing={btnEditing}
            />
          </div>
        );
      })}
    </>
  );
}
export default OrderListChange;
