import React from "react";
import { Link } from "react-router-dom";

function TestimonialOne() {
  return (
    <>
      <div className="testimonial-section pt-120">
        <div className="container">
          <div className="row d-flex justify-content-lg-start justify-content-center">
            <div className="col-md-8 text-center">
              <div
                className="section-title pt-0 wow animate fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <h2>Testimonial</h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            <div className="col-lg-8 order-lg-1 order-2">
              <div
                className="eg-card-wrap wow animate fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <div className="eg-card testimonial-item d-flex justify-content-sm-start justify-content-center align-items-center flex-sm-nowrap flex-wrap hover-btn">
                  <span />
                  <div className="testimonial-content order-sm-1 order-2">
                    <h6>
                      You all offered really sound advice throughout the
                      process. We came up with a strong brand that will live on
                      for decades. What we all created will soon become part of
                      the soul of AMPP.
                    </h6>
                    <div className="testimonial-footer d-flex justify-content-between align-items-end">
                      <ul className="social-media d-flex">
                        <li>
                          <a
                            rel="noopener noreferrer"
                            href="https://www.facebook.com/"
                            target="_blank"
                          >
                            fb
                          </a>
                        </li>
                        <li>
                          <a
                            rel="noopener noreferrer"
                            href="https://www.twitter.com/"
                            target="_blank"
                          >
                            tw
                          </a>
                        </li>
                        <li>
                          <a
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/"
                            target="_blank"
                          >
                            in
                          </a>
                        </li>
                        <li>
                          <a
                            rel="noopener noreferrer"
                            href="https://www.pinterest.com/"
                            target="_blank"
                          >
                            pr
                          </a>
                        </li>
                      </ul>
                      <div className="author">
                        <Link to={"#"}>
                          <h5>Abdullah Ansary</h5>
                        </Link>
                        <p>UI/UX Designer</p>
                      </div>
                    </div>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon/quote.svg"}
                      className="quote-icon"
                      alt="images"
                    />
                  </div>
                  <div className="testimonial-img order-sm-2 order-1">
                    <img
                      src={process.env.PUBLIC_URL + "/images/bg/test1.png"}
                      alt="images"
                    />
                  </div>
                </div>
              </div>
              <div
                className="eg-card-wrap wow animate fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <div className="eg-card testimonial-item d-flex justify-content-sm-start justify-content-center align-items-center flex-sm-nowrap flex-wrap hover-btn">
                  <span />
                  <div className="testimonial-content order-sm-1 order-2">
                    <h6>
                      You all offered really sound advice throughout the
                      process. We came up with a strong brand that will live on
                      for decades. What we all created will soon become part of
                      the soul of AMPP.
                    </h6>
                    <div className="testimonial-footer d-flex justify-content-between align-items-end">
                      <ul className="social-media d-flex">
                        <li>
                          <a
                            rel="noopener noreferrer"
                            href="https://www.facebook.com/"
                            target="_blank"
                          >
                            fb
                          </a>
                        </li>
                        <li>
                          <a
                            rel="noopener noreferrer"
                            href="https://www.twitter.com/"
                            target="_blank"
                          >
                            tw
                          </a>
                        </li>
                        <li>
                          <a
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/"
                            target="_blank"
                          >
                            in
                          </a>
                        </li>
                        <li>
                          <a
                            rel="noopener noreferrer"
                            href="https://www.pinterest.com/"
                            target="_blank"
                          >
                            pr
                          </a>
                        </li>
                      </ul>
                      <div className="author">
                        <Link to={"#"}>
                          <h5>Leslie Alexander</h5>
                        </Link>
                        <p>CEO Reves’s</p>
                      </div>
                    </div>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon/quote.svg"}
                      className="quote-icon"
                      alt="images"
                    />
                  </div>
                  <div className="testimonial-img order-sm-2 order-1">
                    <img
                      src={process.env.PUBLIC_URL + "/images/bg/test2.png"}
                      alt="images"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-8 order-lg-2 order-1">
              <div
                className="section-card testimonial-section-card wow animate fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <h2>What Client Say</h2>
                <p>
                  We guide game-changing companies, across platforms &amp;
                  places, through agile design &amp; digital experience. We make
                  waves.
                </p>
                <Link
                  to={`${process.env.PUBLIC_URL}/feedback`}
                  onClic={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="eg-btn hover-btn sectoin-card-btn"
                >
                  <span>
                    Explore More
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/icon/arrow-servc.svg"
                      }
                      alt="images"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialOne;
