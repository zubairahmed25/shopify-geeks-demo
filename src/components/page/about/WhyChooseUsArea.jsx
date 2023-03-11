import React from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function WhyChooseUsArea() {
  const brandingProgress = 85;
  const digitalMarketProgress = 73;
  const UIUXProgress = 93;

  return (
    <>
      <div className="col-lg-6 col-md-8 col-sm-8 order-md-3 order-4">
        <div
          className="about-card wow animate fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay="0.5s"
        >
          <div className="about-content about-content2">
            <h5>Why Choose Us ?</h5>
            <h3>We're at the heart of NYC Our reach is Global.</h3>
            <p>
              At its core, disruption is a successful alteration to a set of
              values, purchase patterns, and human behavior.
            </p>
            <div className="counter-wrapper d-flex justify-content-xl-between justify-content-center flex-wrap gap-3">
              <div className="counter-item">
                <CircularProgressbar
                  value={brandingProgress}
                  text={`${brandingProgress}%`}
                  className="progress-bar-circle circle_percent"
                />

                <h4>Branding Design</h4>
              </div>
              <div className="counter-item">
                <CircularProgressbar
                  value={digitalMarketProgress}
                  text={`${digitalMarketProgress}%`}
                  className="progress-bar-circle circle_percent"
                />
                <h4>Digital Marketing</h4>
              </div>
              <div className="counter-item">
                <CircularProgressbar
                  value={UIUXProgress}
                  text={`${UIUXProgress}%`}
                  className="progress-bar-circle circle_percent"
                />
                <h4>Ui/Ux Design</h4>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="col-lg-6 col-md-8 col-sm-8 order-2">
        <div
          className="about-card wow animate fadeInDown"
          data-wow-duration="1.5s"
          data-wow-delay="0.5s"
        >
          <div className="about-content">
            <h5>About Reves’s</h5>
            <h3>We drive experiences for brands with purpose.</h3>
            <p>
              We’re west coast change-makers, in a complex world. The brands we
              support are positioned to be purposeful and powerful while also
              fluid.
            </p>
            <ul>
              <li>
                <Link
                  to={"#"}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <svg
                    width={31}
                    height={13}
                    viewBox="0 0 31 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 1.45465V6.5V11.5454C24 11.7194 24.2068 11.8104 24.3351 11.6928L30 6.5L24.3351 1.30722C24.2068 1.18963 24 1.28063 24 1.45465Z" />
                    <path d="M1 6C0.723858 6 0.5 6.22386 0.5 6.5C0.5 6.77614 0.723858 7 1 7V6ZM24.3351 1.30722L23.9972 1.67579L23.9972 1.67579L24.3351 1.30722ZM30 6.5L30.3378 6.86858L30.7399 6.5L30.3378 6.13142L30 6.5ZM24.3351 11.6928L24.673 12.0614V12.0614L24.3351 11.6928ZM1 7H24V6H1V7ZM24.5 6.5V1.45465H23.5V6.5H24.5ZM23.9972 1.67579L29.6621 6.86858L30.3378 6.13142L24.673 0.938639L23.9972 1.67579ZM29.6621 6.13142L23.9972 11.3242L24.673 12.0614L30.3378 6.86858L29.6621 6.13142ZM24.5 11.5454V6.5H23.5V11.5454H24.5ZM23.9972 11.3242C24.1897 11.1478 24.5 11.2843 24.5 11.5454H23.5C23.5 12.1544 24.224 12.4729 24.673 12.0614L23.9972 11.3242ZM24.5 1.45465C24.5 1.71567 24.1897 1.85218 23.9972 1.67579L24.673 0.938641C24.224 0.527068 23.5 0.845579 23.5 1.45465H24.5Z" />
                  </svg>
                  Creating with a Special or Unique Process
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <svg
                    width={31}
                    height={13}
                    viewBox="0 0 31 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 1.45465V6.5V11.5454C24 11.7194 24.2068 11.8104 24.3351 11.6928L30 6.5L24.3351 1.30722C24.2068 1.18963 24 1.28063 24 1.45465Z" />
                    <path d="M1 6C0.723858 6 0.5 6.22386 0.5 6.5C0.5 6.77614 0.723858 7 1 7V6ZM24.3351 1.30722L23.9972 1.67579L23.9972 1.67579L24.3351 1.30722ZM30 6.5L30.3378 6.86858L30.7399 6.5L30.3378 6.13142L30 6.5ZM24.3351 11.6928L24.673 12.0614V12.0614L24.3351 11.6928ZM1 7H24V6H1V7ZM24.5 6.5V1.45465H23.5V6.5H24.5ZM23.9972 1.67579L29.6621 6.86858L30.3378 6.13142L24.673 0.938639L23.9972 1.67579ZM29.6621 6.13142L23.9972 11.3242L24.673 12.0614L30.3378 6.86858L29.6621 6.13142ZM24.5 11.5454V6.5H23.5V11.5454H24.5ZM23.9972 11.3242C24.1897 11.1478 24.5 11.2843 24.5 11.5454H23.5C23.5 12.1544 24.224 12.4729 24.673 12.0614L23.9972 11.3242ZM24.5 1.45465C24.5 1.71567 24.1897 1.85218 23.9972 1.67579L24.673 0.938641C24.224 0.527068 23.5 0.845579 23.5 1.45465H24.5Z" />
                  </svg>
                  A Radical Change
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <svg
                    width={31}
                    height={13}
                    viewBox="0 0 31 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 1.45465V6.5V11.5454C24 11.7194 24.2068 11.8104 24.3351 11.6928L30 6.5L24.3351 1.30722C24.2068 1.18963 24 1.28063 24 1.45465Z" />
                    <path d="M1 6C0.723858 6 0.5 6.22386 0.5 6.5C0.5 6.77614 0.723858 7 1 7V6ZM24.3351 1.30722L23.9972 1.67579L23.9972 1.67579L24.3351 1.30722ZM30 6.5L30.3378 6.86858L30.7399 6.5L30.3378 6.13142L30 6.5ZM24.3351 11.6928L24.673 12.0614V12.0614L24.3351 11.6928ZM1 7H24V6H1V7ZM24.5 6.5V1.45465H23.5V6.5H24.5ZM23.9972 1.67579L29.6621 6.86858L30.3378 6.13142L24.673 0.938639L23.9972 1.67579ZM29.6621 6.13142L23.9972 11.3242L24.673 12.0614L30.3378 6.86858L29.6621 6.13142ZM24.5 11.5454V6.5H23.5V11.5454H24.5ZM23.9972 11.3242C24.1897 11.1478 24.5 11.2843 24.5 11.5454H23.5C23.5 12.1544 24.224 12.4729 24.673 12.0614L23.9972 11.3242ZM24.5 1.45465C24.5 1.71567 24.1897 1.85218 23.9972 1.67579L24.673 0.938641C24.224 0.527068 23.5 0.845579 23.5 1.45465H24.5Z" />
                  </svg>
                  Possessing Special Skill or Knowledge
                </Link>
              </li>
            </ul>
            <Link
              to={`${process.env.PUBLIC_URL}/about-us`}
              className="eg-btn about-btn hover-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span>
                Read More
                <img
                  src={process.env.PUBLIC_URL + "/images/icon/btn-arrow.svg"}
                  alt="images"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-8 col-sm-8 col-sm-8 order-md-4 order-3">
        <div
          className="about-img wow animate fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay="0.5s"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/bg/abt2.png"}
            alt="images"
          />
        </div>
      </div>
    </>
  );
}

export default WhyChooseUsArea;
