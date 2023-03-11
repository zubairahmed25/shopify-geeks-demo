import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../projects/ProjectCard";

function RelatedWork() {
  return (
    <>
      <div className="related-work-section pb-120">
        <div className="container">
          <div className="row g-4 d-flex justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-8 order-lg-1 order-0">
              <div
                className="section-card related-work-card wow animate fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <h2>Related Work</h2>
                <Link
                  to={`${process.env.PUBLIC_URL}/project`}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
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
              className="col-lg-4 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <ProjectCard
                image={process.env.PUBLIC_URL + "/images/bg/rlt-work1.png"}
                title="BRANDING"
              />
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <ProjectCard
                image={process.env.PUBLIC_URL + "/images/bg/rlt-work2.png"}
                title="DISCOVER"
              />
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <ProjectCard
                image={process.env.PUBLIC_URL + "/images/bg/rlt-work3.png"}
                title="PHOTOGRAPHY"
              />
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <ProjectCard
                image={process.env.PUBLIC_URL + "/images/bg/rlt-work4.png"}
                title="SHOP NOW"
              />
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <ProjectCard
                image={process.env.PUBLIC_URL + "/images/bg/rlt-work5.png"}
                title="DISCOVER"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RelatedWork;
