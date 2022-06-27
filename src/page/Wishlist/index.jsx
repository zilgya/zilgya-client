import React, {  useState } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import "./Wishlist.css";
import BackToTop from "../../component/ButtonToTop"
import './Wishlist.css'

import { useSelector } from "react-redux";
import Loading from "../../component/Loading";
import axios from "axios";
import WishlistItem from "./WishlistItem";
import { useEffect } from "react";
import { useCallback } from "react";


const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loadingWishlist, setLoadingWishlist] = useState(false);
  const [update, setUpdate] = useState(false)
  const loadingRedux = useSelector((state) => state.user.isLoading);
  const { token } = useSelector((state) => state.auth);

  const handleGetWishlist = useCallback( () => {
    setLoadingWishlist(true);
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_HOST_API}/wishlist`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        console.log(result.data.data);
        setWishlist(result.data.data);
        setLoadingWishlist(false);
      })
      .catch((error) => {
        setLoadingWishlist(false)
        console.error(error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  useEffect(() => {
    document.title = 'Wishlist'
    handleGetWishlist(token);
    if(update){
      handleGetWishlist(token)
    }
  },[handleGetWishlist, token, update]);

  return (
    <>
      {loadingRedux && <Loading />}
      {loadingWishlist && <Loading/>}
      <Navbar />
      <main className="login-global-container">
        <div className="co-header">
          <div className="co-header-menu">Wishlist {">"}</div>
          <div className="co-header-title-container">
            <div className="co-header-title">Wishlist</div>
            <div className="co-header-info">Pay and get your ordered items</div>
          </div>
        </div>
        <div className="wl-main-content">
          <div className="wl-col-name">
            <div className="wl-col-product">Product</div>
            <div className="wl-col-status">Stock Status</div>
            <div className="wl-col-price">Price</div>
          </div>
          <div className="wl-product-container">
            {Array.isArray(wishlist) ? (
              wishlist.map((result, index) => (
                <WishlistItem
                  key={index}
                  wishlist={result}
                  setLoading={setLoadingWishlist}
                  setUpdate={setUpdate}
                />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </main>
      <BackToTop/>
      <Footer />
    </>
  );
};

export default Wishlist;
