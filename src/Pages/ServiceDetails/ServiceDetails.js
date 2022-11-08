import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { _id, title, descriptions, thumbURL, price } = useLoaderData();
  return <div>{title}</div>;
};

export default ServiceDetails;
