import React from "react";
import FeatureProduct from "./components/FeatureProduct";
import HeroSection from './components/HeroSection';
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data ={
    name: "Simplify Your Legal Search.",
    content: "Need an attorney? LawyerMatch is the solution to your legal search.",
  }
  return(
    <>
      <HeroSection myData={data}/>
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};


export default Home;
