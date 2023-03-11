import React from "react";
import AchivementArea from "../../common/AchivementArea";
import Breadcrumb from "../../common/Breadcrumb";
import JoinUs from "../../common/JoinUs";
import Sponsor from "../../common/Sponsor";
import Testimonial from "../../common/Testimonial";
import AboutWrap from "./AboutWrap";

function AboutPage() {
  return (
    <>
      <Breadcrumb name="About Us" />
      <AboutWrap />
      <AchivementArea />
      <Testimonial />
      <JoinUs padding="pt-120" />
      <Sponsor />
    </>
  );
}

export default AboutPage;
