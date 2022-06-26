
import React from "react";
import { CheckCircle } from "react-bootstrap-icons";


function ProductItemSeller({ products }) {
  
  return (
    <>
      <div className="wl-product-item">
        <div className="wl-img-name-container">
          <div className="wl-product-img-container">
            <img src={products.images_url} alt="product" className="wl-product-img" />
          </div>
          <div className="wl-product-name">{products.name}</div>
        </div>
        <div className="wl-product-stock">
          {Number(products.stock) > 0 ? (
            <div className="">
              <CheckCircle /> In Stock
            </div>
          ) : (
            <div>sold out</div>
          )}
        </div>
        <div className="wl-product-price-container">
          <div className="wl-product-price">{products.price}</div>
          <div className="sp-delete-button">Delete</div>
        </div>
      </div>
    </>
  );
}

export default ProductItemSeller;
