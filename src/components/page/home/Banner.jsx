import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/autoplay";

import { Link } from "react-router-dom";
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);
function Banner() {
  const bannerslider = {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 0,
    loop: false,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    centeredSlides: true,
    roundLengths: true,
    navigation: {
      nextEl: ".banner-next",
      prevEl: ".banner-prev",
    },
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
    direction: "horizontal",
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },
  };
  return (
    <>
      <div className="banner-section position-relative">
        <Swiper {...bannerslider} className="swiper banner1">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide position-relative">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-7 d-md-block d-none py-2">
                    <div className="banner-img">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/banner/banner1.png"
                        }
                        className="banner-img-left"
                        alt="images"
                      />
                      <img
                        className="top-right-dot"
                        src={
                          process.env.PUBLIC_URL +
                          "/images/banner/top-right-dot.svg"
                        }
                        alt="images"
                      />
                      <img
                        className="bottom-left-dot"
                        src={
                          process.env.PUBLIC_URL +
                          "images/banner/bottom-left-dot.svg"
                        }
                        alt="images"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-5 col-12">
                    <div className="banner-content mobile-bg1">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/banner/banner-bg-text.png"
                        }
                        className="banner-text-bg"
                        alt="images"
                      />
                      <h5>WE CREATE BRANDS</h5>
                      <h1>
                        We are Creative <br /> Branding, Agency !
                      </h1>
                      <p>
                        Get the most of reduction in your team’s operating costs
                        for the whole product which creates amazing UI/UX
                        experiences.
                      </p>
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        to={`${process.env.PUBLIC_URL}/contact-us`}
                        className="eg-btn banner-btn hover-btn"
                      >
                        <span>
                          Contact Manager
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/icon/btn-arrow.svg"
                            }
                            alt="images"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide className="swiper-slide position-relative">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-7 d-md-block d-none py-2">
                    <div className="banner-img">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/banner/banner2.png"
                        }
                        className="banner-img-left"
                        alt="images"
                      />
                      <img
                        className="top-right-dot"
                        src={
                          process.env.PUBLIC_URL +
                          "/images/banner/top-right-dot.svg"
                        }
                        alt="images"
                      />
                      <img
                        className="bottom-left-dot"
                        src={
                          process.env.PUBLIC_URL +
                          "images/banner/bottom-left-dot.svg"
                        }
                        alt="images"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-5 col-12">
                    <div className="banner-content mobile-bg2">
                      <h5>WE CREATE WEB APPLICATION</h5>
                      <h1>
                        We are Web <br /> Development Agency !
                      </h1>
                      <p>
                        Get the most of reduction in your team’s operating costs
                        for the whole product which creates amazing UI/UX
                        experiences.
                      </p>
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        to={`${process.env.PUBLIC_URL}/contact-us`}
                        className="eg-btn banner-btn hover-btn"
                      >
                        <span>
                          Contact Manager
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/icon/btn-arrow.svg"
                            }
                            alt="images"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </div>
          <div className="slider-arrows banner1-arrow text-center d-flex justify-content-start">
            <div
              className="banner-prev swiper-prev-arrow"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            >
              <svg
                width={29}
                height={13}
                viewBox="0 0 29 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.99994 11.5454L6.99994 6.5L6.99994 1.45465C6.99994 1.28062 6.79308 1.18962 6.6648 1.30721L0.999939 6.5L6.6648 11.6928C6.79308 11.8104 6.99994 11.7194 6.99994 11.5454Z" />
                <path d="M28 7C28.2761 7 28.5 6.77614 28.5 6.5C28.5 6.22386 28.2761 6 28 6L28 7ZM6.6648 11.6928L7.00266 11.3242L7.00266 11.3242L6.6648 11.6928ZM0.999939 6.5L0.662077 6.13142L0.259993 6.5L0.662077 6.86857L0.999939 6.5ZM6.6648 1.30721L6.32694 0.938636L6.32694 0.938637L6.6648 1.30721ZM28 6L6.99994 6L6.99994 7L28 7L28 6ZM6.49994 6.5L6.49994 11.5454L7.49994 11.5454L7.49994 6.5L6.49994 6.5ZM7.00266 11.3242L1.3378 6.13142L0.662077 6.86857L6.32694 12.0614L7.00266 11.3242ZM1.3378 6.86857L7.00266 1.67579L6.32694 0.938637L0.662077 6.13142L1.3378 6.86857ZM6.49994 1.45465L6.49994 6.5L7.49994 6.5L7.49994 1.45465L6.49994 1.45465ZM7.00266 1.67579C6.81024 1.85217 6.49994 1.71568 6.49994 1.45465L7.49994 1.45465C7.49994 0.845571 6.77592 0.527073 6.32694 0.938636L7.00266 1.67579ZM6.49994 11.5454C6.49994 11.2843 6.81024 11.1478 7.00266 11.3242L6.32693 12.0614C6.77592 12.4729 7.49994 12.1544 7.49994 11.5454L6.49994 11.5454Z" />
              </svg>
            </div>
            <div
              className="banner-next swiper-next-arrow"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
            >
              <svg
                width={29}
                height={13}
                viewBox="0 0 29 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.0001 1.45465V6.5V11.5454C22.0001 11.7194 22.2069 11.8104 22.3352 11.6928L28.0001 6.5L22.3352 1.30722C22.2069 1.18963 22.0001 1.28063 22.0001 1.45465Z" />
                <path d="M1 6C0.723858 6 0.5 6.22386 0.5 6.5C0.5 6.77614 0.723858 7 1 7V6ZM22.3352 1.30722L21.9973 1.67579L21.9973 1.67579L22.3352 1.30722ZM28.0001 6.5L28.3379 6.86858L28.74 6.5L28.3379 6.13142L28.0001 6.5ZM22.3352 11.6928L22.6731 12.0614V12.0614L22.3352 11.6928ZM1 7H22.0001V6H1V7ZM22.5001 6.5V1.45465H21.5001V6.5H22.5001ZM21.9973 1.67579L27.6622 6.86858L28.3379 6.13142L22.6731 0.938639L21.9973 1.67579ZM27.6622 6.13142L21.9973 11.3242L22.6731 12.0614L28.3379 6.86858L27.6622 6.13142ZM22.5001 11.5454V6.5H21.5001V11.5454H22.5001ZM21.9973 11.3242C22.1898 11.1478 22.5001 11.2843 22.5001 11.5454H21.5001C21.5001 12.1544 22.2241 12.4729 22.6731 12.0614L21.9973 11.3242ZM22.5001 1.45465C22.5001 1.71567 22.1898 1.85218 21.9973 1.67579L22.6731 0.938641C22.2241 0.527068 21.5001 0.845579 21.5001 1.45465H22.5001Z" />
              </svg>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Banner;
