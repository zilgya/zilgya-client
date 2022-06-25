import React, { Component } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";

import "./blog.css";

import RecentOne from "../../assets/img/recent-news-1.png";
import RecentTwo from "../../assets/img/recent-news-2.png";
import RecentThree from "../../assets/img/recent-news-3.png";
import RecentFour from "../../assets/img/recent-news-4.png";
import BannerSideBar from "../../assets/img/banner-blog-sidebar.png";
import BlogImgOne from "../../assets/img/blog-image-one.png";
import BlogImgTwo from "../../assets/img/blog-image-two.png";
import BlogImgThree from "../../assets/img//blog-image-three.png";
import BlogImgFour from "../../assets/img/blog-image-four.png";
import Clock from "../../assets/icons/clock.png";
import Tag from "../../assets/icons/tag.png";
import Loading from "../../component/Loading";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    loadingRedux: state.user.isLoading,
  };
};

export class Blog extends Component {
  render() {
    return (
      <>
      {this.props.loadingRedux&& <Loading/>}
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
          <div className="d-flex flex-row blog-container">
            <article>
              <div className="col-lg-10 pl-5 pr-1 py-5 blog-row">
                <div className="blog-sidebar">
                  <form className="search-form" action="#">
                    <input type="text" placeholder="Search…" />
                    <button className="button-search-2">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                  <h4 className="pt-5">Categories </h4>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="p-2">Furniture</div>
                    <div className="p-2">3</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="p-2">Interior</div>
                    <div className="p-2">4</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="p-2">Real Estate</div>
                    <div className="p-2">5</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="p-2">Construction</div>
                    <div className="p-2">8</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="p-2">Business</div>
                    <div className="p-2">3</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="p-2">Industrial</div>
                    <div className="p-2">9</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="p-2">Furniture</div>
                    <div className="p-2">1</div>
                  </div>
                </div>
                <h4 className="pt-5">Recent News </h4>
                <div className="d-flex recent-content">
                  <img src={RecentOne} alt="Recent Images" />
                  <div className="flex-row pl-3">
                    <strong className="pl-3 recent-tag-title">
                      How To Put Movies Iphone
                    </strong>
                    <p className="pl-3 recent-tag">24 Apr 2019, 45 mins ago</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex recent-content">
                  <img src={RecentTwo} alt="Recent Images" />
                  <div className="flex-row pl-3">
                    <strong className="pl-3 recent-tag-title">Windows Registry Cleaner</strong>
                    <p className="pl-3 recent-tag">24 Apr 2019, 45 mins ago</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex recent-content">
                  <img src={RecentThree} alt="Recent Images" />
                  <div className="flex-row pl-3">
                    <strong className="pl-3 recent-tag-title">Messes Make Memories</strong>
                    <p className="pl-3 recent-tag">24 Apr 2019, 45 mins ago</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex recent-content">
                  <img src={RecentFour} alt="Recent Images" />
                  <div className="flex-row pl-3">
                    <strong className="pl-3 recent-tag-title">Modern Light House</strong>
                    <p className="pl-3 recent-tag">24 Apr 2019, 45 mins ago</p>
                  </div>
                </div>
                <div className="pt-5">
                  <h4>Archieves </h4>
                  <select className="nice-select rounded-0">
                    <option value="">Select Month</option>
                    <option value="#"> April 2019 </option>
                    <option value="#"> March 2019 </option>
                  </select>
                </div>
                <div className="py-5">
                  <h4>Size </h4>
                  <div className="content-tags">
                    <div className="sidebar-tags">funiture</div>
                    <div className="sidebar-tags">life style</div>
                    <div className="sidebar-tags">online store</div>
                    <div className="sidebar-tags">real estate</div>
                    <div className="sidebar-tags">style</div>
                    <div className="sidebar-tags">zuka</div>
                  </div>
                </div>
                <div className="sidebar-banner-blog">
                  <img src={BannerSideBar} alt="" />
                  <div className="sidebar-banner-content-blog">
                    <h3 className="title-banner-blog">Ad Banner</h3>
                    <h4 className="title-banner-mail">info@la-studioweb.com</h4>
                  </div>
                </div>
              </div>
            </article>
            <section>
              <div className="col-lg-8 pr-5 py-5 pl-0 img-content-blog">
                <img src={BlogImgOne} alt="" />
              </div>
              <h1 className="title-detail-blog">How to open interior shop?</h1>
              <div className="clctg-blog">
                <img src={Clock} alt="clock" /> &nbsp; 24 Apr 2019, 45 mins ago,
                by Admin &nbsp;
                <img src={Tag} alt="tag" />
                &nbsp; Kids, Interior, Photos
              </div>
              <h5 className="pt-5 desc-blog">
                Maecenas eget congue augue. Sed mollis tempor velit, et tempor
                justo cursus vel. Phasellus lacinia placerat lacus, vulputate
                volutpat tellus fringilla eu. Phasellus rhoncus varius tortor,
                non ultricies felis condimentum eget unc ornare suscipit nulla
                sagittis faucibu
              </h5>
              <div className="d-flex flex-row">
                <strong className="py-4 read-text">Read me</strong>
                <hr className="hr-readme" />
              </div>
              <div className="col-lg-8 pr-5 py-5 pl-0 img-content-blog">
                <img src={BlogImgTwo} alt="" />
              </div>
              <h1 className="title-detail-blog">Scandinavian Style 2019</h1>
              <div className="clctg-blog">
                <img src={Clock} alt="clock" /> &nbsp; 24 Apr 2019, 45 mins ago,
                by Admin &nbsp;
                <img src={Tag} alt="tag" />
                &nbsp; Kids, Interior, Photos
              </div>
              <h5 className="pt-5 desc-blog">
                Maecenas eget congue augue. Sed mollis tempor velit, et tempor
                justo cursus vel. Phasellus lacinia placerat lacus, vulputate
                volutpat tellus fringilla eu. Phasellus rhoncus varius tortor,
                non ultricies felis condimentum eget unc ornare suscipit nulla
                sagittis faucibu
              </h5>
              <div className="d-flex flex-row">
                <strong className="py-4 read-text">Read me</strong>
                <hr className="hr-readme" />
              </div>
              <div className="col-lg-8 pr-5 py-5 pl-0 img-content-blog">
                <img src={BlogImgThree} alt="" />
              </div>
              <h1 className="title-detail-blog">
                Beautiful Workspace for Designer
              </h1>
              <div className="clctg-blog">
                <img src={Clock} alt="clock" /> &nbsp; 24 Apr 2019, 45 mins ago,
                by Admin &nbsp;
                <img src={Tag} alt="tag" />
                &nbsp; Kids, Interior, Photos
              </div>
              <h5 className="pt-5 desc-blog">
                Maecenas eget congue augue. Sed mollis tempor velit, et tempor
                justo cursus vel. Phasellus lacinia placerat lacus, vulputate
                volutpat tellus fringilla eu. Phasellus rhoncus varius tortor,
                non ultricies felis condimentum eget unc ornare suscipit nulla
                sagittis faucibu
              </h5>
              <div className="d-flex flex-row">
                <strong className="py-4 read-text">Read me</strong>
                <hr className="hr-readme" />
              </div>
              <div className="col-lg-8 pr-5 py-5 pl-0 img-content-blog">
                <div className="card-quotes-blog">
                  <h1 className="quotes-content-blog">
                    Design is the silent ambassador of your brand.
                  </h1>
                  <div className="d-flex flex-row">
                    <hr className="hr-quotes" />
                    <strong className="py-4">Joshua Freeman</strong>
                  </div>
                </div>
                <h1 className="pt-5 title-detail-blog">
                  26 Photos of Conner Kid
                </h1>
                <div className="clctg-blog">
                  <img src={Clock} alt="clock" /> &nbsp; 24 Apr 2019, 45 mins
                  ago, by Admin &nbsp;
                  <img src={Tag} alt="tag" />
                  &nbsp; Kids, Interior, Photos
                </div>
                <h5 className="pt-5 desc-blog">
                  Maecenas eget congue augue. Sed mollis tempor velit, et tempor
                  justo cursus vel. Phasellus lacinia placerat lacus, vulputate
                  volutpat tellus fringilla eu. Phasellus rhoncus varius tortor,
                  non ultricies felis condimentum eget unc ornare suscipit nulla
                  sagittis faucibu
                </h5>
              </div>
              <div className="col-lg-8 pr-5 py-5 pl-0 img-content-blog">
                <img src={BlogImgFour} alt="" />
              </div>
              <h1 className="title-detail-blog">Beautiful Corner</h1>
              <div className="clctg-blog">
                <img src={Clock} alt="clock" /> &nbsp; 24 Apr 2019, 45 mins ago,
                by Admin &nbsp;
                <img src={Tag} alt="tag" />
                &nbsp; Kids, Interior, Photos
              </div>
              <h5 className="pt-5 desc-blog">
                Maecenas eget congue augue. Sed mollis tempor velit, et tempor
                justo cursus vel. Phasellus lacinia placerat lacus, vulputate
                volutpat tellus fringilla eu. Phasellus rhoncus varius tortor,
                non ultricies felis condimentum eget unc ornare suscipit nulla
                sagittis faucibu
              </h5>
              <div className="d-flex flex-row">
                <strong className="py-4 read-text">Read me</strong>
                <hr className="hr-readme" />
              </div>
              <div className="d-flex flex-row">
                <div className="pro-details-heart py-5">
                  <p className="btn-hover">01</p>
                </div>
                <div className="pag-blog mt-5 mr-4">
                  <p className="btn-hover">02</p>
                </div>
                <div className="pag-blog mt-5 mr-4">
                  <p className="btn-hover">03</p>
                </div>
                <div className="pag-blog mt-5 mr-4">
                  <p className="btn-hover">04</p>
                </div>
                <div className="pag-blog mt-5 mr-4">
                  <p className="btn-hover">05</p>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps)(Blog) 
