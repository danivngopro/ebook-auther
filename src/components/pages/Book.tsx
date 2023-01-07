import React from "react";
import { useRef } from "react";
import {
  Header,
  Banner,
  About,
  Features,
  Feature2,
  Cta,
  Review,
  Author,
  Contact,
  Footer,
  Pricing,
} from "../layouts/home02/index";

function HomePage() {
  const refs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  const handleScroll = (menuName: number) => {
    refs[menuName].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="counter-scroll bg-home1 has-one-page">
      <div ref={refs[0]}>
        <Header handleScroll={handleScroll} />
      </div>
      <Banner />
      <Feature2 />
      <div ref={refs[1]}>
        <About />
      </div>
      <Features />
      <div ref={refs[2]}>
        <Review />
      </div>
      <div ref={refs[3]}>
        <Author />
      </div>
      <Cta />
      <div ref={refs[4]}>
        <Pricing />
      </div>
      <div ref={refs[5]}>
        <Contact />
      </div>
      <Footer handleScroll={handleScroll} />
    </div>
  );
}

export default HomePage;
