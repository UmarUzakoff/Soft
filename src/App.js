import React, { Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CompanyUsers from "./components/Carousel";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <Fragment>
      <Header />
      <CompanyUsers />
      <Footer />
    </Fragment>
  );
}
