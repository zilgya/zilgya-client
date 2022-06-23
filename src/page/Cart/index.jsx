import React, { Component } from 'react';
import Footer from '../../component/Footer';
import Navbar from '../../component/Navbar';

import './Cart.css'
class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <header className='login-global-container'>
                    <div className="co-header">
                        <div className="cart-header-endpoint">Cart {'>'}</div>
                    </div>
                    <div className='co-header-title-container'>
                        <div className="login-header-title">Your Cart</div>
                        <div className="login-header-info">Buy everything in your cart now!</div>
                    </div>
                </header>
                <main className='cart-container'>
                    <div className='cart-main-content-left'>
                        <div>asdasdasdas</div>
                    </div>
                    <div className='cart-main-content-right'>
                        <div className='cart-main-content-right-title'>
                            <div>Cart Total</div>
                        </div>
                        <div className="cart-main-content-right-body">
                            <div className='subtotal'>
                                <div>Subtotal</div>
                                <div>$125</div>
                            </div>
                            <div className="shipping">
                                <div>Shipping</div>
                                <div className='shipping-input'>
                                    <input type="radio" />
                                    <label htmlFor="">Flat rate: $10</label>
                                    <input type="radio" />
                                    <label htmlFor="">Free Shipping</label>
                                    <input type="radio" />
                                    <label htmlFor="">Local pickup</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Cart;