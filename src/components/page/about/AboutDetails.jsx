import React from "react";

function AboutDetails() {
  return (
    <>
      <div className="col-lg-6 col-md-8 col-sm-8 order-1">
        <div
          className="about-img wow animate fadeInDown"
          data-wow-duration="1.5s"
          data-wow-delay="0.5s"
        >
          <div className="abt-img-tag">
            <div className="icon">
              <img
                src={process.env.PUBLIC_URL + "/images/icon/exp-icon.svg"}
                alt="images"
              />
            </div>
            <h5>05 Years Experience</h5>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/images/bg/abt1.png"}
            alt="images"
          />
        </div>
      </div>
    </>
  );
}

export default AboutDetails;
