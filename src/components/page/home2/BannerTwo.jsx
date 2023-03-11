import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/autoplay";
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);
function BannerTwo() {
  const banner2Slide = {
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
      nextEl: ".banner2-next",
      prevEl: ".banner2-prev",
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
      <div className="banner-section2 position-relative">
        <Swiper {...banner2Slide} className="swiper banner2">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide position-relative bg-img-1">
              <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center ">
                  <div className="col-xxl-7 col-xl-8 col-lg-10 col-md-10">
                    <div className="banner2-content">
                      <h5>WELCOME TO OUR BRANDING AGENCY</h5>
                      <div className="banner2-title">
                        <h1>We are creative Design, Agency !</h1>
                      </div>
                      {/* <h1>Zoomin’s Branding, Agency !</h1> */}
                      <p>
                        We create brand identity, perform 360 brand
                        communication campaigns combining ATL, BTL, Digital and
                        Social channels or in isolation. We plan &amp; create
                        experiences and drive engagement. We design, produce and
                        deliver brand.
                      </p>
                      <Link
                        to={`${process.env.PUBLIC_URL}/contact-us`}
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="eg-btn banner2-btn"
                      >
                        Contact Maneger
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide position-relative bg-img-2">
              <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center ">
                  <div className="col-xxl-7 col-xl-8 col-lg-10 col-md-10">
                    <div className="banner2-content">
                      <h5>WELCOME TO OUR CREATIVE AGENCY</h5>
                      <div className="banner2-title">
                        <h1>We are Creative Branding Agency</h1>
                      </div>
                      {/* <h1>Zoomin’s Branding, Agency !</h1> */}
                      <p>
                        We create brand identity, perform 360 brand
                        communication campaigns combining ATL, BTL, Digital and
                        Social channels or in isolation. We plan &amp; create
                        experiences and drive engagement. We design, produce and
                        deliver brand.
                      </p>
                      <Link
                        to={`${process.env.PUBLIC_URL}/contact-us`}
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="eg-btn banner2-btn"
                      >
                        Contact Maneger
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="slider-arrows banner2-arrows text-center d-flex justify-content-start">
            <div
              className="banner2-prev swiper-prev-arrow me-2 hover-btn"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            >
              <span />
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
              className="banner2-next swiper-next-arrow ms-2 hover-btn"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
            >
              <span />
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

export default BannerTwo;
