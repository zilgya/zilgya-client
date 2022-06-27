
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { CheckCircle } from "react-bootstrap-icons";


function ProductItemSeller({ products }) {
  //modal prompt logout
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="wl-product-item"  >
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
          <div className="sp-delete-button" onClick={handleShow}>Delete</div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="cart-modal-title">Warning !</Modal.Title>
        </Modal.Header>
        <Modal.Body className="cart-modal-body">Do you want to delete ?</Modal.Body>
        <Modal.Footer>
          <Button className="cart-button-cancel" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="cart-button-logout">
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductItemSeller;
