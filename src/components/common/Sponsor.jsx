import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";  

SwiperCore.use([ Autoplay]);
function Sponsor() {
    const sponsorSlide = {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 5000,
        },
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
    
          // when window width is >= 640px
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          // when window width is >= 992px
          992: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          // when window width is >= 1400px
          1400: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        },
      };
  return (
    <>
     <div className="sponsor-section">
        <div className="container">
          <div className="row">
            <Swiper {...sponsorSlide} className="swiper sponsor-slider-dark">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <Link to={"#"} className="sponsor-item ">
                    <img src={process.env.PUBLIC_URL + "/images/bg/sp1.png"} className="mx-auto" alt="images" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link to={"#"} className="sponsor-item">
                    <img src={process.env.PUBLIC_URL + "/images/bg/sp2.png"} alt="images" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link to={"#"} className="sponsor-item">
                    <img src={process.env.PUBLIC_URL + "/images/bg/sp3.png"} alt="images" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link to={"#"} className="sponsor-item">
                    <img src={process.env.PUBLIC_URL + "/images/bg/sp4.png"} alt="images" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link to={"#"} className="sponsor-item">
                    <img src={process.env.PUBLIC_URL + "/images/bg/sp2.png"} alt="images" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link to={"#"} className="sponsor-item">
                    <img src={process.env.PUBLIC_URL + "/images/bg/sp3.png"} alt="images" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link to={"#"} className="sponsor-item">
                    <img src={process.env.PUBLIC_URL + "/images/bg/sp5.png"} alt="images" />
                  </Link>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>   
    </>
  )
}

export default Sponsor