import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import Sponsor from "../../common/Sponsor";
import JoinUs from "../../common/JoinUs";
import PricingCard from "./PricingCard";
import ServiceWrap from "./ServiceWrap";

function ServicePage() {
  return (
    <>
      <Breadcrumb name="Our Services" />
      <ServiceWrap />
      <PricingCard />
      <JoinUs padding="pt-120" />
      <Sponsor />
    </>
  );
}

export default ServicePage;
