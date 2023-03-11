import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../common/SectionTitle";
import FeedbackSingleItem from "./FeedbackSingleItem";
function FeedbackWrap() {
  return (
    <>
      <div className="feedback-section pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <SectionTitle title="Feedback" />
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-sm-8">
              <FeedbackSingleItem
                image={process.env.PUBLIC_URL + "/images/bg/feed1.png"}
                name="Abdullah Ansary"
                title="UI/UX Designer"
                details=" 'Issue Tracker App has completely surpassed our expectations. Issue Tracker App is worth much more than I paid. No matter where you go, Issue Tracker App is the coolest, most happening thing around! I don't always clop, but when I do, it's because of Issue Tracker App. That said, when it comes to landing pages, popups, and even emails, shorter testimonials tend to be more effective. Ideally, you’ll want to be writing quote testimonials of 50 words or less.'"
              />
              <FeedbackSingleItem
                image={process.env.PUBLIC_URL + "/images/bg/feed3.png"}
                name="Robert Gomez"
                title="Front-End Developer"
                details=" 'I would gladly pay over 600 dollars for Issue Tracker App. I use Issue Tracker App often. Issue Tracker App saved my business.'"
              />
              <FeedbackSingleItem
                image={process.env.PUBLIC_URL + "/images/bg/feed5.png"}
                name="Justina Eroca"
                title="JS Developer"
                details=" 'Your testimonial page serves as a platform to show off how others have benefited from your product or service, making it a powerful tool for establishing trust and encouraging potential buyers to take action.'"
              />
            </div>
            <div className="col-md-6 col-sm-8">
              <FeedbackSingleItem
                image={process.env.PUBLIC_URL + "/images/bg/feed2.png"}
                name="Selina Fernandez"
                title="Full-Stack Developer"
                details=" 'Issue Tracker App has completely surpassed our expectations. Issue Tracker App is worth much more than I paid. No matter where you go, Issue Tracker App is the coolest, most happening thing around! I don't always clop, but when I do, it's because of Issue Tracker App.'"
              />
              <FeedbackSingleItem
                image={process.env.PUBLIC_URL + "/images/bg/feed4.png"}
                name=" Stella Peterson"
                title="Designer"
                details=" 'Nice work on your Issue Tracker App. I could probably go into sales for you. Issue Tracker App did exactly what you said it does. I am so pleased with this product. Buy this now. Just what I was looking for.'"
              />
              <FeedbackSingleItem
                image={process.env.PUBLIC_URL + "/images/bg/feed6.png"}
                name=" Naomi Elena"
                title="Software Engineer"
                details=" 'But effective testimonials go beyond a simple quote that proclaims your greatness. They need to resonate with your target audience and the people who could also potentially benefit from the work you do in the future. That's why great testimonials also tell a story — one that inspires and motivates the people reading it..'"
              />
            </div>
            <div className="col-md-12 text-center">
              <Link
                to={`${process.env.PUBLIC_URL}/blog-sidebar`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                class="eg-btn hover-btn feedback-btn"
              >
                <span>
                  Load More
                  <svg
                    width="51"
                    height="13"
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

          <div className="row pt-120">
            <div className="feedback-tite text-md-start text-center">
              <h2>GET A FEEDBACK</h2>
              <h6>
                Explore Select, Our Premimum Solution For Branding &amp;
                Business.
              </h6>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
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
                <div className="col-md-12 text-md-start text-center">
                  <button
                    type="submit"
                    to={`${process.env.PUBLIC_URL}/blog-sidebar`}
                    className="eg-btn hover-btn comment-form-btn"
                  >
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
    </>
  );
}

export default FeedbackWrap;
