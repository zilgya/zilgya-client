import React, { Component } from 'react'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
import './OrderTrack.css'
import Map from '../../assets/img/trackmap.png'
import { connect } from 'react-redux'
import Loading from '../../component/Loading'

const mapStateToProps = (state) => {
  return {
    loadingRedux: state.user.isLoading,
  };
};
class OrderTrack extends Component {
  render() {
    return (
      <>
      {this.props.loadingRedux&& <Loading/>}
        <Navbar />
        <main className="login-global-container">
          <div className="co-header">
            <div className="co-header-menu">Tracking {'>'}</div>
            <div className="co-header-title-container">
              <div className="co-header-title">Order Tracking</div>
              <div className="co-header-info">Track where your order arrived</div>
            </div>
          </div>
          <div className="track-main-container">
            <aside className="track-map-container"><img src={Map} alt="map" className='track-map-img' /></aside>
            <div className="track-main-content">
              <div className="track-main-paragraph">To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</div>
              <label htmlFor="order" className='track-label'>Order ID</label>
              <input type="text" className='track-input' placeholder='Found in your order confirmation email.' />
              <label htmlFor="order" className='track-label'>Billing Email</label>
              <input type="text" className='track-input' placeholder='Email you used during checkout' />
              <div className="track-button">Track Now</div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}

export default connect(mapStateToProps)(OrderTrack)