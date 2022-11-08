import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { _id, title, descriptions, thumbURL, price } = useLoaderData();
  return (
    <div className="bg-blue-50 py-12">
      <div className="md:w-10/12 mx-auto bg-white rounded-md p-6 flex">
        <div className="w-4/12">left</div>
        <div className="w-8/12">
          <img src={thumbURL} alt="" className="w-full" />
          <div className="border-b my-3">
            <h1 className="text-2xl text-gray-800 font-bold">
              <span className="text-gray-400">Service Name:</span> {title}
            </h1>
          </div>
          <div className="border-b my-3">
            <p className="text-gray-500">
              <b>Descriptions :</b> {descriptions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
