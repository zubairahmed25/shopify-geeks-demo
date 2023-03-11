import React from "react";
import { Link } from "react-router-dom";

function PostCommentArea() {
  return (
    <>
      <div className="post-comment-area">
        <h2>02 Comment</h2>
        <div className="comment-list-area">
          <ul className="comment-list">
            <li>
              <div className="single-comment d-flex justify-content-start flex-md-nowrap flex-wrap hover-btn mb-4">
                <span />
                <div className="comment-image">
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/com-1.png"}
                    alt="images"
                  />
                </div>
                <div className="comment-content">
                  <div className="c-header d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">
                      <Link to={"#"}>Savannah Nguyen</Link>
                    </h4>
                    <Link to={"#"} className="reply-btn">
                      Reply
                    </Link>
                  </div>
                  <div className="c-date">11 January, 2022 at 01.56 PM</div>
                  <div className="c-body">
                    <p>
                      Moving money around the world should be as easy and cheap
                      as sending a message. No matter where you live, what you
                      do, or how much you earn.
                    </p>
                  </div>
                </div>
              </div>
              <ul className="comment-reply">
                <li>
                  <div className="single-comment d-flex justify-content-start flex-md-nowrap flex-wrap hover-btn mb-4">
                    <span />
                    <div className="comment-image">
                      <img
                        src={process.env.PUBLIC_URL + "/images/blog/com-2.png"}
                        alt="images"
                      />
                    </div>
                    <div className="comment-content">
                      <div className="c-header d-flex justify-content-between align-items-center">
                        <h4 className="mb-0">
                          <Link to={"#"}>Mokarram Hossain</Link>
                        </h4>
                        <Link to={"#"} className="reply-btn">
                          Reply
                        </Link>
                      </div>
                      <div className="c-date">
                        14 February, 2022 at 01.56 PM
                      </div>
                      <div className="c-body">
                        <p>
                          Moving money around the world should be as easy and
                          cheap as sending a message. No matter where you live,
                          what you do, or how much you earn.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div className="single-comment d-flex justify-content-start flex-md-nowrap flex-wrap hover-btn">
                <span />
                <div className="comment-image">
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/com-3.png"}
                    alt="images"
                  />
                </div>
                <div className="comment-content">
                  <div className="c-header d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">
                      <Link to={"#"}>Savannah Nguyen</Link>
                    </h4>
                    <Link to={"#"} className="reply-btn">
                      Reply
                    </Link>
                  </div>
                  <div className="c-date">14 March, 2022 at 06.16 PM</div>
                  <div className="c-body">
                    <p>
                      Moving money around the world should be as easy and cheap
                      as sending a message. No matter where you live, what you
                      do, or how much you earn.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <h2>Leave a Comment</h2>
        <form onSubmit={(e) => e.preventDefault()} className="comment-form">
          <div className="row">
            <div className="col-md-6">
              <div className="form-inner">
                <input type="text" placeholder="Your Name :" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-inner">
                <input type="text" placeholder="Your Email :" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-inner">
                <input type="text" placeholder="Phone Number :" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-inner">
                <input type="text" placeholder="Subject :" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-inner">
                <textarea
                  placeholder="Write Message :"
                  rows={8}
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-md-12">
              <button
                type="submit"
                to={`${process.env.PUBLIC_UR}/blog-sidebar`}
                className="eg-btn hover-btn comment-form-btn"
              >
                <span>
                  Post Comment
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
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default PostCommentArea;
