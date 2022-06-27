import React, { useCallback, useEffect, useState } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import { Link } from "react-router-dom";
import BackToTop from "../../component/ButtonToTop";

import "./MyProduct.css";
import ProductItemSeller from "./ProductItemSeller";
import { useSelector } from "react-redux";
import axios from "axios";

import Loading from "../../component/Loading";

function MyProduct() {
  const [products, setProducts] = useState([]);
  const [loadingOrder, setLoadingOrder] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [delMsg, setDelMsg] = useState("false");
  // eslint-disable-next-line no-unused-vars
  const [emptyMsg, setEmptyMsg] = useState("");

  const { token } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.user);

  // console.log(delMsg);
  const handleGetProduct = useCallback((token) => {
    setLoadingOrder(true);
    
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_HOST_API}/product/seller`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        setLoadingOrder(false);
        setProducts(result.data.data);
        console.log(products, "ini dah masok");
      })
      .catch((error) => {
        setLoadingOrder(false);
        console.error(error)
        setEmptyMsg(error.response.data.err)
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(products.length);
  useEffect(() => {
    document.title = "My Product";
    handleGetProduct(token);
    if(delMsg){
      handleGetProduct(token)
    }
  }, [delMsg, handleGetProduct, token]);
  return (
    <>
      {loadingOrder && <Loading />}
      {isLoading && <Loading />}
      <Navbar />
      <main className="login-global-container">
        <div className="login-header">
          <div className="login-header-title">My Product</div>
          <div className="login-header-info">
            See your notifications for the latest updates
          </div>
        </div>
        <div className="profile-seller-navbar">
          <Link to="/profile">
            <div className="profile-seller-navbar-inactive">Profile</div>
          </Link>
          <Link to="/seller/myproduct">
            <div className="profile-seller-navbar-active">My Product</div>
          </Link>
          <Link to="/seller/sellproduct">
            <div className="profile-seller-navbar-inactive">
              Selling Product
            </div>
          </Link>
          <Link to="/seller/myorder">
            <div className="profile-seller-navbar-inactive">My Order</div>
          </Link>
        </div>
        <div className="wl-main-content">
          <div className="wl-col-name">
            <div className="wl-col-product">Product</div>
            <div className="wl-col-status">Stock Status</div>
            <div className="wl-col-price">Price</div>
          </div>
          <div className="wl-product-container">
            {Array.isArray(products) ? (
              products.map((result) => (
                <ProductItemSeller
                  key={result.id}
                  wishlist={result}
                  setDelMsg={setDelMsg}
                  setLoading={setLoadingOrder}
                  handleGetProduct={handleGetProduct}
                />
              ))
            ) : <></> }
            {products.length === 0 && <h1 style={{textAlign: "center", marginTop: '10px'}}>You have no product to display</h1>}
          </div>
        </div>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}

export default MyProduct;
