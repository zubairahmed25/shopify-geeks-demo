import React from "react";
import { Link } from "react-router-dom";

function RelatedWorkCard(props) {
  return (
    <>
      <div
        className="section-card related-work-card wow animate fadeInDown"
        data-wow-duration="1.5s"
        data-wow-delay="0.5s"
      >
        <h2>Related Work</h2>
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to={"#"}
          className="eg-btn hover-btn sectoin-card-btn"
        >
          <span>
            All Work
            <img src={props.image} alt="images" />
          </span>
        </Link>
      </div>
    </>
  );
}

export default RelatedWorkCard;
