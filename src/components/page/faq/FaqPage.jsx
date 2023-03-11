import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import JoinUs from "../../common/JoinUs";
import FaqWrap from "./FaqWrap";

function FaqPage() {
  return (
    <>
      <Breadcrumb name="FAQ" />
      <FaqWrap />
      <JoinUs padding="pb-120" />
    </>
  );
}

export default FaqPage;
