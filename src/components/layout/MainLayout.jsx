import React from "react";
import { useState, useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HomePage from "../page/home/HomePage";
import Preloader from "./Preloader";
function MainLayout() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <HomePage />
          <Footer />
        </>
      )}
    </>
  );
}

export default MainLayout;
