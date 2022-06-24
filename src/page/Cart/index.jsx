import React, { Component } from 'react';
import Footer from '../../component/Footer';
import Navbar from '../../component/Navbar';

import CartProductOne from '../../assets/img/cart-product-1.png'
// import CartProductTwo from '../../assets/img/cart-product-2.png'

import './Cart.css'
class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <header className='login-global-container'>
                    <div className="co-header">
                        <div className="cart-header-endpoint">Cart {'>'}</div>
                        <div className='co-header-title-container'>
                            <div className="co-header-title">Your Cart</div>
                            <div className="co-header-info">Buy everything in your cart now!</div>
                        </div>
                    </div>
                </header>
                <main className='cart-container'>
                    <div className='cart-main-content-left'>
                        <div className='cart-main-content-left-title'>
                            <div className='cart-main-content-left-title-product'>PRODUCTS</div>
                            <div className='cart-main-content-left-title-price'>PRICE</div>
                            <div className='cart-main-content-left-title-quantity'>QUANTITY</div>
                            <div className='cart-main-content-left-title-total'>TOTAL</div>
                        </div>
                        <div className='cart-main-content-left-body'>
                            <div className='cart-main-content-product-delete-img-name'>
                                <div className='cart-main-content-delete-product'>X</div>
                                <img src={CartProductOne} alt="product-img" />
                                <div className='cart-main-content-product-name'>Fabric Mid Century Chair</div>
                            </div>
                            <div className='cart-main-content-product-price'>$10.50</div>
                            <div className='cart-main-content-product-wrapper-quantity'>
                                <div>-</div>
                                <div className='cart-main-content-product-quantity'>02</div>
                                <div>+</div>
                            </div>
                            <div className='cart-main-content-product-total'>$21.00</div>
                        </div>
                        <div className='underline-cart-product'></div>
                        <div className='cart-main-content-left-footer'>
                            <div className='cart-main-content-promo'>
                                <input type="text" placeholder='Enter your coupon code' className='enter-promo' />
                                <div className='apply-promo'>Apply Coupon</div>
                            </div>
                            <div className='cart-main-content-clear-update'>
                                <div className='cart-clear'>Clear Cart</div>
                                <div className='cart-update'>Update Cart</div>
                            </div>
                        </div>
                    </div>
                    <div className='cart-main-content-right'>
                        <div className='cart-main-content-right-title'>
                            <div className='cart-total'>Cart Total</div>
                        </div>
                        <div className="cart-main-content-right-body">
                            <div className='subtotal'>
                                <div className='subtotal-title'>Subtotal</div>
                                <div className='subtotal-body'>$125</div>
                            </div>
                            <div className="shipping">
                                <div className='shipping-title'>Shipping</div>
                                <div className='shipping-input'>
                                    <input type="radio" />
                                    <label htmlFor="">Flat rate: $10</label>
                                    <input type="radio" />
                                    <label htmlFor="">Free Shipping</label>
                                    <input type="radio" />
                                    <label htmlFor="">Local pickup</label>
                                </div>
                            </div>
                            <div className='underline-cart'></div>
                            <div className='subtotal'>
                                <div className='subtotal-title'>Total Price</div>
                                <div className='subtotal-body'>$125</div>
                            </div>
                        </div>
                        <div className='btn-checkout'>Procced To Check Out</div>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Cart;