import React, { Component } from 'react';
import Navbar from '../../component/Navbar';

//import icon
import Fb from '../../assets/icons/fb-icon.png'
import Twitter from '../../assets/icons/twitter-icon.png'
import Web from '../../assets/icons/web-icon.png'
import Yt from '../../assets/icons/yt-icon.png'


import './ComingSoon.css'

class ComingSoon extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='cs-container'>
                    <Navbar />
                    <section className='black-theme'>
                        <main className='cs-wrapper'>
                            <div className='cs-title'>We're Building Something New</div>
                            <div className='cs-body-wrapper'>
                                <div className='cs-body'>
                                    <div className='cs-number'>09</div>
                                    <div className='cs-desc'>Days</div>
                                </div>
                                <div className='cs-body'>
                                    <div className='cs-number'>18</div>
                                    <div className='cs-desc'>Hours</div>
                                </div>
                                <div className='cs-body'>
                                    <div className='cs-number'>37</div>
                                    <div className='cs-desc'>Mins</div>
                                </div>
                                <div className='cs-body'>
                                    <div className='cs-number'>56</div>
                                    <div className='cs-desc'>Secs</div>
                                </div>
                            </div>
                            <div className='cs-footer'>
                                <div>Your Email</div>
                                <div>Subscribe</div>
                            </div>
                        </main>
                        <footer className='cs-wrapper-footer'>
                            <div className='cs-logo-footer'>ZILGYA</div>
                            <div className='cs-footer-desc'>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo.</div>
                            <div className='wrapper-sosmed'>
                                <img src={Fb} alt="" />
                                <img src={Twitter} alt="" />
                                <img src={Yt} alt="" />
                                <img src={Web} alt="" />
                            </div>
                        </footer>
                    </section>
                </div>
            </React.Fragment>
        );

    }
}

export default ComingSoon