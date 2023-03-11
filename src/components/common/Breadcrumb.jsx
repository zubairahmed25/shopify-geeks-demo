import React from "react";
import { Link } from "react-router-dom";
function Breadcrumb(props) {
  
  return (
    <>
      <div className="inner-page-banner primary--bg">
        <div className="row g-0">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="inner-banner-content">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li class="breadcrumb-item text-white text-uppercase">
                    <Link onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                  </li>
                  <li
                    className="breadcrumb-item active text-white text-uppercase"
                    aria-current="page"
                  >
                   {props.name}
                  </li>
                </ol>
              </nav>
              <h2>{props.name}</h2>
            </div>
          </div>
          <div className="col-lg-6 d-lg-block d-none position-relative">
            <div className="inner-banner-bg">
              <img src={process.env.PUBLIC_URL + "images/bg/inner-banner-bg.png"} class="img-fluid" alt="images" />
            </div>
            <div className="circle-border">
              <div className="moving-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
