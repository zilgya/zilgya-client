import React, { Component } from "react";
import "./desctab.css";
import { Tabs, Tab } from "react-bootstrap";

import Banner from "../../assets/img/home-product-3.png";
import CusSatu from "../../assets/img/cs1.png";

export class DescTab extends Component {
  render() {
    return (
      <>
        <div className="tab-wrapper">
          <div className="container-fluid">
            <div className="row d-flex">
              <div className="col-sm-12 nav-tab-desc">
                <Tabs
                //   defaultActiveKey="description"
                  className="bg-transparent tab-active"
                >
                  <Tab eventKey="description" title="Description">
                    <div className="row">
                      <div className="col-lg-7 order-2">
                        <div className="decription-content pr-5">
                          <p>
                            Donec accumsan auctor iaculis. Sed suscipit arcu
                            ligula, at egestas magna molestie a. Proin ac ex
                            maximus, ultrices justo eget, sodales orci. Aliquam
                            egestas libero ac turpis pharetra, in vehicula lacus
                            scelerisque. Vestibulum ut sem laoreet, feugiat
                            tellus at, hendrerit arcu..
                          </p>
                          <ul className="list-container flex-column">
                            <li className="list-items">
                              <span className="list-icon">
                                <i className="fa fa-circle"></i>
                              </span>
                              <span className="list-text">
                                Maecenas eu ante a elit tempus fermentum.
                                Aliquam commodo tincidunt semper
                              </span>
                            </li>
                            <li className="list-items">
                              <span className="list-icon">
                                <i className="fa fa-circle"></i>
                              </span>
                              <span className="list-text">
                                Aliquam est et tempus. Eaecenas libero ante,
                                tincidunt vel
                              </span>
                            </li>
                          </ul>
                          <p className="py-4">
                            Nunc lacus elit, faucibus ac laoreet sed, dapibus ac
                            mi. Maecenas eu ante a elit tempus fermentum.
                            Aliquam commodo tincidunt semper. Phasellus
                            accumsan, justo ac mollis pharetra,.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-5 order-1">
                        <div className="banner">
                          <img src={Banner} alt="banner" className="banner-img"/>
                        </div>
                      </div>
                    </div>
                  </Tab>

                  <Tab eventKey="Review" title="Review">
                    <div className="product-review-inner flex-column">
                      <div className="d-flex p-4">
                        <div className="col-md-1">
                          <img src={CusSatu} alt="Draven Images" />
                        </div>

                        <div className="flex-row p-2 review-rspn">
                          <p>
                            “Theme is very flexible and easy to use. Perfect for
                            us. Customer support has been excellent and answered
                            every question we've thrown at them with 12 hours.”
                          </p>
                          <p>
                            <strong>John Doe</strong> - 28 Dec, 2018
                          </p>
                        </div>
                      </div>
                      <div className="d-flex p-4">
                        <div className="col-md-1">
                          <img src={CusSatu} alt="Draven Images" />
                        </div>

                        <div className="flex-row p-2 review-rspn">
                          <p>
                            “Theme is very flexible and easy to use. Perfect for
                            us. Customer support has been excellent and answered
                            every question we've thrown at them with 12 hours.”
                          </p>
                          <p>
                            <strong>John Doe</strong> - 28 Dec, 2018
                          </p>
                        </div>
                      </div>

                      <div className="review-form mx-5">
                        <div className="title-review">
                          <h2>Leave A Comment</h2>
                          <h5>
                            Your email address will not be published. Required
                            fields are marked{" "}
                          </h5>
                        </div>
                        <form action="#">
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="input-box">
                                <label>Name *</label>
                                <input type="text" />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="input-box">
                                <label>Email *</label>
                                <input type="text" />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="input-box">
                                <label>Website</label>
                                <input type="text" />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="input-box">
                                <label>Your comment </label>
                                <textarea></textarea>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="submit-btn-send">Send</div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Tab>

                  <Tab eventKey="Additional" title="Additional Information">
                    <div className="tab-item-wrapper">
                      <h5>Additional Information</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus, labore dignissimos? Accusantium impedit
                        assumenda quisquam incidunt quibusdam temporibus animi.
                      </p>
                    </div>
                  </Tab>
                  <Tab eventKey="About" title="About Brand">
                    <div className="tab-item-wrapper">
                      <h5>About Brand</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus, labore dignissimos? Accusantium impedit
                        assumenda quisquam incidunt quibusdam temporibus animi.
                      </p>
                    </div>
                  </Tab>
                  <Tab eventKey="Shipping" title="Shipping & Delivery">
                    <div className="tab-item-wrapper">
                      <h5>Shipping & Delivery</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus, labore dignissimos? Accusantium impedit
                        assumenda quisquam incidunt quibusdam temporibus animi.
                      </p>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DescTab;
