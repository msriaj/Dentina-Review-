import React, { useEffect, useState } from "react";
import { PhotoProvider } from "react-photo-view";
import { LoittaSpinner } from "../../Components/loader/LoittaSpinner";
import { Page } from "../../Components/Page";
import SingleService from "../../Components/SingelService/SingelService";
import { serverUrl } from "../../Context/AuthContext";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${serverUrl}/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoittaSpinner />;

  return (
    <Page title="All Service">
      <div className="bg-blue-50">
        <div className="px-6 md:px-0 space-y-2 text-center pt-12">
          <h2 className="text-3xl font-bold">My Services</h2>
          <p className="font-serif text-sm   ">All Of My services</p>
        </div>
        <PhotoProvider>
          <div className=" mx-6  md:w-10/12 md:mx-auto py-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services?.map((service) => (
              <SingleService key={service._id} info={service} />
            ))}
          </div>
        </PhotoProvider>
      </div>
    </Page>
  );
};

export default Services;
