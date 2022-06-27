import React, { Component } from 'react'
import Navbar from '../../component/Navbar'
import Map from '../../assets/img/trackmap.png'
import BackToTop from "../../component/ButtonToTop"
import './Contact.css'
import { connect } from 'react-redux';
import Loading from '../../component/Loading';
import Footer from '../../component/Footer';


const mapStateToProps = (state) => {
  return {
    loadingRedux: state.user.isLoading,
  };
};

class Contact extends Component {
  componentDidMount() { 
    document.title = "Contact Us"
   }
  render() {
    return (
      <>
        {this.props.loadingRedux && <Loading />}
        <Navbar />
        <main className="login-global-container">
          <div className="co-header">
            <div className="co-header-menu">FAQ {'>'} Contact Us</div>
            <div className="co-header-title-container">
              <div className="co-header-title">Contact Us</div>
            </div>
          </div>
          <div className="track-main-container">
            <aside className="track-map-container"><img src={Map} alt="map" className='track-map-img' /></aside>
            <div className="track-main-content">
              <input type="text" name="name" id="name" className='track-input' placeholder='Name' />
              <input type="text" name="email" id="email" className='track-input' placeholder='Your Email' />
              <input type="text" name="website" id="website" className='track-input' placeholder='Your Website' />
              <input type="text" name="plan" id="plan" className='track-input' placeholder='Business Plan' />
              <input type="text" name="message" id="message" className='track-input' placeholder='Message' />
              <div className="contact-button">Send Message</div>
            </div>
          </div>
        </main>
        <BackToTop />
        <Footer/>
      </>
    )
  }
}

export default connect(mapStateToProps)(Contact)