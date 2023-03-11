import React from "react";

function SectionTitle(props) {
  return (
    <>
      <div className="col-md-12 text-center">
        <div
          className="section-title wow animate fadeInDown"
          data-wow-duration="1.5s"
          data-wow-delay="0.5s"
        >
          <h2>{props.title}</h2>
        </div>
      </div>
    </>
  );
}

export default SectionTitle;
