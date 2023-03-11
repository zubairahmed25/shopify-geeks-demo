import React from "react";
import BlogCard from "./BlogCard";

import Pagination from "../../common/Pagination";

function BlogGridWrap() {
  return (
    <>
      <div className="blog-grid-section pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center g-4">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <BlogCard
                image={process.env.PUBLIC_URL + "/images/blog/bgrid1.png"}
                author="Jenilia"
                details="The best UX design blogs for industry insights & career advice."
              />
            </div>
            <div className="col-lg-6 col-md-8 col-sm-10">
              <BlogCard
                image={process.env.PUBLIC_URL + "/images/blog/bgrid2.png"}
                author="Peter"
                details="Cornell Web Design and Development Certification Program "
              />
            </div>
            <div className="col-lg-6 col-md-8 col-sm-10">
              <BlogCard
                image={process.env.PUBLIC_URL + "/images/blog/bgrid3.png"}
                author="Robert"
                details="Cornell Web Design and Development Certification Program."
              />
            </div>
            <div className="col-lg-6 col-md-8 col-sm-10">
              <BlogCard
                image={process.env.PUBLIC_URL + "/images/blog/bgrid4.png"}
                author="Nasir"
                details="What kind of online coding school are you really looking for?"
              />
            </div>
            <div className="col-lg-6 col-md-8 col-sm-10">
              <BlogCard
                image={process.env.PUBLIC_URL + "/images/blog/bgrid5.png"}
                author="Albert"
                details="The best UX design blogs for industry insights & career advice"
              />
            </div>
            <div className="col-lg-6 col-md-8 col-sm-10">
              <BlogCard
                image={process.env.PUBLIC_URL + "/images/blog/bgrid6.png"}
                author="Jack"
                details="Whether it’s about deciding between bootcamps or between jobs at "
              />
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default BlogGridWrap;
