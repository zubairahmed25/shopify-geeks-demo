import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import JoinUs from "../../common/JoinUs";
import ProjectDetailsWrap from "./ProjectDetailsWrap";
import RelatedWork from "./RelatedWork";
import Sponsor from "../../common/Sponsor";

function ProjectDetailsPage() {
  return (
    <>
      <Breadcrumb name="Project Details" />
      <ProjectDetailsWrap />
      <RelatedWork />
      <JoinUs />
      <Sponsor />
    </>
  );
}

export default ProjectDetailsPage;
