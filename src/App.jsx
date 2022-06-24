import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
// import './App.css';
import Login from "./page/Login";
import Home from "./page/Home";
import Profile from "./page/Profile";
import Product from "./page/Product";
import Cart from "./page/Cart";
import Checkout from "./page/Checkout";
import ProductDetail from "./page/ProductDetail";
import Wishlist from "./page/Wishlist";
import Favorite from "./page/Favorite";
import OrderTrack from "./page/OrderTrack";
import Blog from "./page/Blog";
import Faq from "./page/Faq";
import PageNotFound from "./page/PageNotFound";
import ComingSoon from "./page/CommingSoon";
import MyProduct from "./page/MyProduct";
import SellProduct from "./page/SellProduct";
import MyOrder from "./page/MyOrder";

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/track" element={<OrderTrack />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/seller/myproduct" element={<MyProduct />} />
            <Route path="/seller/sellproduct" element={<SellProduct />} />
            <Route path="/seller/myorder" element={<MyOrder />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
