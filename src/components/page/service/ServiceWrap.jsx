import React from "react";
import ServiceItem from "./ServiceItem";
import ServiceProgressArea from "./ServiceProgressArea";

function ServiceWrap() {
  return (
    <>
      <div className="service-section pt-120">
        <div className="container">
          <div className="row d-flex justify-content-lg-start justify-content-center">
            <div className="col-md-8 text-center">
              <div
                className="section-title wow animate fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <h2>Services</h2>
              </div>
            </div>
          </div>
          <ServiceItem />
          <ServiceProgressArea />
        </div>
      </div>
    </>
  );
}

export default ServiceWrap;
