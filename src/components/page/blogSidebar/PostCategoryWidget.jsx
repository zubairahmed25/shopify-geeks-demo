import React from "react";
import { Link } from "react-router-dom";

function PostCategoryWidget() {
  return (
    <>
      <div className="widget">
        <h4 className="widget-title">Post Categoris</h4>
        <ul className="category-list">
          <li className="hover-btn">
            <span />
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to={"#"}
            >
              <span>Branding</span> <span>03</span>
            </Link>
          </li>
          <li className="hover-btn">
            <span />
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to={"#"}
            >
              <span>Creative Agency</span> <span>05</span>
            </Link>
          </li>
          <li className="hover-btn">
            <span />
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to={"#"}
            >
              <span>Design &amp; Art</span> <span>01</span>
            </Link>
          </li>
          <li className="hover-btn">
            <span />
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to={"#"}
            >
              <span>Inspiration</span> <span>02</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PostCategoryWidget;
