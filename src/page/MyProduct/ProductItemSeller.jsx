import axios from "axios";
import React, { useEffect, useState } from "react";
import { CheckCircle } from "react-bootstrap-icons";
import Product from "../../assets/img/product.png";

function ProductItemSeller({ products }) {
  const [productImage, setProductImage] = useState([]);

  const handleGetImage = (id) => {
    axios
      .get({
        method: "GET",
        url: `${process.env.REACT_APP_HOST_API}/product/image/id=${id}`,
      })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  // useEffect(() => {
  //   handleGetImage();
  // }, []);
  return (
    <>
      <div className="wl-product-item">
        <div className="wl-img-name-container">
          <div className="wl-product-img-container">
            <img src={Product} alt="product" className="wl-product-img" />
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
