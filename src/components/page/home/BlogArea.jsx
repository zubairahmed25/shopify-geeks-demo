import React from "react";
import { Link } from "react-router-dom";

function BlogArea() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="blog-section pt-120">
        <div className="container">
          <div className="row d-flex justify-content-lg-end justify-content-center">
            <div
              className="col-md-8 text-center wow animate fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="0.5s"
            >
              <div className="section-title pt-0">
                <h2>Our Blog</h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            <div className="col-lg-4 col-md-8 col-sm-8">
              <div
                className="section-card blog-section-card wow animate fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <h2>See Our Articles</h2>
                <p>
                  We guide game-changing companies, across platforms &amp;
                  places, through agile design &amp; digital experience. We make
                  waves.
                </p>
                <Link
                  to={`${process.env.PUBLIC_URL}/blog-sidebar`}
                  onClick={scrollTop}
                  className="eg-btn hover-btn sectoin-card-btn"
                >
                  <span>
                    Explore More
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/icon/arrow-servc.svg"
                      }
                      alt="images"
                    />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="eg-card-wrap wow animate fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <div className="eg-card blog-item-1 d-flex justify-content-sm-start justify-content-center align-items-center flex-sm-nowrap flex-wrap">
                  <div className="blog-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/blog/blg1.png"}
                      alt="images"
                    />
                  </div>
                  <div className="blog-content text-sm-start text-center">
                    <h6>06 August 2022</h6>
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      onClick={scrollTop}
                    >
                      <h4>
                        The Start-Up Ultimate Guide to Make Your WordPress.
                      </h4>
                    </Link>
                    <p className="para">
                      Set up a blog in just a few minutes with the Edge
                      collection of blog templates. Define the look of your
                      blog.
                    </p>
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      onClick={scrollTop}
                      className="eg-btn blog-btn hover-btn"
                    >
                      <span>
                        Read More
                        <svg
                          width={51}
                          height={13}
                          viewBox="0 0 51 13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M44 1.45465V6.5V11.5454C44 11.7194 44.2068 11.8104 44.3351 11.6928L50 6.5L44.3351 1.30722C44.2068 1.18963 44 1.28063 44 1.45465Z" />
                          <path d="M1 6C0.723858 6 0.5 6.22386 0.5 6.5C0.5 6.77614 0.723858 7 1 7V6ZM44.3351 1.30722L44.673 0.938639L44.673 0.938639L44.3351 1.30722ZM50 6.5L50.3378 6.86858L50.7399 6.5L50.3378 6.13142L50 6.5ZM44.3351 11.6928L44.673 12.0614L44.673 12.0614L44.3351 11.6928ZM1 7H44V6H1V7ZM44.5 6.5V1.45465H43.5V6.5H44.5ZM43.9972 1.67579L49.6621 6.86858L50.3378 6.13142L44.673 0.938639L43.9972 1.67579ZM49.6621 6.13142L43.9972 11.3242L44.673 12.0614L50.3378 6.86858L49.6621 6.13142ZM44.5 11.5454V6.5H43.5V11.5454H44.5ZM43.9972 11.3242C44.1897 11.1478 44.5 11.2843 44.5 11.5454H43.5C43.5 12.1544 44.224 12.4729 44.673 12.0614L43.9972 11.3242ZM44.5 1.45465C44.5 1.71568 44.1897 1.85218 43.9972 1.67579L44.673 0.938639C44.224 0.527072 43.5 0.845576 43.5 1.45465H44.5Z" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="eg-card-wrap wow animate fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <div className="eg-card blog-item-1 d-flex justify-content-sm-start justify-content-center align-items-center flex-sm-nowrap flex-wrap">
                  <div className="blog-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/blog/blg2.png"}
                      alt="images"
                    />
                  </div>
                  <div className="blog-content text-sm-start text-center">
                    <h6>06 August 2022</h6>
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      onClick={scrollTop}
                    >
                      <h4>
                        What kind of online coding school are you really looking
                        for?
                      </h4>
                    </Link>
                    <p className="para">
                      Set up a blog in just a few minutes with the Edge
                      collection of blog templates. Define the look of your
                      blog.
                    </p>
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      onClick={scrollTop}
                      className="eg-btn blog-btn hover-btn"
                    >
                      <span>
                        Read More
                        <svg
                          width={51}
                          height={13}
                          viewBox="0 0 51 13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M44 1.45465V6.5V11.5454C44 11.7194 44.2068 11.8104 44.3351 11.6928L50 6.5L44.3351 1.30722C44.2068 1.18963 44 1.28063 44 1.45465Z" />
                          <path d="M1 6C0.723858 6 0.5 6.22386 0.5 6.5C0.5 6.77614 0.723858 7 1 7V6ZM44.3351 1.30722L44.673 0.938639L44.673 0.938639L44.3351 1.30722ZM50 6.5L50.3378 6.86858L50.7399 6.5L50.3378 6.13142L50 6.5ZM44.3351 11.6928L44.673 12.0614L44.673 12.0614L44.3351 11.6928ZM1 7H44V6H1V7ZM44.5 6.5V1.45465H43.5V6.5H44.5ZM43.9972 1.67579L49.6621 6.86858L50.3378 6.13142L44.673 0.938639L43.9972 1.67579ZM49.6621 6.13142L43.9972 11.3242L44.673 12.0614L50.3378 6.86858L49.6621 6.13142ZM44.5 11.5454V6.5H43.5V11.5454H44.5ZM43.9972 11.3242C44.1897 11.1478 44.5 11.2843 44.5 11.5454H43.5C43.5 12.1544 44.224 12.4729 44.673 12.0614L43.9972 11.3242ZM44.5 1.45465C44.5 1.71568 44.1897 1.85218 43.9972 1.67579L44.673 0.938639C44.224 0.527072 43.5 0.845576 43.5 1.45465H44.5Z" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogArea;
