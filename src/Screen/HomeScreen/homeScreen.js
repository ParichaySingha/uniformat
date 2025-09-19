import React from "react";
import "./homeScreen.css";
import HomeBanner from "./Homebanner/homebanner";
import HomeDetails from "./HomeDetails/homeDetails";
import CategoryImpact from "./CategoryImpact/categoryimpact";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import StartSellingSection from "./StartSellingSection/StartSellingSection";
import HeroSection from "./HeroSection/HeroCarousel";


const HomeScreen = () => {
  return (
    <div>
      <HeroSection/>
      <HomeBanner />
      <HomeDetails />
      <CategoryImpact />
      <TestimonialSection/>
      <StartSellingSection/>
    </div>
  );
};

export default HomeScreen;
