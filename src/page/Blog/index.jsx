import React, { Component } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";

import "./blog.css";

export class Blog extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main>
          <div className="co-header">
            <div className="co-header-menu">Blog {">"}</div>
            <div className="co-header-title-container">
              <div className="co-header-title">Our Blog</div>
              <div className="co-header-info">
                Read and enjoy content form us
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-5">
            <div className="blog-sidebar">
              <form className="search-form" action="#">
                <input type="text" placeholder="Search…" />
                <button className="button-search-2">
                  <i className="fa fa-search"></i>
                </button>
              </form>
              <h4 class="pt-5">Categories </h4>
              <div class="d-flex flex-row">
                <div class="p-2">Furniture</div>
                <div class="p-2">3</div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Blog;
