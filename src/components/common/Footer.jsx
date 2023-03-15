import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { SRLWrapper } from "simple-react-lightbox";
function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-top-area">
            <div className="row d-flex justify-content-sm-start justify-content-center gy-5">
              <div className="col-lg-5 col-md-6 text-sm-start">
                <div className="footer-left-address">
                  <Link to={`${process.env.PUBLIC_URL}/`} onClick={scrollTop}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon/logos.svg"}
                      className="footer-logo"
                      alt="images"
                      style={{width:"150px"}}
                    />
                  </Link>
                  <ul className="address-list">
                    <li>
                      <Link
                        onClick={scrollTop}
                        to="mailto:feedback@geeksforgeeks.org"
                      >
                        Email: info@example.com
                      </Link>
                    </li>
                    <li>
                      <Link onClick={scrollTop} to={"#"}>
                        Address: House#168/170, Road#02, Ave#01, XYZ, ABC,
                        Bangladesh
                      </Link>
                    </li>
                    <li>
                      <a href="tel:+8801761111456">
                        Phone: +8801761111456 / +026935865
                      </a>
                    </li>
                  </ul>
                  <div className="newsletter-area">
                    <h5>Get The Updates</h5>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="form-inner">
                        <input type="text" placeholder="Type your Email :" />
                        <Link
                          onClick={scrollTop}
                          to={"#"}
                          className="newsletter-btn hover-btn"
                        >
                          <span>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/icon/nletter-arrow.svg"
                              }
                              alt="images"
                            />
                          </span>
                        </Link>
                      </div>
                      <p>We only send interesting and relevant emails.</p>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="footer-right-area">
                  <div className="row g-4">
                  {/* remove Explore On */}
                    <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-sm-start">
                      <div className="footer-item text-sm-start">
                        <h5 className="footer-title">Our Services</h5>
                        <ul className="footer-link">
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/service-details`}
                              onClick={scrollTop}
                            >
                              Digital Marketing
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/service-details`}
                              onClick={scrollTop}
                            >
                              Web Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/service-details`}
                              onClick={scrollTop}
                            >
                              Professional Ceyber Security
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/service-details`}
                              onClick={scrollTop}
                            >
                              3D Animation
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/service-details`}
                              onClick={scrollTop}
                            >
                              Branding Company Solution
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-12 d-flex justify-content-sm-start">
                      {/* remove instagram posts */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="footer-social-area d-flex justify-content-sm-start justify-content-center align-items-center flex-wrap">
                        <h5>Join Our Community</h5>
                        <ul className="footer-social-list">
                          <li>
                            <a
                              rel="noopener noreferrer"
                              href="https://www.twitter.com/"
                              target="_blank"
                            >
                              <i className="bx bxl-twitter" />
                            </a>
                          </li>
                          <li>
                            <a
                              rel="noopener noreferrer"
                              href="https://www.facebook.com/"
                              target="_blank"
                            >
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                          <li>
                            <a
                              rel="noopener noreferrer" href="https://www.pinterest.com/" target="_blank"
                            >
                              <i className="bx bxl-pinterest-alt" />
                            </a>
                          </li>
                          <li>
                            <a
                              rel="noopener noreferrer"
                              href="https://www.instagram.com/"
                              target="_blank"
                            >
                              <i className="bx bxl-instagram" />
                            </a>
                          </li>
                          <li>
                            <a
                              rel="noopener noreferrer"
                              href="https://www.dribbble.com/"
                              target="_blank"
                            >
                              <i className="bx bxl-dribbble" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-area">
            <div className="row">
              <div className="col-lg-5 text-lg-start text-center">
                <div className="footer-bottom-left">
                  <a
                    onClick={scrollTop}
                    rel="noopener noreferrer"
                    href="https://www.egenslab.com/"
                    target="_blank"
                  >
                    <h6 className="mb-0">
                      Copyright 2022 Reves’s | Design By <span>Egens Lab</span>
                    </h6>
                  </a>
                </div>
              </div>
              <div className="col-lg-7 text-lg-end text-center">
                <div className="footer-bottom-right">
                  <Link onClick={scrollTop} to={"#"}>
                    <h6 className="mb-0">Privacy Policy | Terms of Use</h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="scroll-btn show">
        <ScrollButton></ScrollButton>
      </div>
    </>
  );
}
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 800) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <i
      className="bx bxs-up-arrow-circle"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    ></i>
  );
};

export default Footer;
