import React, { Component } from 'react';
import Navbar from '../../component/Navbar/index'
import Footer from '../../component/Footer/index'

// import image
import ArrowDown from '../../assets/icons/arrow-down.png'
import ProductOne from '../../assets/img/home-product-1.png'
import ProductTwo from '../../assets/img/home-product-2.png'
import ProductThree from '../../assets/img/home-product-3.png'
import ProductFour from '../../assets/img/home-product-4.png'
import ProductFive from '../../assets/img/home-product-5.png'
import ProductSix from '../../assets/img/home-product-6.png'
import FooterImgOne from '../../assets/img/home-img-footer-1.png'
import FooterImgTwo from '../../assets/img/home-img-footer-2.png'
import FooterImgThree from '../../assets/img/home-img-footer-3.png'
import FooterImgFour from '../../assets/img/home-img-footer-4.png'



// import css
import './Home.css'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <header>
                    <section className='hm-content-banner-wrapper'>
                        <div className="hm-banner-content-body">
                            <h1 className='hm-banner-title'>Minimal Furniture Store</h1>
                            <p className='hm-banner-body'>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim</p>
                        </div>
                        <div className='hm-banner-content-footer'>
                            <p className='hm-banner-footer'>Explore now</p>
                            <img className='hm-banner-img' src={ArrowDown} alt="" />
                        </div>
                    </section>
                </header>
                <main>
                    <section className='hm-main-content-wrapper'>
                        <div className="hm-main-content">
                            <div className='hm-product-image'>
                                <img src={ProductOne} alt="" />
                            </div>
                            <div className='hm-product-desc'>
                                <h1 className='hm-product-desc-title'>Mid-Century 1929 Sofa with Pilow</h1>
                                <p className='hm-product-desc-body'>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam</p>
                                <div className='hm-product-desc-footer-wrapper'>
                                    <div className='underline-main'></div>
                                    <p className='hm-product-desc-footer'>SHOP NOW</p>
                                </div>
                            </div>
                        </div>
                        <div className="hm-main-content">
                            <div className='hm-product-desc'>
                                <h1 className='hm-product-desc-title'>Mini Modern Lamp</h1>
                                <p className='hm-product-desc-body'>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam</p>
                                <div className='hm-product-desc-footer-wrapper'>
                                    <div className='underline-main'></div>
                                    <p className='hm-product-desc-footer'>SHOP NOW</p>
                                </div>
                            </div>
                            <div className='hm-product-image'>
                                <img src={ProductTwo} alt="" />
                            </div>
                        </div>
                        <div className="hm-main-content">
                            <div className='hm-product-image'>
                                <img src={ProductThree} alt="" />
                            </div>
                            <div className='hm-product-desc'>
                                <h1 className='hm-product-desc-title'>Blue Living Vintage Chair</h1>
                                <p className='hm-product-desc-body'>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam</p>
                                <div className='hm-product-desc-footer-wrapper'>
                                    <div className='underline-main'></div>
                                    <p className='hm-product-desc-footer'>SHOP NOW</p>
                                </div>
                            </div>
                        </div>
                        <div className="hm-main-content">
                            <div className='hm-product-desc'>
                                <h1 className='hm-product-desc-title'>Japanese style blue ceramic</h1>
                                <p className='hm-product-desc-body'>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam</p>
                                <div className='hm-product-desc-footer-wrapper'>
                                    <div className='underline-main'></div>
                                    <p className='hm-product-desc-footer'>SHOP NOW</p>
                                </div>
                            </div>
                            <div className='hm-product-image'>
                                <img src={ProductFour} alt="" />
                            </div>
                        </div>
                        <div className="hm-main-content">
                            <div className='hm-product-image'>
                                <img src={ProductFive} alt="" />
                            </div>
                            <div className='hm-product-desc'>
                                <h1 className='hm-product-desc-title'>Japanese plate floral</h1>
                                <p className='hm-product-desc-body'>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam</p>
                                <div className='hm-product-desc-footer-wrapper'>
                                    <div className='underline-main'></div>
                                    <p className='hm-product-desc-footer'>SHOP NOW</p>
                                </div>
                            </div>
                        </div>
                        <div className="hm-main-content">
                            <div className='hm-product-desc'>
                                <h1 className='hm-product-desc-title'>Modern Floor Lamp</h1>
                                <p className='hm-product-desc-body'>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam</p>
                                <div className='hm-product-desc-footer-wrapper'>
                                    <div className='underline-main'></div>
                                    <p className='hm-product-desc-footer'>SHOP NOW</p>
                                </div>
                            </div>
                            <div className='hm-product-image'>
                                <img src={ProductSix} alt="" />
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                    <section className='hm-footer-wrapper'>
                        <div className='hm-footer-content'>
                            <div className='hm-footer-body'>
                                <p className='hm-footer-desc'>Gave 5 stars for excellent customer service. I had a couple of questions which they replied quickly to answer. If I could give multiple reasons for my rating it would also be for the design quality and customization to go along with the great service. The theme is excellent, keep up the great work.</p>
                                <div className='underline-footer'></div>
                                <p className='hm-footer-desc-footer'>Trevor Rivera - CEO IKEA</p>
                            </div>
                            <div className='hm-footer-footer'>
                                <img src={FooterImgOne} alt="" />
                                <img src={FooterImgTwo} alt="" />
                                <img src={FooterImgThree} alt="" />
                                <img src={FooterImgFour} alt="" />
                            </div>
                        </div>
                    </section>
                </footer>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;