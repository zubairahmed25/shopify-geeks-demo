import React from "react";
import PostCategoryWidget from "../blogSidebar/PostCategoryWidget";
import PostTagWidget from "../blogSidebar/PostTagWidget";
import RecentPostWidget from "../blogSidebar/RecentPostWidget";
import SearchWidget from "../blogSidebar/SearchWidget";
import ShowReactArea from "../blogSidebar/ShowReactArea";
import SocialLinkWidget from "../blogSidebar/SocialLinkWidget";
import BlogMainPost from "./BlogMainPost";
import NextAndPrevPost from "./NextAndPrevPost";
import PostCommentArea from "./PostCommentArea";
import SharePost from "./SharePost";

function BlogDetailsWrap() {
  return (
    <>
      <div className="blog-post-section pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center gy-5">
            <div className="col-lg-8 col-md-10 col-sm-10">
              <div className="blog-post-area">
                <BlogMainPost />
                <SharePost />
                <NextAndPrevPost />
                <ShowReactArea />
                <PostCommentArea />
              </div>
            </div>
            <div className="col-lg-4 col-md-10 col-sm-10">
              <div className="blog-left-sidebar">
                <SearchWidget />
                <RecentPostWidget />
                <PostCategoryWidget />
                <PostTagWidget />
                <SocialLinkWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetailsWrap;
