import React, { useEffect, useReducer, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import WOW from 'wowjs';
import { SRLWrapper } from "simple-react-lightbox";
import { NavLink } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";


/*---------Using reducer mange the active or inactive menu----------*/
const initialState = {activeMenu:''};

function reducer(state, action) {
  switch (action.type) {
    case 'homeOne':
      return {activeMenu: 'homeOne'};
    case 'service':
      return {activeMenu: 'service'};
    case 'projects':
      return {activeMenu: 'projects'};
    case 'pages':
      return {activeMenu: 'pages'};
    case 'blogs':
      return {activeMenu: 'blogs'};
    default:
      return {activeMenu: ''};
  }
}

function Header() { 
  const [state, dispatch] = useReducer(reducer, initialState);
  const currentRoute = useLocation().pathname
  
   // Sticky Navbar
    useEffect(() => {
      new WOW.WOW({
        live:false
      }).init();
      window.addEventListener("scroll", isSticky);
      return () => {
        window.removeEventListener("scroll", isSticky);
      };
    });
    const isSticky = (e) => {
      const header = document.querySelector(".header-section");
      const menuscrollTop = window.scrollY;
      menuscrollTop >= 20
        ? header.classList.add("sticky")
        : header.classList.remove("sticky");
    };

     /*----for single sidebar event use one state-------*/
  const [sidebar, setSidebar] = useState(false);
  const [sidebarleft, setSidebarleft] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const handleSearchbar = ()=> {
    if (searchBar === false || searchBar === 0) {
      setSearchBar(1);
    } else {
      setSearchBar(false);
    }
  }
  const showSidebar = () => {
    if (sidebar === false || sidebar === 0) {
      setSidebar(1);
    } else {
      setSidebar(false);
    }
  };
  const scrollTop = ()=>window.scrollTo({top:0,behavior:"smooth"})
  const showSidebarleft = () => {
    if (sidebarleft === false || sidebarleft === 0) {
      setSidebarleft(1);
    } else {
      setSidebarleft(false);
    }
  };

  return (
    <>
    <AnimatedCursor
        className="coursor"
        innerSize={8}
        outerSize={30}
        color="230, 230, 230"
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={1.5}
        zIndex="99999"
        clickables={[
          "a",
          "i",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          ".sub-menu",
          ".has-child",
          ".menu-toggle-wrap",
          ".search-cross-btn",
          ".SRLControls",
        ]}
      />
      <div className={sidebarleft  ===1 ? "menu-toggle-btn-full-shape show-sidebar" : "menu-toggle-btn-full-shape"}>
        <div className="menu-toggle-wrap bg-white">
          <div className="sidebar-top-area">
            <div onClick={showSidebarleft} className="cross-icon">
              <i className="bx bx-x" />
            </div>
            <div className="sidebar-logo">
              <Link onClick={scrollTop} to={"/"}><img src={process.env.PUBLIC_URL + "/images/icon/logo.png"} alt="images" /></Link>
            </div>
            <p>We’re west coast change-makers, in a complex world. The brands we support are positioned to be
              purposeful and powerful while also fluid.</p>
          </div>
          <div className="sidebar-body">
            <h3 className="sidebar-title">Instagram Post</h3>
                <SRLWrapper>
            <div className="sidebar-gallery">
              <ul className="gallery">
                <li>
                  <a href={process.env.PUBLIC_URL + "/images/bg/fimg-big2.png"} className="hover-btn image-open"><span><img src={process.env.PUBLIC_URL + "/images/bg/fimg-big2.png"} alt="images" /></span></a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL + "/images/bg/fimg-big1.png"} className="hover-btn image-open"><span><img src={process.env.PUBLIC_URL + "/images/bg/fimg-big1.png"} alt="images" /></span></a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL + "/images/bg/fimg-big1.png"} className="hover-btn image-open"><span><img src={process.env.PUBLIC_URL + "/images/bg/fimg-big3.png"} alt="images" /></span></a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL + "/images/bg/fimg-big4.png"} className="hover-btn image-open"><span><img src={process.env.PUBLIC_URL + "/images/bg/fimg-big4.png"} alt="images" /></span></a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL + "/images/bg/fimg-big5.png"} className="hover-btn image-open"><span><img src={process.env.PUBLIC_URL + "/images/bg/fimg-big5.png"} alt="images" /></span></a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL + "/images/bg/fimg-big6.png"} className="hover-btn image-open"><span><img src={process.env.PUBLIC_URL + "/images/bg/fimg-big6.png"} alt="images" /></span></a>
                </li>
              </ul>
            </div>
                </SRLWrapper>
          </div>
          <div className="sidebar-bottom">
            <h3 className="sidebar-title">Join Our Community</h3>
            <ul className="sidebar-social-list">
              <li><a  rel="noopener noreferrer" href="https://www.twitter.com/" target="_blank"><i className="bx bxl-twitter"/></a></li>
              <li><a rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank"><i className="bx bxl-facebook" /></a></li>
              <li><a rel="noopener noreferrer" href="https://www.pinterest.com/" target="_blank"><i className="bx bxl-pinterest-alt" /></a></li>
              <li><a rel="noopener noreferrer" href="https://www.instagram.com/" target="_blank"><i className="bx bxl-instagram" /></a></li>
              <li><a rel="noopener noreferrer" href="https://www.dribbble.com/" target="_blank"><i className="bx bxl-dribbble" /></a></li>
            </ul>
            <div className="copyright">Copyright 2022 <Link onClick={scrollTop} to={"#"}>Reves’s</Link> | Design By <a rel="noopener noreferrer" href="https://www.egenslab.com/" target="_blank">Egens Lab</a></div>
          </div>
        </div>
      </div>
    <div className={searchBar ===1 ? "mobile-search slide": "mobile-search"}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-11">
              <label>What are you lookking for?</label>
              <input type="text" placeholder="Search Projects, Services, Blog" />
            </div>
            <div className="col-1 d-flex justify-content-end align-items-center">
              <div onClick={handleSearchbar} className="search-cross-btn">
                {/* <i class="bi bi-search me-4"></i> */}
                <i className="bi bi-x" />
              </div>
            </div>
          </div>
        </div>
      </div>
   
  
      <header className="header-section">
        <div className="container-fluid">
          <div className="header-area">
            <div className="header-logo">
              <Link onClick={scrollTop} to={"#"}>
                <img src={process.env.PUBLIC_URL + "/images/icon/logo.png"} alt="images" />
              </Link>
            </div>
            <div  className="mobile-menu-btn text-white d-lg-none d-block">
              <i onClick={showSidebar} className="bi bi-list" />
            </div>
            <div className= {sidebar === 1 ? "main-menu show-menu" : "main-menu"} >
              <div className="mobile-logo-area d-lg-none d-block">
                <div className="mobile-logo-wrap d-flex justify-content-between align-items-center">
                  <img src={process.env.PUBLIC_URL + "/images/icon/logo.png"} alt="images" />
                  <div className="menu-close-btn" onClick={showSidebar}>
                    <i className="bi bi-x-lg" />
                  </div>
                </div>
              </div>
              {/* nav-bar remove */}
              {/* mobile-search-area */}
              <div className="mobile-menu-bottom d-lg-none d-block">
                <Link to={"#"} className="mobile-menu-button eg-btn">
                  Start Project
                </Link>
                <ul className="header-social">
                  <li>
                    <a rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank">FB</a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="https://www.twitter.com/" target="_blank">TW</a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="https://www.Linkedin.com/" target="_blank">IN</a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="https://www.pinterest.com/" target="_blank">PR</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-right-area">
              <Link
                to={`${process.env.PUBLIC_URL}/contact-us`}
                onClick={scrollTop}
                className="eg-btn header-button hover-btn"
              >
                <span>Start Project</span>
              </Link>
              <ul className="header-social">
                <li>
                  <Link to={"#"}>FB</Link>
                </li>
                <li>
                  <Link to={"#"}>TW</Link>
                </li>
                <li>
                  <Link to={"#"}>IN</Link>
                </li>
                <li>
                  <Link to={"#"}>PR</Link>
                </li>
              </ul>
              {/* icons remove */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
