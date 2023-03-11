import React from "react";
import { Link } from "react-router-dom";

function TeamArea() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="team-section pt-120">
        <div className="container">
          <div className="row d-flex justify-content-lg-start justify-content-center">
            <div className="col-md-8 text-center">
              <div
                className="section-title wow animate fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <h2>Our Team</h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            <div
              className="col-lg-4 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.7s"
            >
              <div className="team-item">
                <img
                  src={process.env.PUBLIC_URL + "/images/bg/t1.png"}
                  alt="images"
                />
                <div className="team-overlay">
                  <div className="overlay-content hover-btn">
                    <span />
                    <h4>
                      <Link to={"#"}>Mokarram Hossain</Link>
                    </h4>
                    <p>Founder</p>
                    <ul>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/"
                          target="_blank"
                        >
                          fb
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.twitter.com/"
                          target="_blank"
                        >
                          tw
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/"
                          target="_blank"
                        >
                          in
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.pinterest.com/"
                          target="_blank"
                        >
                          pr
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <div className="team-item">
                <img
                  src={process.env.PUBLIC_URL + "/images/bg/t2.png"}
                  alt="images"
                />
                <div className="team-overlay">
                  <div className="overlay-content hover-btn">
                    <span />
                    <h4>
                      <Link to={"#"}>Mazhar Mohiuddin</Link>
                    </h4>
                    <p>Co Founder</p>
                    <ul>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/"
                          target="_blank"
                        >
                          fb
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.twitter.com/"
                          target="_blank"
                        >
                          tw
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/"
                          target="_blank"
                        >
                          in
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.pinterest.com/"
                          target="_blank"
                        >
                          pr
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-8 col-sm-8 order-lg-1 order-0 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.5s"
            >
              <div className="section-card team-card">
                <h2>Meet Our Group</h2>
                <p>
                  We are a very good team of Reves’s designers, curious problem
                  solvers, and passionate collaborators, who believe.
                </p>
                <Link
                  to={`${process.env.PUBLIC_URL}/team`}
                  onClick={scrollTop}
                  className="eg-btn hover-btn sectoin-card-btn"
                >
                  <span>
                    Explore More
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/icon/arrow-servc.svg"
                      }
                      alt="images"
                    />
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.8s"
            >
              <div className="team-item">
                <img
                  src={process.env.PUBLIC_URL + "/images/bg/t3.png"}
                  alt="images"
                />
                <div className="team-overlay">
                  <div className="overlay-content hover-btn">
                    <span />
                    <h4>
                      <Link to={"#"}>Samina Eroca</Link>
                    </h4>
                    <p>CEO</p>
                    <ul>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/"
                          target="_blank"
                        >
                          fb
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.twitter.com/"
                          target="_blank"
                        >
                          tw
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/"
                          target="_blank"
                        >
                          in
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.pinterest.com/"
                          target="_blank"
                        >
                          pr
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.9s"
            >
              <div className="team-item">
                <img
                  src={process.env.PUBLIC_URL + "/images/bg/t4.png"}
                  alt="images"
                />
                <div className="team-overlay">
                  <div className="overlay-content hover-btn">
                    <span />
                    <h4>
                      <Link to={"#"}>Jammie Watson</Link>
                    </h4>
                    <p>Manager</p>
                    <ul>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/"
                          target="_blank"
                        >
                          fb
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.twitter.com/"
                          target="_blank"
                        >
                          tw
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/"
                          target="_blank"
                        >
                          in
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.pinterest.com/"
                          target="_blank"
                        >
                          pr
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="1s"
            >
              <div className="team-item">
                <img
                  src={process.env.PUBLIC_URL + "/images/bg/t6.png"}
                  alt="images"
                />
                <div className="team-overlay">
                  <div className="overlay-content hover-btn">
                    <span> </span>
                    <h4>
                      <Link to={"#"}>Savannah Nguyen</Link>
                    </h4>
                    <p>Developer</p>
                    <ul>
                      <li>
                        <Link to={"#"}>fb</Link>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/"
                          target="_blank"
                        >
                          fb
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.twitter.com/"
                          target="_blank"
                        >
                          tw
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/"
                          target="_blank"
                        >
                          in
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.pinterest.com/"
                          target="_blank"
                        >
                          pr
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="1.1s"
            >
              <div className="team-item">
                <img
                  src={process.env.PUBLIC_URL + "/images/bg/t5.png"}
                  alt="images"
                />
                <div className="team-overlay">
                  <div className="overlay-content hover-btn">
                    <span />
                    <h4>
                      <Link to={"#"}>Anjelina jolly</Link>
                    </h4>
                    <p>Co Founder</p>
                    <ul>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/"
                          target="_blank"
                        >
                          fb
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.twitter.com/"
                          target="_blank"
                        >
                          tw
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/"
                          target="_blank"
                        >
                          in
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.pinterest.com/"
                          target="_blank"
                        >
                          pr
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamArea;
