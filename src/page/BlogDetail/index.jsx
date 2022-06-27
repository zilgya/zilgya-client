import React, { Component } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";

import RecentOne from "../../assets/img/recent-news-1.png";
import RecentTwo from "../../assets/img/recent-news-2.png";
import RecentThree from "../../assets/img/recent-news-3.png";
import RecentFour from "../../assets/img/recent-news-4.png";
import CsTwo from "../../assets/img/cs2.png";
import CsThree from "../../assets/img/cs3.png";
import CsFour from "../../assets/img/cs4.png";
import CsFive from "../../assets/img/cs5.png";
import BlogImgOne from "../../assets/img/blog-image-one.png";
import BlogImgTwo from "../../assets/img/blog-image-two.png";
import BlogImgThree from "../../assets/img/blog-image-three.png";
import BlogImgFour from "../../assets/img/blog-image-four.png";
import BannerSideBar from "../../assets/img/banner-blog-sidebar.png";
import Clock from "../../assets/icons/clock.png";
import Tag from "../../assets/icons/tag.png";
import Loading from "../../component/Loading";
import { connect } from "react-redux";

import "./blogdetail.css";

const mapStateToProps = (state) => {
  return {
    loadingRedux: state.user.isLoading,
  };
};

export class BlogDetail extends Component {
  render() {
    return (
      <>
        {this.props.loadingRedux && <Loading />}
        <Navbar />
        <main>
          <div className="co-header">
            <div className="co-header-menu">Blog Detail {">"}</div>
            <div className="co-header-title-container">
              <div className="co-header-title">Our Blog</div>
              <div className="co-header-info">
                Read and enjoy content form us
              </div>
            </div>
          </div>
          <div className="d-flex flex-row blog-container">
            <article>
              <div className="col-lg-12 pl-5 pr-1 py-5 blog-row">
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
                  <div className="flex-row ml-3">
                    <strong className="recent-tag-title">
                      How To Put Movies Iphone
                    </strong>
                    <p className="recent-tag">24 Apr 2019, 45 mins ago</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex recent-content">
                  <img src={RecentTwo} alt="Recent Images" />
                  <div className="flex-row ml-3">
                    <strong className="recent-tag-title">
                      Windows Registry Cleaner
                    </strong>
                    <p className="recent-tag">24 Apr 2019, 45 mins ago</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex recent-content">
                  <img src={RecentThree} alt="Recent Images" />
                  <div className="flex-row ml-3">
                    <strong className="recent-tag-title">
                      Messes Make Memories
                    </strong>
                    <p className="recent-tag">24 Apr 2019, 45 mins ago</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex recent-content">
                  <img src={RecentFour} alt="Recent Images" />
                  <div className="flex-row ml-3">
                    <strong className="recent-tag-title">
                      Modern Light House
                    </strong>
                    <p className="recent-tag">24 Apr 2019, 45 mins ago</p>
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
            <section className="col-lg-9 px-5 blog-content-detail">
              <div className="py-5 pl-0 img-content-blog-detail">
                <img src={BlogImgOne} alt="" />
              </div>
              <h1 className="title-detail-blog">How to open interior shop?</h1>
              <div className="clctg-blog">
                <img src={Clock} alt="clock" /> &nbsp; 24 Apr 2019, 45 mins ago,
                by Admin &nbsp;
                <img src={Tag} alt="tag" />
                &nbsp; Kids, Interior, Photos
              </div>
              <h5 className="pt-5 desc-blog-detail">
                Maecenas eget congue augue. Sed mollis tempor velit, et tempor
                justo cursus vel. Phasellus lacinia placerat lacus, vulputate
                volutpat tellus fringilla eu. Phasellus rhoncus varius tortor,
                non ultricies felis condimentum eget unc ornare suscipit nulla
                sagittis faucibuDonec non velit ut nisl ultrices lobortis eget
                et odio. Sed mollis, libero ut lacinia ultrices, ex urna sodales
                tortor, sed pulvinar ex eros vel orci. Sed tempor placerat
                tristique. Ut tristique leo sit amet nisi blandit rutrum. Nunc
                hendrerit a diam vel ultricies. Morbi gravida, dui eu efficitur
                aliquet, ante nisl mollis ex, eget venenatis magna urna non ex.
                Suspendisse et orci viverra lacus consectetur posuere. Curabitur
                bibendum nisi at sapien viverra ultricies. Praesent commodo
                volutpat leo, ut accumsan ipsum egestas in. Integer elementum
                ligula vel cursus bibendum. Nulla nibh ante, iaculis at
                consequat id, euismod a sem. Fusce et sapien cursus, placerat
                dui non, rhoncus diam. Praesent ac consectetur dui.
                <br />
                <br />
                Phasellus ac sem eu mauris sodales tristique sed non ligula.
                Aenean in mauris ac libero condimentum vulputate quis ut sapien.
                Phasellus euismod mi eget interdum pellentesque. Maecenas
                molestie vitae risus vitae volutpat. Maecenas a velit rutrum,
                auctor quam et, commodo est. Cras leo sem, maximus non ex ac,
                porttitor egestas dolor. Fusce ut metus sodales, pellentesque
                diam sed, sodales massa. Nulla facilisi. Sed sed quam eget metus
                interdum condimentum non et odio. Nam magna tortor, vulputate in
                venenatis et, porta ac orci. Sed venenatis scelerisque
                scelerisque. Nullam ut neque sed libero feugiat fermentum et non
                odio. Aenean et justo elementum, volutpat arcu vitae, tincidunt
                lorem.
              </h5>
              <div className="d-flex flex-row">
                <strong className="py-4 read-text">Read me</strong>
                <hr className="hr-readme" />
              </div>
              <div className="d-flex flex-wrap img-content-blog-detail">
                <img className="col-lg-6" src={BlogImgTwo} alt="" />
                <div className="col-lg-6">
                  <h1 className="title-detail-blog-2">Scandinavian Design</h1>
                  <h5 className="pt-5 desc-blog-detail-2">
                    Nunc hendrerit a diam vel ultricies. Morbi gravida, dui eu
                    efficitur aliquet, ante nisl mollis ex, eget venenatis magna
                    urna non ex. Suspendisse et orci viverra lacus consectetur
                    posuere. Curabitur bibendum nisi at sapien viverra
                    ultricies. Praesent commodo volutpat leo, ut accumsan ipsum
                    egestas in. Integer elementum ligula vel cursus bibendum.
                    Nulla nibh ante, iaculis at consequat id, euismod a sem.
                    Fusce et sapien cursus, placerat dui non, rhoncus diam.
                    Praesent ac consectetur dui.
                    <br />
                    <br />
                    Phasellus ac sem eu mauris sodales tristique sed non ligula.
                    Aenean in mauris ac libero condimentum vulputate quis ut
                    sapien. Phasellus euismod mi eget interdum pellentesque.
                  </h5>
                </div>
              </div>
              <h5 className="pt-5 desc-blog-detail">
                Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor,
                sed pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut
                tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a
                diam vel ultricies. Morbi gravida, dui eu efficitur aliquet,
                ante nisl mollis ex, eget venenatis magna urna non ex.
                Suspendisse et orci viverra lacus consectetur posuere. Curabitur
                bibendum nisi at sapien viverra ultricies. Praesent commodo
                volutpat leo, ut accumsan ipsum egestas in. Integer elementum
                ligula vel cursus bibendum. Nulla nibh ante, iaculis at
                consequat id, euismod a sem. Fusce et sapien cursus, placerat
                dui non, rhoncus diam. Praesent ac consectetur dui.
                <br />
                <br />
                Phasellus ac sem eu mauris sodales tristique sed non ligula.
                Aenean in mauris ac libero condimentum vulputate quis ut sapien.
                Phasellus euismod mi eget interdum pellentesque. Maecenas
                molestie vitae risus vitae volutpat. Maecenas a velit rutrum,
                auctor quam et, commodo est. Cras leo sem, maximus non ex ac,
                porttitor egestas dolor. Fusce ut metus sodales, pellentesque
                diam sed, sodales massa. Nulla facilisi. Sed sed quam eget metus
                interdum condimentum non et odio.
              </h5>
              <blockquote className="block-quote mt-5">
                <p>
                  {" "}
                  <em>“Luxury Is In Each Detail”</em>{" "}
                </p>
                <cite>Hubert de Givenchy – Scoutandnimble.com </cite>
              </blockquote>
              <h5 className="pt-5 desc-blog-detail">
                Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor,
                sed pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut
                tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a
                diam vel ultricies. Morbi gravida, dui eu efficitur aliquet,
                ante nisl mollis ex, eget venenatis magna urna non ex.
                Suspendisse et orci viverra lacus consectetur posuere. Curabitur
                bibendum nisi at sapien viverra ultricies. Praesent commodo
                volutpat leo, ut accumsan ipsum egestas in. Integer elementum
                ligula vel cursus bibendum. Nulla nibh ante, iaculis at
                consequat id, euismod a sem. Fusce et sapien cursus, placerat
                dui non, rhoncus diam. Praesent ac consectetur dui.
                <br />
                <br />
                Phasellus ac sem eu mauris sodales tristique sed non ligula.
                Aenean in mauris ac libero condimentum vulputate quis ut sapien.
                Phasellus euismod mi eget interdum pellentesque. Maecenas
                molestie vitae risus vitae volutpat. Maecenas a velit rutrum,
                auctor quam et, commodo est. Cras leo sem, maximus non ex ac,
                porttitor egestas dolor. Fusce ut metus sodales, pellentesque
                diam sed, sodales massa. Nulla facilisi. Sed sed quam eget metus
                interdum condimentum non et odio.
              </h5>
              <div className="entry-footer d-flex align-items-center justify-content-end">
                <div className="social-sharing d-flex">
                  <span>Share with:</span>
                  <div className="social-icons text-center">
                    <a className="facebook" href="# ">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a className="twitter" href="# ">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a className="pinterest" href="# ">
                      <i className="fa fa-pinterest"></i>
                    </a>
                    <a className="youtube" href="# ">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* NAVIGATION */}
              <div className="post-links">
                <div className="nav nav-previous">
                  <a href="# ">
                    <span className="single-sidebar-product mb-0 border-0">
                      <span className="sidebar-product-img">
                        <img src={RecentOne} alt="older-page" />
                      </span>
                      <span className="sidebar-product-content">
                        <span className="title">7 Helpful Strategies.</span>
                        <span>June 10, 2019</span>
                      </span>
                    </span>
                    <span className="nav-text float-left">Older Post</span>
                  </a>
                </div>
                <div className="nav nav-next">
                  <a href="# ">
                    <span className="prev-post sidebar-product-wrap">
                      <span className="single-sidebar-product justify-content-end mb-0 border-0">
                        <span className="sidebar-product-img order-2">
                          <img src={RecentTwo} alt="next-page" />
                        </span>
                        <span className="sidebar-product-content text-end order-1 ml-0 mr-20">
                          <span className="title">Olivia Palermos fall</span>
                          <span>June 10, 2019</span>
                        </span>
                      </span>
                    </span>
                    <span className="nav-text float-right">Newer Post</span>
                  </a>
                </div>
              </div>
              {/* COMMENT */}
              <div className="post-comment-wrapper">
                <h2 className="title">Comments (4) </h2>
                <ul className="comment-list">
                  <li className="comment border-bottom">
                    <div className="thumbnail">
                      <img src={CsTwo} alt="comment-img" />
                    </div>
                    <div className="content">
                      <div className="desc">
                        <p>
                          “Theme is very flexible and easy to use. Perfect for
                          us. Customer support has been excellent and answered
                          every question weve thrown at them with 12 hours.”
                        </p>
                      </div>
                      <div className="comment-meta-blog">
                        <div className="comment-author">
                          <span className="name">Lady Gaga</span>
                          <span className="date">28 Dec, 2018</span>
                        </div>
                        <div className="reply-btn-blog">
                          <a href="# ">Reply</a>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="comment children border-bottom">
                    <div className="thumbnail">
                      <img src={CsThree} alt="comment-img" />
                    </div>
                    <div className="content">
                      <div className="desc">
                        <p>
                          “This theme is indeed a great purchase. Support center
                          is also helpful and quick to answer. No issues so
                          far.”
                        </p>
                      </div>
                      <div className="comment-meta-blog">
                        <div className="comment-author">
                          <span className="name">Support Agency</span>
                          <span className="date">28 Dec, 2018</span>
                        </div>
                        <div className="reply-btn-blog">
                          <a href="# ">Reply</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="comment thread-odd border-bottom">
                    <div className="thumbnail">
                      <img src={CsFour} alt="comment-img" />
                    </div>
                    <div className="content">
                      <div className="desc">
                        <p>
                          “Exceptional service, beautiful and straightforward
                          theme! Can’t recommend enough.”
                        </p>
                      </div>
                      <div className="comment-meta-blog">
                        <div className="comment-author">
                          <span className="name">David Louis</span>
                          <span className="date">28 Dec, 2018</span>
                        </div>
                        <div className="reply-btn-blog">
                          <a href="# ">Reply</a>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="comment">
                    <div className="thumbnail">
                      <img src={CsFive} alt="comment-img" />
                    </div>
                    <div className="content">
                      <div className="desc">
                        <p>
                          “Highly customizable. Excellent design. Customer
                          services has exceeded my expectation. They are quick
                          to answer and even when they don’t know the answer
                          right away. They’ll work with you towards a solution.”
                        </p>
                      </div>
                      <div className="comment-meta-blog">
                        <div className="comment-author">
                          <span className="name">Anonymous</span>
                          <span className="date">28 Dec, 2018</span>
                        </div>
                        <div className="reply-btn-blog">
                          <a href="# ">Reply</a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* COMMENT BOX */}
              <div className="review-form">
                <div className="title-review">
                  <h2>Leave A Comment</h2>
                  <h5>
                    Your email address will not be published. Required fields
                    are marked{" "}
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
              {/* RELATED POST */}
            </section>
          </div>
          <section>
            <div className="m-4 p-5">
              <h1 className="text-left title-related pb-3">Related Post</h1>

              <div className="d-flex flex-wrap justify-content-center related-content-blog">
                <div className="col-md-3 py-5">
                  <img src={BlogImgOne} alt="related-product" />
                  <h1 className="title-related-blog">
                    How to open interior shop?
                  </h1>
                  <div className="clctg-blog">
                    <img src={Clock} alt="clock" /> &nbsp; 24 Apr 2019, 45 mins
                    ago, by Admin &nbsp;
                    <img src={Tag} alt="tag" />
                    &nbsp; Kids, Interior, Photos
                  </div>
                </div>
               
                <div className="col-md-3 py-5">
                  <img src={BlogImgTwo} alt="related-product" />
                  <h1 className="title-related-blog">
                    Style Beautiful Furniture
                  </h1>
                  <div className="clctg-blog">
                    <img src={Clock} alt="clock" /> &nbsp; 24 Apr 2019, 45 mins
                    ago, by Admin &nbsp;
                    <img src={Tag} alt="tag" />
                    &nbsp; Kids, Interior, Photos
                  </div>
                </div>
               
                <div className="col-md-3 py-5">
                  <img src={BlogImgThree} alt="related-product" />
                  <h1 className="title-related-blog">Furniture Vitage Style</h1>
                  <div className="clctg-blog">
                    <img src={Clock} alt="clock" /> &nbsp; 24 Apr 2019, 45 mins
                    ago, by Admin &nbsp;
                    <img src={Tag} alt="tag" />
                    &nbsp; Kids, Interior, Photos
                  </div>
                </div>
               
                <div className="col-md-3 py-5">
                  <img src={BlogImgFour} alt="related-product" />
                  <h1 className="title-related-blog">Beautiful Corner</h1>
                  <div className="clctg-blog">
                    <img src={Clock} alt="clock" /> &nbsp; 24 Apr 2019, 45 mins
                    ago, by Admin &nbsp;
                    <img src={Tag} alt="tag" />
                    &nbsp; Kids, Interior, Photos
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps)(BlogDetail);
