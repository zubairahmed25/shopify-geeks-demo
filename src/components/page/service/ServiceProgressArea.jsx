import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function ServiceProgressArea() {
  const brandingProgress = 85;
  const digitalMarketProgress = 73;
  const UIUXProgress = 93;
  return (
    <>
      <div className="row pt-120 d-flex justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-8">
          <div
            className="about-card wow animate fadeInDown"
            data-wow-duration="1.5s"
            data-wow-delay="0.5s"
          >
            <div className="about-content">
              <h5>Professional Skills</h5>
              <h3>We are a digitally-led, full-service creative agency.</h3>
              <p>
                At its core, disruption is a successful alteration to a set of
                values, purchase patterns, and human behavior.
              </p>
              <div className="counter-wrapper d-flex justify-content-lg-between justify-content-center flex-wrap gap-2">
                <div className="counter-item">
                  <CircularProgressbar
                    value={brandingProgress}
                    text={`${brandingProgress}%`}
                    className="progress-bar-circle circle_percent"
                  />
                  <h4>Branding Design</h4>
                </div>
                <div className="counter-item">
                  <CircularProgressbar
                    value={digitalMarketProgress}
                    text={`${digitalMarketProgress}%`}
                    className="progress-bar-circle circle_percent"
                  />
                  <h4>Digital Marketing</h4>
                </div>
                <div className="counter-item">
                  <CircularProgressbar
                    value={UIUXProgress}
                    text={`${UIUXProgress}%`}
                    className="progress-bar-circle circle_percent"
                  />
                  <h4>Ui/Ux Design</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-lg-block d-none">
          <div
            className="about-img wow animate fadeInDown"
            data-wow-duration="1.5s"
            data-wow-delay="0.5s"
          >
            <img
              src={process.env.PUBLIC_URL + "/images/bg/service-skill.png"}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceProgressArea;
