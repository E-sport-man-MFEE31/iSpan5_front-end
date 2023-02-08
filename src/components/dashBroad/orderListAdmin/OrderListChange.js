import { useState } from "react";

import OrlistEdit from "./OrderListEdit";
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
          type_name,
          dStatus,
          name,
          user_phone,
          user_address,
        } = v;
        return edit ? (
          <OrListItem
            type_name={type_name}
            dStatus={dStatus}
            name={name}
            user_phone={user_phone}
            user_address={user_address}
            btnEditing={btnEditing}
          />
        ) : (
          <div className="boxes">
            <h3 className="py-3 mt-3">送貨資訊</h3>
            <OrlistEdit
              id={id}
              name={name}
              type_name={type_name}
              dStatus={dStatus}
              user_phone={user_phone}
              user_address={user_address}
              updateTodo={updateTodo}
            />
          </div>
        );
      })}
    </>
  );
}
export default OrderListChange;
