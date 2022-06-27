import React, { Component } from 'react';
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import { connect } from "react-redux";
import Loading from "../../component/Loading";
import BackToTop from "../../component/ButtonToTop";

//assets
import AboutImg from "../../assets/img/about-img.png";
import CsOne from "../../assets/img/cs2.png";
import Hope from "../../assets/img/J-Hope.jpg";
import Jimin from "../../assets/img/Jimin.jpg";
import Jin from "../../assets/img/Jin.jpg"
import Rm from "../../assets/img/RM.jpg"
import Suga from "../../assets/img/Suga.jpg"
import V from "../../assets/img/V.jpg"

//style
import "./about.css"

const mapStateToProps = (state) => {
  return {
    loadingRedux: state.user.isLoading,
  };
};

export class AboutUs extends Component { 
  render() {
    return (
     <>
      {this.props.loadingRedux&& <Loading/>}
      <Navbar />
        <main>
          <div className="co-header">
            <div className="co-header-menu">About Us {">"}</div>
            <div className="co-header-title-container">
            <div className="co-header-title">About Us</div>              
            </div>
          </div>
          <section>
            <div className="d-flex flex-wrap">
              <div className="col-md-6 p-5 about-desc-content">
                <h1>
               ZILGYA- Modern Furniture
                </h1>
                <p>
                Quisque at justo sagittis, semper lacus a, iaculis tellus. Fusce tempor, leo vel iaculis aliquet, dui turpis maximus tellus, commodo congue Nam fermentum, augue eget pulvinar ullamcorper, dui purus ornare nibh, eu congue ligula felis nec diam liquam mollis nibh eu
                </p>
                <ul>
                  <li>Fusce risus ligula, semper et ultricies vitae</li>
                  <li>Vivamus eget ante id velit varius lacinia</li>
                </ul>
                <p>
              Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue molestie eu et velit. Praesent gravida magna eget interdum iaculis. Aliquam erat volutpat. Integer placerat ipsum quis malesuada vehicula. Vestibulum
              </p>
              </div>
              <div className="col-md-6 p-5 about-content">
              <img src={AboutImg} alt="about-img" />
              </div>
            </div>
          </section>
          <section>
            <div className="col-md-12 p-5 text-center">
              <h1 className="p-5">
              Why Should Choose Us?
              </h1>
              <div className="d-flex flex-wrap">
                <div className="col-md-4 p-5">
                <h2>
                Unique Design
                </h2>
                <p>
                Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue
                </p>
                </div>
                <div className="col-md-4 p-5">
                <h2>
                Good Wararanty Policy
                </h2>
                <p>
                Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue
                </p>
                </div>
                <div className="col-md-4 p-5">
                <h2>
                Handcrafted Quality
                </h2>
                <p>
                Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue
                </p>
                </div>               
              </div>
              <div className="d-flex flex-wrap">
                <div className="col-md-4 p-5">
                <h2>
                Dedicated Support
                </h2>
                <p>
                Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue
                </p>
                </div>
                <div className="col-md-4 p-5">
                <h2>
                Amazing Features
                </h2>
                <p>
                Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue
                </p>
                </div>
                <div className="col-md-4 p-5">
                <h2>
                Easy Customized
                </h2>
                <p>
                Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue
                </p>
                </div>               
              </div>
            </div>
          </section>
          <section>
            <div className="col-md-12 text-center">
              <h1 className="p-5">
                Meet Our Team
              </h1>
              <div className="d-flex flex-wrap p-5" >
              <div className="col-md-4 team-content-zilgya">
                <img src={Hope} alt="" />
                <h5>Achmad Rasidi</h5>
                <p>--</p>
              </div>
              <div className="col-md-4 team-content-zilgya">
                <img src={Rm} alt="" />
                <h5>
                  Ilham Nurrohman
                </h5>
                <p>--</p>
              </div>
              <div className="col-md-4 team-content-zilgya">
                <img src={Suga} alt="" />
                <h5>
                Lukman Dwi Susanto
                </h5>
                <p>--</p>
              </div>              
              <div className="col-md-4 team-content-zilgya">
                <img src={V} alt="" />
                <h5>Ghofar Asnanto</h5>
                <p>--</p>
              </div>
              <div className="col-md-4 team-content-zilgya">
                <img src={Jin} alt="" />
                <h5>
                Yoga Arta Grahanantyo
                </h5>
                <p>--</p>
              </div>
              <div className="col-md-4 team-content-zilgya">
                <img src={Jimin} alt="" />
                <h5>
                Zul Fahmi Alfin
                </h5>
                <p>--</p>
              </div>
              </div>             
            </div>
          </section>
          <section>
            <div className="text-center p-5 back-comment-about">
              <h4 className='p-3'>
              “Gave 5 stars for excellent customer service. I had a couple of questions which they replied quickly to answer. If I could give multiple reasons for my rating it would also be for the design quality and customization to go along with the great service. The theme is excellent, keep up the great work."
              </h4>
              <img src={CsOne} alt="" />
              <p>
              Trevor Rivera - Calinofrnia
              </p>
            </div>
          </section>
          </main>
          <BackToTop />
        <Footer />
     </>
    )
  }
}

export default connect(mapStateToProps)(AboutUs) 