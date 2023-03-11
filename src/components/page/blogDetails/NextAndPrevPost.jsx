import React from "react";
import { Link } from "react-router-dom";

function NextAndPrevPost() {
  return (
    <>
      <div className="next-prev-post">
        <div className="row g-3">
          <div className="col-md-6 text-md-start text-center">
            <div className="post-arrow">
              <Link to={"#"}  onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>
                <h6>Previous Post</h6>
              </Link>
              <Link to={"#"}>
                <h5>Climate change detection with application</h5>
              </Link>
            </div>
          </div>
          <div className="col-md-6 text-md-end text-center">
            <div className="post-arrow">
              <Link to={"#"}>
                <h6>Next Post</h6>
              </Link>
              <Link  onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} to={"#"}>
                <h5>10 Hottest Facebook Trends in What’s the</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NextAndPrevPost;
