import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import ImageSlider from "../ImageSlider/ImageSlider";
import About from "../../pages/About";

const Home = () => {
  return (
    <div>
      {/* <Hero></Hero> */}
      <Banner></Banner>
      <ImageSlider></ImageSlider>
      <About></About>
    </div>
  );
};

export default Home;
