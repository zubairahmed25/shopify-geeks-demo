import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HomePageTwo from "../page/home2/HomePageTwo";

function HomePageTwoLayout() {
  return (
    <>
      <div className="background-image-unset bg-white">
        <Header />
        <HomePageTwo />
        <Footer />
      </div>
    </>
  );
}

export default HomePageTwoLayout;
