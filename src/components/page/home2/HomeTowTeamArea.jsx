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
function HomeTowTeamArea() {
  const teamTwoSlider = {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    autoplay: {
      delay: 9000,
    },
    navigation: {
      nextEl: ".expert-next",
      prevEl: ".expert-prev",
    },

    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 4,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <>
      <div className="expert-section pt-120 position-relative">
        <div className="container">
          <div className="row mb-4 pb-3 d-flex justify-content-lg-start justify-content-center align-items-center g-4">
            <div className="col-lg-8 col-sm-10 text-lg-start text-center">
              <div
                className="section-title2 wow animate fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <h5>Our Team</h5>
                <h2>Meet Expart People</h2>
                <p>
                  We've all been a part of that group project. You know, the
                  project <br /> where one person takes the lead.
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end text-center">
              <Link
                to={`${process.env.PUBLIC_URL}/team`}
                className="eg-btn outlined-btn hover-btn"
              >
                <span>
                  Explore More
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/icon/arrow-black.svg"
                    }
                    alt="images"
                  />
                </span>
              </Link>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            <div className="col-12">
              <Swiper
                {...teamTwoSlider}
                className="swiper expert-slider position-relative"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="team-item">
                      <img
                        src={process.env.PUBLIC_URL + "/images/bg/expert1.png"}
                        alt="images"
                      />
                      <div className="team-overlay">
                        <div className="overlay-content hover-btn">
                          <span />
                          <h4>
                            <Link to={"#"}>Mokarram Hossain</Link>
                          </h4>
                          <p>CEO</p>
                          <ul>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank" to={"#"}>fb</Link>
                            </li>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.twitter.com/" target="_blank" to={"#"}>tw</Link>
                            </li>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.linkedin.com/" target="_blank" to={"#"}>in</Link>
                            </li>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.pinterest.com/" target="_blank" to={"#"}>pr</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="team-item">
                      <img
                        src={process.env.PUBLIC_URL + "/images/bg/expert2.png"}
                        alt="images"
                      />
                      <div className="team-overlay">
                        <div className="overlay-content hover-btn">
                          <span />
                          <h4>
                            <Link to={"#"}>Mazhar Mohiuddin</Link>
                          </h4>
                          <p>Co Founder</p>
                          <ul>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank" to={"#"}>fb</Link>
                            </li>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.twitter.com/" target="_blank" to={"#"}>tw</Link>
                            </li>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.linkedin.com/" target="_blank" to={"#"}>in</Link>
                            </li>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.pinterest.com/" target="_blank" to={"#"}>pr</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="team-item">
                      <img
                        src={process.env.PUBLIC_URL + "/images/bg/expert3.png"}
                        alt="images"
                      />
                      <div className="team-overlay">
                        <div className="overlay-content hover-btn">
                          <span />
                          <h4>
                            <Link to={"#"}>Samina Eroca</Link>
                          </h4>
                          <p>Executive Manager</p>
                          <ul>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank" to={"#"}>fb</Link>
                            </li>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.twitter.com/" target="_blank" to={"#"}>tw</Link>
                            </li>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.linkedin.com/" target="_blank" to={"#"}>in</Link>
                            </li>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.pinterest.com/" target="_blank" to={"#"}>pr</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="team-item">
                      <img
                        src={process.env.PUBLIC_URL + "/images/bg/expert4.png"}
                        alt="images"
                      />
                      <div className="team-overlay">
                        <div className="overlay-content hover-btn">
                          <span />
                          <h4>
                            <Link to={"#"}>Jammie Watson</Link>
                          </h4>
                          <p>Area Manager</p>
                          <ul>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank" to={"#"}>fb</Link>
                            </li>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.twitter.com/" target="_blank" to={"#"}>tw</Link>
                            </li>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.linkedin.com/" target="_blank" to={"#"}>in</Link>
                            </li>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.pinterest.com/" target="_blank" to={"#"}>pr</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="team-item">
                      <img
                        src={process.env.PUBLIC_URL + "/images/bg/expert2.png"}
                        alt="images"
                      />
                      <div className="team-overlay">
                        <div className="overlay-content hover-btn">
                          <span> </span>
                          <h4>
                            <Link to={"#"}>Savannah Nguyen</Link>
                          </h4>
                          <p>Manager</p>
                          <ul>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank" to={"#"}>fb</Link>
                            </li>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.twitter.com/" target="_blank" to={"#"}>tw</Link>
                            </li>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.linkedin.com/" target="_blank" to={"#"}>in</Link>
                            </li>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.pinterest.com/" target="_blank" to={"#"}>pr</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="team-item">
                      <img
                        src={process.env.PUBLIC_URL + "/images/bg/expert4.png"}
                        alt="images"
                      />
                      <div className="team-overlay">
                        <div className="overlay-content hover-btn">
                          <span />
                          <h4>
                            <Link to={"#"}>Anjelina jolly</Link>
                          </h4>
                          <p>Co Founder</p>
                          <ul>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank" to={"#"}>fb</Link>
                            </li>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.twitter.com/" target="_blank" to={"#"}>tw</Link>
                            </li>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.linkedin.com/" target="_blank" to={"#"}>in</Link>
                            </li>
                            <li>
                              <Link  rel="noopener noreferrer" href="https://www.pinterest.com/" target="_blank" to={"#"}>pr</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
          <div className="row mt-50">
            <div className="slider-arrows expert-arrows d-flex justify-content-center">
              <div
                className="expert-prev swiper-prev-arrow"
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
                className="expert-next swiper-next-arrow"
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
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeTowTeamArea;
