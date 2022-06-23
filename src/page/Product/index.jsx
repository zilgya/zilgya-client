import React, { Component } from 'react';
import Navbar from '../../component/Navbar/index'
import Footer from '../../component/Footer/index';
import CardProducts from './CardProducts';

import './Product.css'
class Product extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <header className='pd-banner-wrapper'>
                    <section className='pd-banner-img-background'>
                        <div className="pd-banner-content-header">
                            <p>Shop {'>'} Shop Right Sidebar</p>
                        </div>
                        <div className="pd-banner-content-body">
                            <h1>Let’s Shopping</h1>
                            <p>Find and buy the one you like</p>
                        </div>
                    </section>
                </header>
                <main className='container-main-content'>
                    <aside className='pd-main-content-left'>
                        <div className="pd-category-left-content">
                            <h4>Categories</h4>
                            <div className="pd-main-content-category-value">
                                <div className='pd-main-content-category-value-right'>Accessories</div>
                                <div className='pd-main-content-category-value-left'>5</div>
                            </div>
                            <div className="pd-main-content-category-value">
                                <div className='pd-main-content-category-value-right'>Accessories</div>
                                <div className='pd-main-content-category-value-left'>5</div>
                            </div>
                            <div className="pd-main-content-category-value">
                                <div className='pd-main-content-category-value-right'>Accessories</div>
                                <div className='pd-main-content-category-value-left'>5</div>
                            </div>
                            <div className="pd-main-content-category-value">
                                <div className='pd-main-content-category-value-right'>Accessories</div>
                                <div className='pd-main-content-category-value-left'>5</div>
                            </div>
                            <div className="pd-main-content-category-value">
                                <div className='pd-main-content-category-value-right'>Accessories</div>
                                <div className='pd-main-content-category-value-left'>5</div>
                            </div>
                        </div>
                        <div className="pd-price-left-content">
                            <h4>Price</h4>
                            <p>Price $39 - $159</p>
                            <button className='pd-button-filter'>FILTER</button>
                        </div>
                        <div className='pd-brand-left-content'>
                            <h4>Brands</h4>
                            <div className='input-brands-left-content'>
                                <input type="checkbox" name="brands" id="brands" />
                                <label htmlFor="brands">IKEA</label>
                            </div>
                            <div className='input-brands-left-content'>
                                <input type="checkbox" name="brands" id="brands" />
                                <label htmlFor="brands">IKEA</label>
                            </div>
                            <div className='input-brands-left-content'>
                                <input type="checkbox" name="brands" id="brands" />
                                <label htmlFor="brands">IKEA</label>
                            </div>
                            <div className='input-brands-left-content'>
                                <input type="checkbox" name="brands" id="brands" />
                                <label htmlFor="brands">IKEA</label>
                            </div>
                            <div className='input-brands-left-content'>
                                <input type="checkbox" name="brands" id="brands" />
                                <label htmlFor="brands">IKEA</label>
                            </div>
                        </div>
                    </aside>
                    <aside className='pd-main-content-right'>
                        <header className='pd-main-header-right'>
                            <p>Showing 1-16 of 39 Results</p>
                            <div>Sort by</div>
                        </header>
                        <div className='card-wrapper'>
                            <CardProducts />
                            <CardProducts />
                            <CardProducts />
                        </div>
                    </aside>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Product;