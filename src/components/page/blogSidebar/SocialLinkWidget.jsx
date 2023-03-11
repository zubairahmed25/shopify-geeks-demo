import React from "react";

function SocialLinkWidget() {
  return (
    <>
      <div className="widget">
        <h4 className="widget-title">Follow Social</h4>
        <ul className="social-list">
          <li className="hover-btn">
            <span />
            <a
              rel="noopener noreferrer"
              href="https://www.twitter.com/"
              target="_blank"
            >
              <i className="bx bxl-twitter" />
            </a>
          </li>
          <li className="hover-btn">
            <span />
            <a
              rel="noopener noreferrer"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <i className="bx bxl-facebook" />
            </a>
          </li>
          <li className="hover-btn">
            <span />
            <a
              rel="noopener noreferrer"
              href="https://www.pinterest.com/"
              target="_blank"
            >
              <i className="bx bxl-pinterest-alt" />
            </a>
          </li>
          <li className="hover-btn">
            <span />
            <a
              rel="noopener noreferrer"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <i className="bx bxl-instagram" />
            </a>
          </li>
          <li className="hover-btn">
            <span />
            <a
              rel="noopener noreferrer"
              href="https://www.dribbble.com/"
              target="_blank"
            >
              <i className="bx bxl-dribbble" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SocialLinkWidget;
