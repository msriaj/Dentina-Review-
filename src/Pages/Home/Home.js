import React, { useEffect, useState } from "react";
import Features from "../../Components/Features/Features";
import Hero from "../../Components/Hero/Hero";
import SingleService from "../../Components/SingelService/SingelService";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { serverUrl } from "../../Context/AuthContext";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${serverUrl}/services?limit=3`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <Hero></Hero>

      <Features />
      <div>
        <h2 className="text-center text-3xl font-bold text-gray-500 mt-12">
          My <span className="text-sky-600">Services</span>{" "}
        </h2>
      </div>
      <PhotoProvider>
        <div className="md:w-10/12 mx-auto py-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services?.map((service) => (
            <SingleService key={service._id} info={service} />
          ))}
        </div>
      </PhotoProvider>
    </>
  );
};

export default Home;
