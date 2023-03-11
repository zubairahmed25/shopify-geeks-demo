import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import JoinUs from "../../common/JoinUs";
import Sponsor from "../../common/Sponsor";
import ProjectWrap from "./ProjectWrap";

function ProjectPage() {
  return (
    <>
      <Breadcrumb name="Our Project" />
      <ProjectWrap />
      <JoinUs padding="pt-120" />
      <Sponsor />
    </>
  );
}

export default ProjectPage;
