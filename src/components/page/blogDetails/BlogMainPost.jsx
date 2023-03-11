import React from "react";
import { Link } from "react-router-dom";

function BlogMainPost() {
  return (
    <>
      <div className="blog-post-img">
        <img
          src={process.env.PUBLIC_URL + "/images/blog/blog-post1.png"}
          alt="images"
        />
      </div>
      <ul className="blog-post-meta d-flex justify-content-start flex-wrap">
        <li>
          <Link  onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} to={"#"}>
            <i className="bi bi-person-fill" />
            <span>By Layer Drops</span>
          </Link>
        </li>
        <li>
          <Link to={"#"}>
            <i className="bi bi-clock" />
            <span>November 24, 2022</span>
          </Link>
        </li>
      </ul>
      <h2 className="post-title">
        These Are the 11 Best Online Courses to Learn UX Design in 2022..?
      </h2>
      <p className="para-style mb-30">
        In today’s tech-driven landscape, having skills in UX design can take
        you a long way. While it is possible to teach yourself UX design, taking
        a course is a great way to earn the knowledge you need to be able to
        enter the field and get to work, . Lucky for you, there’s a myriad of
        online UX courses currently on offer, suited to a wide range of needs.
      </p>
      <p className="para-style">
        Looking for the best online UX design courses to choose from? Here are
        our top 11. Vivamus commodo turpis vitae ligula luctus malesuada
      </p>
      <div className="blockquote">
        <h5>
          “Design is the fundamental soul of a human-made creation that ends up
          expressing itself in successive outer layers of the product or
          service.”
        </h5>
        <h4>-Steve Jobs-</h4>
        <img
          src={process.env.PUBLIC_URL + "/images/icon/quote-icon.svg"}
          className="quote-icon"
          alt="images"
        />
      </div>
      <p className="para-style mb-30">
        When choosing a UX design course to invest your time, money, and energy
        into, it’s essential to consider what your goals are. Are you simply
        looking to dip your toes into UX design? Do you want to develop your
        current skill set? Or are you ready to commit to a full career change?
        We’ve rounded up 11 of the best online UX design courses to take in
        2021. We’ll give you a quick summary of each course, so you can feel out
        which one(s) are best suited to you and your career goals.
      </p>
      <p className="para-style">
        We recommend signing up for this free UX design short course to get you
        started. This microcourse profives a free intruduction to the field,
        after which you can find the introductory course that best suits your
        needs.
      </p>
    </>
  );
}

export default BlogMainPost;
