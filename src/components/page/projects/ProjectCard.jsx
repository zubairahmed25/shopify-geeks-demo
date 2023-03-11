import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  return (
    <>
      <div className="l-work-item">
        <img src={props.image} alt="images" />
        <div className="work-overlay">
          <div className="work-title hover-btn">
            <span> </span>
            <i className="bi bi-arrow-90deg-right"></i>
            <h3>
              <Link
                to={`${process.env.PUBLIC_URL}/project-details`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {props.title}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
