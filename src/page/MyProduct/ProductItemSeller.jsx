import axios from "axios";

import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { CheckCircle } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { currencyFormatter } from "../../helper/currencyFormatter";

function ProductItemSeller({
  wishlist,
  setDelMsg,
  setLoading,
  handleGetProduct,
}) {
  const { token } = useSelector((state) => state.auth);
  const [deleted, setDeleted] = useState(false);
  const deleteFromServer = (p_id) => {
    setLoading(true);
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_HOST_API}/product/${p_id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        setLoading(false);
        console.log(result.data.message);
        setDelMsg(true);
        setDeleted(true);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    deleteFromServer(id);
    setShow(false);
  };

  //modal prompt logout
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (deleted) {
      handleGetProduct(token);
    }
  },[deleted, handleGetProduct, token]);
  return (
    <>
      <div className="wl-product-item">
        <div className="wl-img-name-container">
          <div className="wl-product-img-container">
            <img
              src={wishlist.images_url}
              alt="product"
              className="wl-product-img"
            />
          </div>
          <div className="wl-product-name">{wishlist.name}</div>
        </div>
        <div className="wl-product-stock">
          {Number(wishlist.stock) > 0 ? (
            <div className="">
              <CheckCircle /> In Stock
            </div>
          ) : (
            <div>sold out</div>
          )}
        </div>
        <div className="wl-product-price-container">
          <div className="wl-product-price">{currencyFormatter.format(wishlist.price) }</div>
          <div className="sp-delete-button" onClick={handleShow}>
            Delete
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="cart-modal-title">Warning !</Modal.Title>
        </Modal.Header>
        <Modal.Body className="cart-modal-body">
          Do you want to delete ?
        </Modal.Body>
        <Modal.Footer>
          <Button className="cart-button-cancel" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className="cart-button-logout"
            onClick={() => handleDelete(wishlist.id)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductItemSeller;
