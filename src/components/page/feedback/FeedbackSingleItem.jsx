import React from "react";
import { Link } from "react-router-dom";

function FeedbackSingleItem(props) {
  return (
    <>
      <div className="feedback-single hover-btn">
        <span></span>
        <div className="header-area">
          <p>{props.details}</p>
        </div>
        <div className="author-area d-flex justify-content-start align-items-center">
          <div className="author-img">
            <img src={props.image} alt="images" />
          </div>
          <div className="author-details">
            <h5>
              <Link to={"#"}>{props.name}</Link>
            </h5>
            <p>{props.title}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedbackSingleItem;
