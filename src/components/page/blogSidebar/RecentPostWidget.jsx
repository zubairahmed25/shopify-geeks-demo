import React from "react";
import { Link } from "react-router-dom";
function RecentPostWidget() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="widget">
        <h4 className="widget-title">Recent Post</h4>
        <ul className="m-0 p-0">
          <li className="recent-post-item">
            <div className="post-image">
              <img
                src={process.env.PUBLIC_URL + "/images/blog/recent4.png"}
                alt="images"
              />
            </div>
            <div className="post-content">
              <p className="date">06 August 2022</p>
              <h6>
                <Link
                  to={`${process.env.PUBLIC_URL}/blog-details`}
                  onClick={scrollTop}
                >
                  Caapitalize on low hanging fruit to identify...?
                </Link>
              </h6>
            </div>
          </li>
          <li className="recent-post-item">
            <div className="post-image">
              <img
                src={process.env.PUBLIC_URL + "/images/blog/recent2.png"}
                alt="images"
              />
            </div>
            <div className="post-content">
              <p className="date">15 January 2022</p>
              <h6>
                <Link
                  to={`${process.env.PUBLIC_URL}/blog-details`}
                  onClick={scrollTop}
                >
                  How To Find the Job that Fits You the Most ?
                </Link>
              </h6>
            </div>
          </li>
          <li className="recent-post-item">
            <div className="post-image">
              <img
                src={process.env.PUBLIC_URL + "/images/blog/recent3.png"}
                alt="images"
              />
            </div>
            <div className="post-content">
              <p className="date">20 January 2022</p>
              <h6>
                <Link
                  to={`${process.env.PUBLIC_URL}/blog-details`}
                  onClick={scrollTop}
                >
                  Why would you work with our branding agency..?
                </Link>
              </h6>
            </div>
          </li>
          <li className="recent-post-item">
            <div className="post-image">
              <img
                src={process.env.PUBLIC_URL + "/images/blog/recent1.png"}
                alt="images"
              />
            </div>
            <div className="post-content">
              <p className="date">20 June 2022</p>
              <h6>
                <Link
                  to={`${process.env.PUBLIC_URL}/blog-details`}
                  onClick={scrollTop}
                >
                  Perfect Your Market Positioning With Our Industry Experts..?
                </Link>
              </h6>
            </div>
          </li>
        </ul>
        <div></div>
      </div>
    </>
  );
}

export default RecentPostWidget;
