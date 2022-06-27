import axios from "axios";
import React from "react";
import { CheckCircle } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { currencyFormatter } from "../../helper/currencyFormatter";

function WishlistItem({ wishlist, setLoading, setUpdate }) {

  const { token } = useSelector((state) => state.auth);
  const deleteFromServer = (w_id) => {
    setLoading(true)
    setUpdate(false)
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_HOST_API}/wishlist/${w_id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((result) => {
        setLoading(false)
        setUpdate(true)
        console.log(`${result.data.message} ${w_id}`);
        // setDelMsg(result.data.message);
      })
      .catch((error) => {
        setLoading(false)
        setUpdate(false)
        console.error(error)});
  };
  const handleDelete = (id) => {
    setTimeout(() => {
      deleteFromServer(id)
    }, 500);
  };

  return (
    <div>
      <div className="wl-product-item">
        <div className="wl-img-name-container">
          <div className="wl-product-img-container">
            <img src={wishlist.image} alt="product" className="wl-product-img" />
          </div>
          <div className="wl-product-name">{wishlist.name}</div>
        </div>
        <div className="wl-product-stock">
          {Number(wishlist.stock) > 0 ? (
            <div className="in-stock-wrapper">
              <CheckCircle /> In Stock
            </div>
          ) : (
            <div className="sold-out-wrapper">Sold Out</div>
          )}
        </div>
        <div className="wl-product-price-container" style={{gap: '10px'}}>
          <div className="wl-product-price">{currencyFormatter.format(wishlist.price)}</div>
          <div className="sp-delete-button" onClick={()=>handleDelete(wishlist.product_id)}>Delete</div>
          <div className="wl-addcart-button">Add to cart</div>
        </div>
      </div>
    </div>
  );
}

export default WishlistItem;
