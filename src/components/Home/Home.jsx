import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import ImageSlider from "../ImageSlider/ImageSlider";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import UserPerson from "./UserPerson";

const Home = () => {
  return (
    <div>
      {/* <Hero></Hero> */}
      <Banner></Banner>
      <ImageSlider></ImageSlider>
      <UserPerson></UserPerson>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
