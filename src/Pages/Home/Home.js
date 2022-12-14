import React, { useEffect, useState } from "react";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import Features from "../../Components/Features/Features";
import Hero from "../../Components/Hero/Hero";
import { LoittaSpinner } from "../../Components/loader/LoittaSpinner";
import { Page } from "../../Components/Page";
import SingleService from "../../Components/SingelService/SingelService";
import { serverUrl } from "../../Context/AuthContext";

const Home = () => {
  const [services, setServices] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${serverUrl}/services?limit=3`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setServices(data);
      });
  }, []);

  return loading ? (
    <LoittaSpinner />
  ) : (
    <Page title="Home Page">
      <Hero></Hero>

      <Features />
      <div>
        <h2 className="text-center text-3xl font-bold text-gray-500 mt-12">
          My <span className="text-sky-600">Services</span>{" "}
        </h2>
      </div>
      <PhotoProvider>
        <div className="md:w-10/12 mx-8 md:mx-auto py-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services?.map((service) => (
            <SingleService key={service._id} info={service} />
          ))}
        </div>
      </PhotoProvider>
      <div className="text-center">
        <Link to="/services">
          <button className="bg-blue-600 text-white py-2 px-5 rounded-md">
            See All Services
          </button>
        </Link>
      </div>
    </Page>
  );
};

export default Home;
