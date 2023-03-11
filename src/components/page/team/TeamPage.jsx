import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import JoinUsTeam from "./JoinUsTeam";
import Sponsor from "./Sponsor";
import TeamWrap from "./TeamWrap";

function TeamPage() {
  return (
    <>
      <Breadcrumb name="Our Team" />
      <TeamWrap />
      <JoinUsTeam />
      <Sponsor />
    </>
  );
}

export default TeamPage;
