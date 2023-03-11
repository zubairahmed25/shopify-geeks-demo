import React from "react";
import SectionTitle from "../../common/SectionTitle";
import TeamItem from "../../common/TeamItem";

function TeamWrap() {
  return (
    <>
      <div className="team-section pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-lg-start justify-content-center">
            <SectionTitle title="Our Team" />
          </div>
          <div className="row d-flex justify-content-center g-4">
            <div className="col-lg-4 col-md-6 col-sm-8 order-1">
              <TeamItem
                image={process.env.PUBLIC_URL + "/images/bg/t1.png"}
                name="Mokarram Hossain"
                title="Founder"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8 order-1">
              <TeamItem
                image={process.env.PUBLIC_URL + "/images/bg/t2.png"}
                name="Mokarram Hossain"
                title="Founder"
              />
            </div>
            <div className="col-lg-4 col-md-8 col-sm-8 order-lg-1 order-0 d-flex align-items-start">
              <div className="section-card team-card">
                <h2>Meet Our Group</h2>
                <p className="mb-0">
                  We are a very good team of Reves’s designers, curious problem
                  solvers, and passionate collaborators, who believe that great
                  design, curious problem solvers, who believe that great design
                  and assionate collaborators
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.5s"
            >
              <TeamItem
                image={process.env.PUBLIC_URL + "/images/bg/t3.png"}
                name="Samina Eroca"
                title="Managing Director"
              />
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.5s"
            >
              <TeamItem
                image={process.env.PUBLIC_URL + "/images/bg/t4.png"}
                name="Jammie Watson"
                title="Manager"
              />
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.5s"
            >
              <TeamItem
                image={process.env.PUBLIC_URL + "/images/bg/t5.png"}
                name="Savannah Nguyen"
                title="Area Manager"
              />
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.5s"
            >
              <TeamItem
                image={process.env.PUBLIC_URL + "/images/bg/t6.png"}
                name="Anjelina jolly"
                title="Designer"
              />
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.5s"
            >
              <TeamItem
                image={process.env.PUBLIC_URL + "/images/bg/t7.png"}
                name="Samina Eroca"
                title="Developer"
              />
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.5s"
            >
              <TeamItem
                image={process.env.PUBLIC_URL + "/images/bg/t8.png"}
                name="Jammie Watson"
                title="Co Founder"
              />
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.5s"
            >
              <TeamItem
                image={process.env.PUBLIC_URL + "/images/bg/t9.png"}
                name="Savannah Nguyen"
                title="Software Engineer"
              />
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 order-1 wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.5s"
            >
              <TeamItem
                image={process.env.PUBLIC_URL + "/images/bg/t10.png"}
                name="Anjelina jolly"
                title="QA"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamWrap;
