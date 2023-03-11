import React from "react";
import { Link } from "react-router-dom";

function ProjectDetailsWrap() {
  return (
    <>
      <div className="proj-details-section pt-120">
        <div className="container">
          <div className="row d-flex justify-content-center g-4">
            <div className="col-lg-8 col-sm-8">
              <div className="proj-details-area">
                <h3>
                  Where do UX designers, UI designers, web developers, data
                  analysts, and digital marketers fit into business?
                </h3>
                <h6>
                  Branding &amp; Identity, Websites &amp; Digital Platforms
                </h6>
                <img
                  src={process.env.PUBLIC_URL + "/images/bg/proj-details1.png"}
                  alt="images"
                />
                <p className="para">
                  When it comes to the tech industry, there are many different
                  paths you can follow. UX design, UI design, web development,
                  data analytics, and digital marketing all offer exciting,
                  fulfilling, and financially rewarding careers—but each role is
                  unique. So, before you decide on a particular field, it’s
                  important to understand exactly what each role entails. First,
                  though, let’s consider how all of these roles fit together in
                  the context of business.
                </p>
                <p className="para">
                  Let’s imagine an e-commerce startup—we’ll call it Beautify.
                  Beautify creates their own all-natural cosmetics and sells
                  them online via their website. Some of the key team members
                  behind this small but successful startup include a UX
                  designer, a UI designer, a web developer, a data analyst, and
                  a digital marketer.
                </p>
                <div className="project-list-area">
                  <h5>
                    The UX design process consists of user research, wireframing
                    and prototyping, and user testing. Within these broader
                    steps, UX designers may be responsible for:
                  </h5>
                  <ul className="project-details-list mb-0">
                    <li>
                      <Link to={"#"}>
                        <svg
                          width={31}
                          height={13}
                          viewBox="0 0 31 13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 1.45465V6.5V11.5454C24 11.7194 24.2068 11.8104 24.3351 11.6928L30 6.5L24.3351 1.30722C24.2068 1.18963 24 1.28063 24 1.45465Z" />
                          <path d="M1 6C0.723858 6 0.5 6.22386 0.5 6.5C0.5 6.77614 0.723858 7 1 7V6ZM24.3351 1.30722L23.9972 1.67579L23.9972 1.67579L24.3351 1.30722ZM30 6.5L30.3378 6.86858L30.7399 6.5L30.3378 6.13142L30 6.5ZM24.3351 11.6928L24.673 12.0614V12.0614L24.3351 11.6928ZM1 7H24V6H1V7ZM24.5 6.5V1.45465H23.5V6.5H24.5ZM23.9972 1.67579L29.6621 6.86858L30.3378 6.13142L24.673 0.938639L23.9972 1.67579ZM29.6621 6.13142L23.9972 11.3242L24.673 12.0614L30.3378 6.86858L29.6621 6.13142ZM24.5 11.5454V6.5H23.5V11.5454H24.5ZM23.9972 11.3242C24.1897 11.1478 24.5 11.2843 24.5 11.5454H23.5C23.5 12.1544 24.224 12.4729 24.673 12.0614L23.9972 11.3242ZM24.5 1.45465C24.5 1.71567 24.1897 1.85218 23.9972 1.67579L24.673 0.938641C24.224 0.527068 23.5 0.845579 23.5 1.45465H24.5Z" />
                        </svg>
                        Interviewing users
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <svg
                          width={31}
                          height={13}
                          viewBox="0 0 31 13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 1.45465V6.5V11.5454C24 11.7194 24.2068 11.8104 24.3351 11.6928L30 6.5L24.3351 1.30722C24.2068 1.18963 24 1.28063 24 1.45465Z" />
                          <path d="M1 6C0.723858 6 0.5 6.22386 0.5 6.5C0.5 6.77614 0.723858 7 1 7V6ZM24.3351 1.30722L23.9972 1.67579L23.9972 1.67579L24.3351 1.30722ZM30 6.5L30.3378 6.86858L30.7399 6.5L30.3378 6.13142L30 6.5ZM24.3351 11.6928L24.673 12.0614V12.0614L24.3351 11.6928ZM1 7H24V6H1V7ZM24.5 6.5V1.45465H23.5V6.5H24.5ZM23.9972 1.67579L29.6621 6.86858L30.3378 6.13142L24.673 0.938639L23.9972 1.67579ZM29.6621 6.13142L23.9972 11.3242L24.673 12.0614L30.3378 6.86858L29.6621 6.13142ZM24.5 11.5454V6.5H23.5V11.5454H24.5ZM23.9972 11.3242C24.1897 11.1478 24.5 11.2843 24.5 11.5454H23.5C23.5 12.1544 24.224 12.4729 24.673 12.0614L23.9972 11.3242ZM24.5 1.45465C24.5 1.71567 24.1897 1.85218 23.9972 1.67579L24.673 0.938641C24.224 0.527068 23.5 0.845579 23.5 1.45465H24.5Z" />
                        </svg>
                        Gathering user feedback through surveys and
                        questionnaires
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <svg
                          width={31}
                          height={13}
                          viewBox="0 0 31 13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 1.45465V6.5V11.5454C24 11.7194 24.2068 11.8104 24.3351 11.6928L30 6.5L24.3351 1.30722C24.2068 1.18963 24 1.28063 24 1.45465Z" />
                          <path d="M1 6C0.723858 6 0.5 6.22386 0.5 6.5C0.5 6.77614 0.723858 7 1 7V6ZM24.3351 1.30722L23.9972 1.67579L23.9972 1.67579L24.3351 1.30722ZM30 6.5L30.3378 6.86858L30.7399 6.5L30.3378 6.13142L30 6.5ZM24.3351 11.6928L24.673 12.0614V12.0614L24.3351 11.6928ZM1 7H24V6H1V7ZM24.5 6.5V1.45465H23.5V6.5H24.5ZM23.9972 1.67579L29.6621 6.86858L30.3378 6.13142L24.673 0.938639L23.9972 1.67579ZM29.6621 6.13142L23.9972 11.3242L24.673 12.0614L30.3378 6.86858L29.6621 6.13142ZM24.5 11.5454V6.5H23.5V11.5454H24.5ZM23.9972 11.3242C24.1897 11.1478 24.5 11.2843 24.5 11.5454H23.5C23.5 12.1544 24.224 12.4729 24.673 12.0614L23.9972 11.3242ZM24.5 1.45465C24.5 1.71567 24.1897 1.85218 23.9972 1.67579L24.673 0.938641C24.224 0.527068 23.5 0.845579 23.5 1.45465H24.5Z" />
                        </svg>
                        Analyzing research data and identifying trends and
                        patterns
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <svg
                          width={31}
                          height={13}
                          viewBox="0 0 31 13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 1.45465V6.5V11.5454C24 11.7194 24.2068 11.8104 24.3351 11.6928L30 6.5L24.3351 1.30722C24.2068 1.18963 24 1.28063 24 1.45465Z" />
                          <path d="M1 6C0.723858 6 0.5 6.22386 0.5 6.5C0.5 6.77614 0.723858 7 1 7V6ZM24.3351 1.30722L23.9972 1.67579L23.9972 1.67579L24.3351 1.30722ZM30 6.5L30.3378 6.86858L30.7399 6.5L30.3378 6.13142L30 6.5ZM24.3351 11.6928L24.673 12.0614V12.0614L24.3351 11.6928ZM1 7H24V6H1V7ZM24.5 6.5V1.45465H23.5V6.5H24.5ZM23.9972 1.67579L29.6621 6.86858L30.3378 6.13142L24.673 0.938639L23.9972 1.67579ZM29.6621 6.13142L23.9972 11.3242L24.673 12.0614L30.3378 6.86858L29.6621 6.13142ZM24.5 11.5454V6.5H23.5V11.5454H24.5ZM23.9972 11.3242C24.1897 11.1478 24.5 11.2843 24.5 11.5454H23.5C23.5 12.1544 24.224 12.4729 24.673 12.0614L23.9972 11.3242ZM24.5 1.45465C24.5 1.71567 24.1897 1.85218 23.9972 1.67579L24.673 0.938641C24.224 0.527068 23.5 0.845579 23.5 1.45465H24.5Z" />
                        </svg>
                        Conducting usability testing sessions with users
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <svg
                          width={31}
                          height={13}
                          viewBox="0 0 31 13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 1.45465V6.5V11.5454C24 11.7194 24.2068 11.8104 24.3351 11.6928L30 6.5L24.3351 1.30722C24.2068 1.18963 24 1.28063 24 1.45465Z" />
                          <path d="M1 6C0.723858 6 0.5 6.22386 0.5 6.5C0.5 6.77614 0.723858 7 1 7V6ZM24.3351 1.30722L23.9972 1.67579L23.9972 1.67579L24.3351 1.30722ZM30 6.5L30.3378 6.86858L30.7399 6.5L30.3378 6.13142L30 6.5ZM24.3351 11.6928L24.673 12.0614V12.0614L24.3351 11.6928ZM1 7H24V6H1V7ZM24.5 6.5V1.45465H23.5V6.5H24.5ZM23.9972 1.67579L29.6621 6.86858L30.3378 6.13142L24.673 0.938639L23.9972 1.67579ZM29.6621 6.13142L23.9972 11.3242L24.673 12.0614L30.3378 6.86858L29.6621 6.13142ZM24.5 11.5454V6.5H23.5V11.5454H24.5ZM23.9972 11.3242C24.1897 11.1478 24.5 11.2843 24.5 11.5454H23.5C23.5 12.1544 24.224 12.4729 24.673 12.0614L23.9972 11.3242ZM24.5 1.45465C24.5 1.71567 24.1897 1.85218 23.9972 1.67579L24.673 0.938641C24.224 0.527068 23.5 0.845579 23.5 1.45465H24.5Z" />
                        </svg>
                        Facilitating workshops
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <svg
                          width={31}
                          height={13}
                          viewBox="0 0 31 13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 1.45465V6.5V11.5454C24 11.7194 24.2068 11.8104 24.3351 11.6928L30 6.5L24.3351 1.30722C24.2068 1.18963 24 1.28063 24 1.45465Z" />
                          <path d="M1 6C0.723858 6 0.5 6.22386 0.5 6.5C0.5 6.77614 0.723858 7 1 7V6ZM24.3351 1.30722L23.9972 1.67579L23.9972 1.67579L24.3351 1.30722ZM30 6.5L30.3378 6.86858L30.7399 6.5L30.3378 6.13142L30 6.5ZM24.3351 11.6928L24.673 12.0614V12.0614L24.3351 11.6928ZM1 7H24V6H1V7ZM24.5 6.5V1.45465H23.5V6.5H24.5ZM23.9972 1.67579L29.6621 6.86858L30.3378 6.13142L24.673 0.938639L23.9972 1.67579ZM29.6621 6.13142L23.9972 11.3242L24.673 12.0614L30.3378 6.86858L29.6621 6.13142ZM24.5 11.5454V6.5H23.5V11.5454H24.5ZM23.9972 11.3242C24.1897 11.1478 24.5 11.2843 24.5 11.5454H23.5C23.5 12.1544 24.224 12.4729 24.673 12.0614L23.9972 11.3242ZM24.5 1.45465C24.5 1.71567 24.1897 1.85218 23.9972 1.67579L24.673 0.938641C24.224 0.527068 23.5 0.845579 23.5 1.45465H24.5Z" />
                        </svg>
                        Amazing Timing and Experience
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-8">
              <div
                className="client-card wow animate fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <h5>Client :</h5>
                <p>Brookyn Simmons</p>
                <h5>Category :</h5>
                <p>Branding, Ui/Ux</p>
                <h5>Date :</h5>
                <p className="mb-0">25 Jan 2022</p>
                <ul className="social-list">
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/"
                      target="_blank"
                    >
                      FB
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.twitter.com/"
                      target="_blank"
                    >
                      TW
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/"
                      target="_blank"
                    >
                      IN
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.pinterest.com/"
                      target="_blank"
                    >
                      PR
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="right-sidebar-img wow animate fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/bg/proj-details2.png"}
                  alt="images"
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/bg/proj-details4.png"}
                  className="right-bottom-img"
                  alt="images"
                />
              </div>
              <div
                className="client-feedback-area wow animate fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.7s"
              >
                <h3>Client Feedback of This Project :</h3>
                <div className="client-feedback-card">
                  <div className="client-img">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/bg/proj-details3.png"
                      }
                      alt="images"
                    />
                  </div>
                  <div className="client-content">
                    <h5>Brooklyn Simmons</h5>
                    <h6>CEO Zoomin’s</h6>
                    <p>
                      Personalizing the testimonial makes it easier for readers
                      to be empathetic. Adding before and after images, a
                      company logo
                    </p>
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

export default ProjectDetailsWrap;
