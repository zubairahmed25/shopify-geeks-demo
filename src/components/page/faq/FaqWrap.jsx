import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../common/SectionTitle";

function FaqWrap() {
  return (
    <>
      <div className="feedback-section pt-120 pb-120">
        <div className="container">
          <SectionTitle title="Questions" />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-8 col-sm-8">
              <div className="section-card faq-section-card">
                <h2 className="mb-4 pb-1">Popular Questions</h2>
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to={`${process.env.PUBLIC_URL}/contact-us`}
                  className="eg-btn hover-btn sectoin-card-btn"
                >
                  <span>
                    Contact Us
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
            <div className="col-lg-8 text-center">
              {/* faq accordion */}
              <div className="faq-wrap pb-120">
                <div className="faq-item hover-btn">
                  <span />
                  <h5
                    id="heading10"
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse10"
                    aria-controls="collapse10"
                  >
                    01. Curious about how to build your own UX strategy? Here
                    are five simple steps.
                  </h5>
                  <div
                    id="collapse10"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading10"
                  >
                    <div className="faq-body">
                      Morbi aliquam quis quam in luctus. Nullam tincidunt
                      pulvinar imperdiet. Sed varius, diam vitae posuere semper,
                      libero ex hendrerit nunc, ac sagittis eros metus ut diam.
                      Donec a nibh in libero maximus vehicula. Etiam sit amet
                      condimentum erat. Pellentesque ultrices sagittis turpis,
                      quis tempus ante viverra et.Morbi aliquam quis quam in
                      luctus. Nullam tincidunt pulvinar imperdiet. Sed varius,
                      diam vitae posuere semper, tincidunt pulvinar imperdiet.
                      Sed varius, diam vitae posuere semper.
                    </div>
                  </div>
                </div>
                <div className="faq-item hover-btn">
                  <span />
                  <h5
                    id="heading11"
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse11"
                    aria-controls="collapse11"
                  >
                    02. Where Could a Career in UX Take You? Agency vs. In-House
                    vs. Freelance?
                  </h5>
                  <div
                    id="collapse11"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading11"
                  >
                    <div className="faq-body">
                      Morbi aliquam quis quam in luctus. Nullam tincidunt
                      pulvinar imperdiet. Sed varius, diam vitae posuere semper,
                      libero ex hendrerit nunc, ac sagittis eros metus ut diam.
                      Donec a nibh in libero maximus vehicula. Etiam sit amet
                      condimentum erat. Pellentesque ultrices sagittis turpis,
                      quis tempus ante viverra et.Morbi aliquam quis quam in
                      luctus. Nullam tincidunt pulvinar imperdiet. Sed varius,
                      diam vitae posuere semper, tincidunt pulvinar imperdiet.
                      Sed varius, diam vitae posuere semper.
                    </div>
                  </div>
                </div>
                <div className="faq-item hover-btn">
                  <span />
                  <h5
                    id="heading12"
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse12"
                    aria-controls="collapse12"
                  >
                    03. What Is a Problem Statement in UX? (And How To Write
                    One?
                  </h5>
                  <div
                    id="collapse12"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading12"
                  >
                    <div className="faq-body">
                      Morbi aliquam quis quam in luctus. Nullam tincidunt
                      pulvinar imperdiet. Sed varius, diam vitae posuere semper,
                      libero ex hendrerit nunc, ac sagittis eros metus ut diam.
                      Donec a nibh in libero maximus vehicula. Etiam sit amet
                      condimentum erat. Pellentesque ultrices sagittis turpis,
                      quis tempus ante viverra et.Morbi aliquam quis quam in
                      luctus. Nullam tincidunt pulvinar imperdiet. Sed varius,
                      diam vitae posuere semper, tincidunt pulvinar imperdiet.
                      Sed varius, diam vitae posuere semper.
                    </div>
                  </div>
                </div>
                <div className="faq-item hover-btn">
                  <span />
                  <h5
                    id="heading13"
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse13"
                    aria-controls="collapse13"
                  >
                    04. There are several techniques UX designers employ to
                    arrive at a succinct ?
                  </h5>
                  <div
                    id="collapse13"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading13"
                  >
                    <div className="faq-body">
                      Morbi aliquam quis quam in luctus. Nullam tincidunt
                      pulvinar imperdiet. Sed varius, diam vitae posuere semper,
                      libero ex hendrerit nunc, ac sagittis eros metus ut diam.
                      Donec a nibh in libero maximus vehicula. Etiam sit amet
                      condimentum erat. Pellentesque ultrices sagittis turpis,
                      quis tempus ante viverra et.Morbi aliquam quis quam in
                      luctus. Nullam tincidunt pulvinar imperdiet. Sed varius,
                      diam vitae posuere semper, tincidunt pulvinar imperdiet.
                      Sed varius, diam vitae posuere semper.
                    </div>
                  </div>
                </div>
                <div className="faq-item hover-btn">
                  <span />
                  <h5
                    id="heading14"
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse14"
                    aria-controls="collapse14"
                  >
                    05.What are the obstacles users are facing? What are they
                    trying to do?
                  </h5>
                  <div
                    id="collapse14"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading14"
                  >
                    <div className="faq-body">
                      Morbi aliquam quis quam in luctus. Nullam tincidunt
                      pulvinar imperdiet. Sed varius, diam vitae posuere semper,
                      libero ex hendrerit nunc, ac sagittis eros metus ut diam.
                      Donec a nibh in libero maximus vehicula. Etiam sit amet
                      condimentum erat. Pellentesque ultrices sagittis turpis,
                      quis tempus ante viverra et.Morbi aliquam quis quam in
                      luctus. Nullam tincidunt pulvinar imperdiet. Sed varius,
                      diam vitae posuere semper, tincidunt pulvinar imperdiet.
                      Sed varius, diam vitae posuere semper.
                    </div>
                  </div>
                </div>
                <div className="faq-item hover-btn">
                  <span />
                  <h5
                    id="heading15"
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse15"
                    aria-controls="collapse15"
                  >
                    06.Why is this important? Why will users benefit from
                    solving this problem?
                  </h5>
                  <div
                    id="collapse15"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading15"
                  >
                    <div className="faq-body">
                      Morbi aliquam quis quam in luctus. Nullam tincidunt
                      pulvinar imperdiet. Sed varius, diam vitae posuere semper,
                      libero ex hendrerit nunc, ac sagittis eros metus ut diam.
                      Donec a nibh in libero maximus vehicula. Etiam sit amet
                      condimentum erat. Pellentesque ultrices sagittis turpis,
                      quis tempus ante viverra et.Morbi aliquam quis quam in
                      luctus. Nullam tincidunt pulvinar imperdiet. Sed varius,
                      diam vitae posuere semper, tincidunt pulvinar imperdiet.
                      Sed varius, diam vitae posuere semper.
                    </div>
                  </div>
                </div>
              </div>
              {/* faq-form */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="contact-form"
              >
                <div className="row d-flex justify-content-center">
                  <div className="col-md-10 text-center">
                    <div className="section-title3">
                      <h2>HAVE QUESTION?</h2>
                      <h6>
                        Explore Select, Our Premimum Solution For Branding &amp;
                        Business.
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-inner">
                      <input type="text" placeholder="Your Name :" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <input type="text" placeholder="Enter Your Email :" />
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
                        placeholder="Enter Your Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 text-start">
                    <button className="eg-btn hover-btn comment-form-btn">
                      <span>
                        Send Now
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
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqWrap;
