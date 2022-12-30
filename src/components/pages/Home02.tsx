import React from "react";
import {
  Header,
  Banner,
  Chapter,
  About,
  Features,
  Feature2,
  Cta,
  Review,
  Author,
  Contact,
  Footer,
} from "../layouts/home02/index";

function HomePage() {
  return (
    <div className="counter-scroll bg-home1 has-one-page">
      <Header />
      <Banner />
      <Feature2 />
      <About />
      <Chapter />
      <Features />
      <Review />
      <Author />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
