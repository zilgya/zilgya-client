import React, { useEffect, useState } from "react";
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
  const [isloading, setLoading] = useState(false);

  const { token } = useSelector((state) => state.auth);
  const { isLoading} = useSelector((state)=> state.user)
  // console.log(token)

  const handleGetProduct = (token) => {
    setLoading(true);
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_HOST_API}/product/seller`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        setLoading(false);
        // console.log(result.data.data);
        setProducts(result.data.data);
        console.log(products, "ini dah masok");
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };
  console.log(isloading)
  useEffect(() => {
    document.title = "My Product";
    handleGetProduct(token);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
    {isloading && <Loading />}
    {isLoading && <Loading/>}
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
            
            {products ? (
              products.map((result) => 
                (
                <ProductItemSeller key={result.id} products={result} />
              ))
            ) : (
              <h1>You have no product to display</h1>
            )}
          </div>
        </div>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}

export default MyProduct;
