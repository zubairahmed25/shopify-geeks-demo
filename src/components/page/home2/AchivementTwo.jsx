import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import CountUp from "react-countup";
import "react-modal-video/css/modal-video.css";

function AchivementTwo() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="achievment-section2">
        <div className="container">
          <div className="row d-flex align-items-center g-4">
            <div className="col-lg-4 col-md-5 col-sm-6">
              <div className="achv-vdo2">
                <img
                  src={process.env.PUBLIC_URL + "/images/bg/ach-vdo2.png"}
                  alt="images"
                />
                <div className="video-play">
                  <div
                    onClick={() => setOpen(true)}
                    className="video-open video-icon"
                  >
                    <i className="bx bx-play" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 col-sm-6">
              <div className="quote-text ms-auto">
                <h3>Our Achievements</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, simply free text by injected humour, or randomised.
                  We’re west coast change-makers, in a complex world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="counter2-section">
        <div className="container">
          <div className="row">
            <div className="counter2-wrapper d-flex justify-content-lg-between justify-content-center flex-wrap gap-4">
              <div className="single-counter">
                <div className="counter-icon">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icon/ach24.svg"}
                    alt="images"
                  />
                </div>
                <div className="counter-text hometwo counter-item">
                  <h3 data-odometer-final={40}>
                    <CountUp
                      className="odometer"
                      end={20}
                      delay={2}
                      duration={5}
                    />
                  </h3>
                  <p>Expert People</p>
                </div>
              </div>
              <div className="single-counter">
                <div className="counter-icon">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icon/ach23.svg"}
                    alt="images"
                  />
                </div>
                <div className="counter-text hometwo counter-item">
                  <h3 className="odometer" data-odometer-final={150}>
                    <CountUp
                      className="odometer"
                      end={350}
                      delay={2}
                      duration={5}
                    />
                  </h3>
                  <p>Satisfied Client</p>
                </div>
              </div>
              <div className="single-counter">
                <div className="counter-icon">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icon/ach22.svg"}
                    alt="images"
                  />
                </div>
                <div className="counter-text hometwo counter-item">
                  <h3 className="odometer" data-odometer-final={520}>
                    <CountUp
                      className="odometer"
                      end={500}
                      delay={2}
                      duration={5}
                    />
                  </h3>
                  <p>Downloaded</p>
                </div>
              </div>
              <div className="single-counter">
                <div className="counter-icon">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icon/ach21.svg"}
                    alt="images"
                  />
                </div>
                <div className="counter-text hometwo counter-item">
                  <h3 className="odometer" data-odometer-final={40}>
                    <CountUp
                      className="odometer"
                      end={80}
                      delay={2}
                      duration={5}
                    />
                  </h3>
                  <p>Unique Product</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  );
}

export default AchivementTwo;
