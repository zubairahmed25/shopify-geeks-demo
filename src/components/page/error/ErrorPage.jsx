import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import ErrorWrap from "./ErrorWrap";
function ErrorPage() {
  return (
    <>
      <Breadcrumb name="404" />
      <ErrorWrap />
    </>
  );
}

export default ErrorPage;
