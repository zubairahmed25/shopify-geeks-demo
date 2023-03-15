import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/App";
import MainLayout from "./components/layout/MainLayout";
import SimpleReactLightbox from "simple-react-lightbox";
// import all css
import "./index.css";
import ContaceUsPage from "./components/page/contactUs/ContaceUsPage";
// import TeamPage from "./components/page/team/TeamPage";
// import FeedbackPage from "./components/page/feedback/FeedbackPage";
// import FaqPage from "./components/page/faq/FaqPage";
import ErrorPage from "./components/page/error/ErrorPage";
import BlogGridPage from "./components/page/blogGrid/BlogGridPage";
import BlogSidebarPage from "./components/page/blogSidebar/BlogSidebarPage";
import BlogDetailsPage from "./components/page/blogDetails/BlogDetailsPage";
import ProjectPage from "./components/page/projects/ProjectPage";
import ProjectDetailsPage from "./components/page/ProjectDetails/ProjectDetailsPage";
import ServicePage from "./components/page/service/ServicePage";
import ServiceDetailsPage from "./components/page/serviceDetails/ServiceDetailsPage";
import AboutPage from "./components/page/about/AboutPage";
// import HomePageTwoLayout from "./components/layout/HomePageTwoLayout";

/*
 * Version :Tourx-pro 0.1
 * Event : Rendering all content to web.
 * Actions: Define all routes and page.
 * @return html
 * */
// default Warning Error hide
console.log = console.warn = console.error = () => {};

function Root() {
  return (
    <>
      <BrowserRouter basename="/">
        <Switch>
          {/*main layout*/}
          <Route exact path="/" component={MainLayout} />
        
          {/* all inner page load layout component */}
          <Layout>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/about-us`}
              component={AboutPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact-us`}
              component={ContaceUsPage}
            />
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/team`}
              component={TeamPage}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/feedback`}
              component={FeedbackPage}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/faq`}
              component={FaqPage}
            /> */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/error`}
              component={ErrorPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog-grid`}
              component={BlogGridPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog-sidebar`}
              component={BlogSidebarPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog-details`}
              component={BlogDetailsPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/project`}
              component={ProjectPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/project-details`}
              component={ProjectDetailsPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/service`}
              component={ServicePage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/service-details`}
              component={ServiceDetailsPage}
            />
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <Root />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);
