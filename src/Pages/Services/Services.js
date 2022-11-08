import React, { useEffect, useState } from "react";
import { PhotoProvider } from "react-photo-view";
import SingleService from "../../Components/SingelService/SingelService";
import { serverUrl } from "../../Context/AuthContext";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${serverUrl}/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      {" "}
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
    </div>
  );
};

export default Services;
