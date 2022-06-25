import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConfirmEmail from "../page/Auth/ConfirmEmail";
import Blog from "../page/Blog";
import Cart from "../page/Cart";
import Checkout from "../page/Checkout";
import ComingSoon from "../page/ComingSoon";
import Faq from "../page/Faq";
import Favorite from "../page/Favorite";
import Home from "../page/Home";
import Login from "../page/Login";
import MyOrder from "../page/MyOrder";
import MyProduct from "../page/MyProduct";
import OrderTrack from "../page/OrderTrack";
import PageNotFound from "../page/PageNotFound";
import Product from "../page/Product";
import ProductDetail from "../page/ProductDetail";
import Profile from "../page/Profile";
import SellProduct from "../page/SellProduct";
import Wishlist from "../page/Wishlist";
import PrivateElement from "../component/PrivateElement/PrivateElement";
import PrivateElementAfterLogin from "../component/PrivateElement/PrivateElementAfterLogin";
import PrivateElementAfterLoginSeller from "../component/PrivateElement/PrivateElementAfterLoginSeller";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth"
          element={
            <PrivateElementAfterLogin>
              <Login />
            </PrivateElementAfterLogin>
          }
        />
        <Route path="/auth/confirm/:token" element={<ConfirmEmail />} />
        <Route
          path="/profile"
          element={
            <PrivateElement>
              <Profile />
            </PrivateElement>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/checkout"
          element={
            <PrivateElement>
              <Checkout />
            </PrivateElement>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateElement>
              <Wishlist />
            </PrivateElement>
          }
        />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/track" element={<OrderTrack />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route
          path="/seller/myproduct"
          element={
            <PrivateElementAfterLoginSeller>
              <MyProduct />
            </PrivateElementAfterLoginSeller>
          }
        />
        <Route
          path="/seller/sellproduct"
          element={
            <PrivateElementAfterLoginSeller>
              <SellProduct />
            </PrivateElementAfterLoginSeller>
          }
        />
        <Route
          path="/seller/myorder"
          element={
            <PrivateElementAfterLoginSeller>
              <MyOrder />
            </PrivateElementAfterLoginSeller>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
