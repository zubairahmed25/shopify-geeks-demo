import React from "react";
import Banner from "./Banner";
import Sponsor from "../../common/Sponsor";
import JoinUs from "../../common/JoinUs";
import HomeoneLetestWork from "./HomeoneLetestWork";
import HomeoneService from "./HomeoneService";
import TestimonialOne from "./TestimonialOne";
import BlogArea from "./BlogArea";
import TeamArea from "./TeamArea";
import AchivmentArea from "../../common/AchivementArea";
import AboutArea from "./AboutArea";

function HomePage() {
  return (
    <>
      <Banner />
      <HomeoneService />
      <HomeoneLetestWork />
      <AboutArea />
      <AchivmentArea />
      <TeamArea />
      <BlogArea />
      <TestimonialOne />
      <JoinUs padding="pt-120" />
      <Sponsor />
    </>
  );
}

export default HomePage;
