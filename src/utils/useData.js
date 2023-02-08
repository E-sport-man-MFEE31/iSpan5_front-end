import React, {
  useState,
  useContext,
  createContext,
} from "react";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  // cart
  const [ShippingWays, setShippingWays] = useState({
    location: "請選擇",
    ship: "請選擇",
    payment: "請選擇",
    overseaShip: "請選擇",
    overseaPayment: "請選擇",
  });
  const [coupon, setCoupon] = useState({
    couponValue: "請選擇",
  });
  // cart2
  const [values, setValues] = useState({
    name: "請選擇",
    phone: "請選擇",
    adsress: "請選擇",
  });
  const [store, setStore] = useState({
    storeName: "請選擇",
    storeAddress: "請選擇",
  });
  const [orderMemo, setOrderMemo] = useState({ memo: "" });

  // const [invoice, setInvoice] = useState({type:'',sites:''})

  return (
    <DataContext.Provider
      value={{
        ShippingWays,
        setShippingWays,
        coupon,
        setCoupon,
        values,
        setValues,
        store,
        setStore,
        orderMemo,
        setOrderMemo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
