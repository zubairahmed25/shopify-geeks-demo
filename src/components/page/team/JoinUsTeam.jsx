import React from "react";
import { Link } from "react-router-dom";

function JoinUsTeam() {
  return (
    <>
      <div className="join-us-section">
        <div className="container">
          <div className="join-us-area">
            <div className="join-us-content flex-md-nowrap flex-wrap">
              <h2>Don’t Late, Join With Us Today!</h2>
              <h5>
                Explore Select, Our Premimum Solution For Branding &amp;
                Business.
              </h5>
            </div>
            <div className="eg-btn join-btn hover-btn">
              <span>
                <Link onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} to={`${process.env.PUBLIC_URL}/contact-us`}>
                  Join Now
                  <img
                    src={process.env.PUBLIC_URL + "/images/icon/arrow-dark.svg"}
                    alt="images"
                  />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinUsTeam;
