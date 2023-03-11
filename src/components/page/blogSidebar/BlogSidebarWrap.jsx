import React from "react";
import BlogSidebarCard from "./BlogSidebarCard";
import PostCategoryWidget from "./PostCategoryWidget";
import PostTagWidget from "./PostTagWidget";
import RecentPostWidget from "./RecentPostWidget";
import SearchWidget from "./SearchWidget";
import SocialLinkWidget from "./SocialLinkWidget";
import Pagination from "../../common/Pagination";

function BlogSidebarWrap() {
  return (
    <>
      <div className="blog-sidebar-section pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center gy-5">
            <div className="col-lg-4 col-md-10 order-lg-1 order-2">
              <div className="blog-left-sidebar">
                <SearchWidget />
                <RecentPostWidget />
                <PostCategoryWidget />
                <PostTagWidget />
                <SocialLinkWidget />
              </div>
            </div>
            <div className="col-lg-8 col-md-10 order-lg-2 order-1">
              <div className="row d-flex justify-content-center">
                <div className="col-md-7 text-center">
                  <div className="section-title pt-0">
                    <h2>Our Blog</h2>
                  </div>
                </div>
              </div>
              <div className="blog-wrap">
                <BlogSidebarCard
                  image={process.env.PUBLIC_URL + "/images/blog/bside1.png"}
                  date="06 August 2022"
                  title="The Start-Up Ultimate Guide to Make Your WordPress."
                  details="Set up a blog in just a few minutes with the Edge collection of blog templates. Define the look of your blog."
                />
                <BlogSidebarCard
                  image={process.env.PUBLIC_URL + "/images/blog/bside2.png"}
                  date="10 May 2022"
                  title="The Start-Up Ultimate Guide to Make Your WordPress."
                  details="Set up a blog in just a few minutes with the Edge collection of blog templates. Define the look of your blog."
                />
                <BlogSidebarCard
                  image={process.env.PUBLIC_URL + "/images/blog/bside3.png"}
                  date="26 June 2022"
                  title="What to do before applying to an agency"
                  details="Set up a blog in just a few minutes with the Edge collection of blog templates. Define the look of your blog."
                />
                <BlogSidebarCard
                  image={process.env.PUBLIC_URL + "/images/blog/bside4.png"}
                  date="08 January 2022"
                  title="Here we go for new agency starting very soon"
                  details="Set up a blog in just a few minutes with the Edge collection of blog templates. Define the look of your blog."
                />
                <BlogSidebarCard
                  image={process.env.PUBLIC_URL + "/images/blog/bside5.png"}
                  date="06 May 2022"
                  title="Set up a blog in just a few minutes later"
                  details="Set up a blog in just a few minutes with the Edge collection of blog templates. Define the look of your blog."
                />
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSidebarWrap;
