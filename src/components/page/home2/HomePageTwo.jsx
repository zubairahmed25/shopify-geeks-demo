import React from "react";
import JoinUs from "../../common/JoinUs";
import AboutTwoArea from "./AboutTwoArea";
import AchivementTwo from "./AchivementTwo";
import BannerTwo from "./BannerTwo";
import HomeTowTeamArea from "./HomeTowTeamArea";
import HomeTwoLatestBlog from "./HomeTwoLatestBlog";
import HomeTwoSonsor from "./HomeTwoSonsor";
import HomeTwoTestimonial from "./HomeTwoTestimonial";
import ServiceTwoArea from "./ServiceTwoArea";

function HomePageTwo() {
  return (
    <>
      <BannerTwo />
      <ServiceTwoArea />
      <AboutTwoArea />
      <AchivementTwo />
      <HomeTowTeamArea />
      <HomeTwoLatestBlog />
      <HomeTwoTestimonial />
      <JoinUs padding="pt-120" />
      <HomeTwoSonsor />
    </>
  );
}

export default HomePageTwo;
