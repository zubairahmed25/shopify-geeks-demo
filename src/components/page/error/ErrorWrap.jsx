import React from "react";

import { Link } from "react-router-dom";
function ErrorWrap() {
  return (
    <>
      <div className="error-section pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 text-center">
              <div className="error-wrapper">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/icon/error-circle1.svg"
                  }
                  className="circle1"
                  alt="imgs"
                />
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/icon/error-circle2.svg"
                  }
                  className="circle2"
                  alt="images"
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/icon/cross1.svg"}
                  className="cross1"
                  alt="images"
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/icon/cross2.svg"}
                  className="cross2"
                  alt="images"
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/icon/cross3.svg"}
                  className="cross3"
                  alt="images"
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/icon/cross4.svg"}
                  className="cross4"
                  alt="images"
                />
                <div className="error-img">
                  <img
                    src={process.env.PUBLIC_URL + "/images/bg/error-img.png"}
                    alt="images"
                  />
                </div>
                <div className="error-content">
                  <h3>there’s nothing here</h3>
                  <p className="para">
                    The page you are looking for may have been renamed or does
                    nost exist in this server you will be redirected to homepage
                    shortly.
                  </p>
                  <Link
                    to={`${process.env.PUBLIC_URL}/`}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="eg-btn hover-btn error-btn"
                  >
                    <span>
                      Back to Home
                      <svg
                        width={51}
                        height={13}
                        viewBox="0 0 51 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M44 1.45465V6.5V11.5454C44 11.7194 44.2068 11.8104 44.3351 11.6928L50 6.5L44.3351 1.30722C44.2068 1.18963 44 1.28063 44 1.45465Z" />
                        <path d="M1 6C0.723858 6 0.5 6.22386 0.5 6.5C0.5 6.77614 0.723858 7 1 7V6ZM44.3351 1.30722L44.673 0.938639L44.673 0.938639L44.3351 1.30722ZM50 6.5L50.3378 6.86858L50.7399 6.5L50.3378 6.13142L50 6.5ZM44.3351 11.6928L44.673 12.0614L44.673 12.0614L44.3351 11.6928ZM1 7H44V6H1V7ZM44.5 6.5V1.45465H43.5V6.5H44.5ZM43.9972 1.67579L49.6621 6.86858L50.3378 6.13142L44.673 0.938639L43.9972 1.67579ZM49.6621 6.13142L43.9972 11.3242L44.673 12.0614L50.3378 6.86858L49.6621 6.13142ZM44.5 11.5454V6.5H43.5V11.5454H44.5ZM43.9972 11.3242C44.1897 11.1478 44.5 11.2843 44.5 11.5454H43.5C43.5 12.1544 44.224 12.4729 44.673 12.0614L43.9972 11.3242ZM44.5 1.45465C44.5 1.71568 44.1897 1.85218 43.9972 1.67579L44.673 0.938639C44.224 0.527072 43.5 0.845576 43.5 1.45465H44.5Z" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorWrap;
