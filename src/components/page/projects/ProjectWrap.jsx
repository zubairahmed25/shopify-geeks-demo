import React from "react";
import { Link } from "react-router-dom";

import ProjectCard from "./ProjectCard";
function ProjectWrap() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="latest-work pt-120">
        <div className="container">
          <div className="row d-flex justify-content-lg-end justify-content-center">
            <div className="col-md-8 text-center">
              <div
                className="section-title wow animate fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <h2>Latest Work</h2>
              </div>
            </div>
          </div>
          <div className="row g-4 d-flex justify-content-center">
            <div className="col-lg-5 col-md-8 col-sm-8 order-lg-1 order-0">
              <div
                className="section-card l-work-card wow animate fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <h2>Look Our Latest Work..</h2>
                <p>
                  We guide game-changing companies, across platforms &amp;
                  places, through agile design &amp; digital experience. We make
                  waves.
                </p>
                <Link
                  onClick={scrollTop}
                  to={`${process.env.PUBLIC_URL}/project`}
                  className="eg-btn hover-btn sectoin-card-btn"
                >
                  <span>
                    All Work
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
              className="col-lg-7 col-md-12 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.5s"
            >
              <div className="l-work-item">
                <img
                  src={process.env.PUBLIC_URL + "/images/bg/work1.png"}
                  alt="images"
                />
                <div className="work-overlay">
                  <div className="work-title hover-btn">
                    <span />
                    <i className="bi bi-arrow-90deg-right" />
                    <h3>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/project-details`}
                      >
                        BRANDING
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <ProjectCard
                title="DISCOVER"
                image={process.env.PUBLIC_URL + "/images/bg/work2.png"}
              />
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <ProjectCard
                title="PHOTOGRAPHY"
                image={process.env.PUBLIC_URL + "/images/bg/work3.png"}
              />
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <ProjectCard
                title="SHOP NOW"
                image={process.env.PUBLIC_URL + "/images/bg/work4.png"}
              />
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <ProjectCard
                title="DISCOVER"
                image={process.env.PUBLIC_URL + "/images/bg/work5.png"}
              />
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <ProjectCard
                title="PHOTOGRAPHY"
                image={process.env.PUBLIC_URL + "/images/bg/work6.png"}
              />
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <ProjectCard
                title="SHOP NOW"
                image={process.env.PUBLIC_URL + "/images/bg/work7.png"}
              />
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <ProjectCard
                title="DISCOVER"
                image={process.env.PUBLIC_URL + "/images/bg/work8.png"}
              />
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <ProjectCard
                title="PHOTOGRAPHY"
                image={process.env.PUBLIC_URL + "/images/bg/work9.png"}
              />
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <ProjectCard
                title="SHOP NOW"
                image={process.env.PUBLIC_URL + "/images/bg/work10.png"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectWrap;
