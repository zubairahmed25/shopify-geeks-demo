import React from "react";

import { Link } from "react-router-dom";
function ServiceDetailsWrap() {
  return (
    <>
      <div className="service-section2 pt-120">
        <div className="container">
          <div className="row d-flex justify-content-lg-start justify-content-center gy-5">
            <div className="col-lg-5 col-md-5">
              <div
                className="section-card service-details-card wow animate fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <h2>Web Development</h2>
                <p>
                  We guide game-changing companies, across platforms & places,
                  through agile design & digital experience. We make waves.
                </p>
                <Link to={"#"} class="eg-btn hover-btn sectoin-card-btn">
                  <span>
                    Download Profile{" "}
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/icon/arrow-servc.svg"
                      }
                      alt="images"
                    />
                  </span>
                </Link>
              </div>
              <div
                className="hire-card wow animate fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <h3>DO YOU HAVE A PROJECT IN YOUR MIND</h3>
                <div className="eg-btn hire-btn hover-btn">
                  <span>
                    <Link to={`${process.env.PUBLIC_URL}/contact-us`}>
                      Join Now
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/icon/arrow-dark.svg"
                        }
                        alt="images"
                      />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="section-title text-center">
                <h2>Service Details</h2>
              </div>
              <div className="service-details-area">
                <div className="service-details-img">
                  <img
                    src={process.env.PUBLIC_URL + "/images/bg/sdetails1.png"}
                    alt="images"
                  />
                </div>
                <div className="service-details-content">
                  <h3>Web Development</h3>
                  <p className="para">
                    When it comes to the tech industry, there are many different
                    paths you can follow. UX design, UI design, web development,
                    data analytics, and digital marketing all offer exciting,
                    fulfilling, and financially rewarding careers—but each role
                    is unique. So, before you decide on a particular field, it’s
                    important to understand exactly what each role entails.
                    First, though, let’s consider how all of these roles fit
                    together in the context of business.
                  </p>
                  <h4>Service Intro</h4>
                  <p>
                    Let’s imagine an e-commerce startup—we’ll call it Beautify.
                    Beautify creates their own all-natural cosmetics and sells
                    them online via their website. Some of the key team members
                    behind this small but successful startup include a UX
                    designer, a UI designer, a web developer, a data analyst,
                    and a digital marketer.
                  </p>
                  <p>
                    Do you go for a university degree in computer science, or
                    would a certification be enough? Does it matter if the
                    certification is from an accredited institution, or would an
                    employer care about that? Should the school focus on
                    technical skills—such as frontend or full-stack development.
                  </p>
                  <div className="row g-3 service-intro-row">
                    <div className="col-md-6 col-sm-6">
                      <img
                        src={
                          process.env.PUBLIC_URL + " /images/bg/sdetails2.png"
                        }
                        alt="images"
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <h6>
                        When it comes to the tech industry, there are many
                        different paths you can follow.
                      </h6>
                      <p className="para">
                        UX design, UI design, web development, data analytics,
                        and digital marketing all offer exciting, fulfilling,
                        and financially rewarding careers—but each role is
                        unique. So, before you decide on a particular field,
                        it’s important to understand exactly what each role
                        entails.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="work-process">
                  <h3>Work Process</h3>
                  <div className="row g-3">
                    <div className="col-lg-3 col-md-6 col-sm-3 col-6">
                      <div className="work-pro-item">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/icon/workp1.svg"
                          }
                          alt="images"
                        />
                        <h4>
                          <Link to={"#"}>Research</Link>
                        </h4>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-3 col-6">
                      <div className="work-pro-item">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/icon/workp2.svg"
                          }
                          alt="images"
                        />
                        <h4>
                          <Link to={"#"}>Idea</Link>
                        </h4>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-3 col-6">
                      <div className="work-pro-item">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/icon/workp3.svg"
                          }
                          alt="images"
                        />
                        <h4>
                          <Link to={"#"}>Develop</Link>
                        </h4>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-3 col-6">
                      <div className="work-pro-item">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/icon/workp4.svg"
                          }
                          alt="images"
                        />
                        <h4>
                          <Link to={"#"}>Launch</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceDetailsWrap;
