import React from "react";
import AboutDetails from "./AboutDetails";
import WhyChooseUsArea from "./WhyChooseUsArea";

function AboutWrap() {
  return (
    <>
      <div className="about-section pt-120">
        <div className="container">
          <div className="row g-4 d-flex justify-content-center">
            <AboutDetails />
            <WhyChooseUsArea />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutWrap;
