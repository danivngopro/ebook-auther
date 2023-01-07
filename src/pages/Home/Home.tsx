import React from "react";
import { useRef } from "react";
import Footer from "../../components/form/Footer";
import Header from "./components/Header";

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
    console.log(menuName);
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

      <div>body</div>

      <Footer handleScroll={handleScroll} />
    </div>
  );
}

export default HomePage;
