import React from "react";
import "./homeScreen.css";
import HomeBanner from "./Homebanner/homebanner";
import HomeDetails from "./HomeDetails/homeDetails";

const HomeScreen = () => {
  return (
    <div>
      <HomeBanner />
      <HomeDetails />
    </div>
  );
};

export default HomeScreen;
