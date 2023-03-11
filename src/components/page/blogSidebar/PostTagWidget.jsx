import React from "react";
import { Link } from "react-router-dom";

function PostTagWidget() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="widget">
        <h4 className="widget-title">Cloud Tag</h4>
        <ul className="tag-list">
          <li className="hover-btn">
            <span />
            <Link onClick={scrollTop} to={"#"}>
              Advertising
            </Link>
          </li>
          <li className="hover-btn">
            <span />
            <Link onClick={scrollTop} to={"#"}>
              # Agency
            </Link>
          </li>
          <li className="hover-btn">
            <span />
            <Link onClick={scrollTop} to={"#"}>
              branding Agency
            </Link>
          </li>
          <li className="hover-btn">
            <span />
            <Link onClick={scrollTop} to={"#"}>
              Multi-Language
            </Link>
          </li>
          <li className="hover-btn">
            <span />
            <Link onClick={scrollTop} to={"#"}>
              Pr tools
            </Link>
          </li>
          <li className="hover-btn">
            <span />
            <Link onClick={scrollTop} to={"#"}>
              data drive
            </Link>
          </li>
          <li className="hover-btn">
            <span />
            <Link onClick={scrollTop} to={"#"}>
              Website UI
            </Link>
          </li>
          <li className="hover-btn">
            <span />
            <Link onClick={scrollTop} to={"#"}>
              website ux
            </Link>
          </li>
          <li className="hover-btn">
            <span />
            <Link onClick={scrollTop} to={"#"}>
              digital d
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PostTagWidget;
