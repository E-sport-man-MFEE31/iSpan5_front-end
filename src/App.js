import Register from "./components/register/Register";
import Checkout from "./components/checkout/Checkout";
import Page404 from "./components/page404/Page404";
import Products from "./components/products/Products";
import CheckoutSuccess from "./components/checkout/checkoutSuccess/CheckoutSuccess";
import DashBroad from "./components/dashBroad/DashBroad";
import OrderDetail from "./components/orderDetail/OrderDetail";
import OrderList from "./components/orderList/OrderList";
import Coupon from "./components/coupon/Coupon";
import SignIn from "./components/signIn/SignIn";
import Profile from "./components/profile/Profile";
import Cart2 from "../src/components/checkout/cart2/Cart2";
import Cart3 from "../src/components/checkout/cart3/Cart3";
import BankTransfer from "../src/components/checkout/bankTransfer/BankTransfer";
import PromotionProductPage1 from "./components/homePage/PromotionProductPage1";
import News01 from "./components/homePage/News01";
import News02 from "./components/homePage/News02";
import VerifySeller from "./components/verifySeller/VerifySeller";

import { DataProvider } from "./utils/useData";
import { AuthProvider } from "./utils/useAuth";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <>
      <AuthProvider>
        <DataProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<PromotionProductPage1 />}
              ></Route>
              <Route
                path="/News01"
                element={<News01 />}
              ></Route>
              <Route
                path="/News02"
                element={<News02 />}
              ></Route>
              <Route
                path="/SignIn"
                element={<SignIn />}
              ></Route>
              <Route
                path="/register"
                element={<Register />}
              ></Route>
              <Route
                path="/product"
                element={<Products />}
              ></Route>
              <Route
                path="/profile/verifySeller"
                element={<VerifySeller />}
              />
              <Route
                path="/checkout/success"
                element={<CheckoutSuccess />}
              ></Route>
              <Route
                path="/:user_id/orders/:orId"
                element={<OrderDetail />}
              />

              <Route
                path="/profile/orders"
                element={<OrderList />}
              ></Route>
              <Route
                path="/profile/coupon"
                element={<Coupon />}
              ></Route>
              <Route
                path="/profile"
                element={<Profile />}
              />
              <Route
                path="/bank-transfer"
                element={<BankTransfer />}
              />
              <Route path="/cart" element={<Checkout />} />
              <Route path="/cart2" element={<Cart2 />} />
              <Route path="/cart3" element={<Cart3 />} />
              <Route
                path="/admin"
                element={<DashBroad />}
              ></Route>
              <Route
                path="/dashboard/orderSeller/:sellerid"
                element={<DashBroad />}
              />
              <Route path="*" element={<Page404 />}></Route>
            </Routes>
          </BrowserRouter>
        </DataProvider>
      </AuthProvider>
    </>
  );
};

export default App;
