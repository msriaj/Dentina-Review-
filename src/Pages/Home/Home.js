import React from "react";
import Features from "../../Components/Features/Features";
import Hero from "../../Components/Hero/Hero";
import SingleService from "../../Components/SingelService/SingelService";

const Home = () => {
  return (
    <>
      <Hero></Hero>

      <Features />
      <div>
        <h2 className="text-center text-3xl font-bold text-gray-500 mt-12">
          My <span className="text-sky-600">Services</span>{" "}
        </h2>
      </div>
      <div className="md:w-10/12 mx-auto py-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <SingleService />
        <SingleService />
        <SingleService />
      </div>
    </>
  );
};

export default Home;
