import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import JoinUs from "../../common/JoinUs";
import Sponsor from "../../common/Sponsor";
import ServiceDetailsWrap from "./ServiceDetailsWrap";
function ServiceDetailsPage() {
  return (
    <>
      <Breadcrumb name="Service Details" />
      <ServiceDetailsWrap />
      <JoinUs padding="pt-120" />
      <Sponsor />
    </>
  );
}

export default ServiceDetailsPage;
