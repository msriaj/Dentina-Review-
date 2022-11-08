import React from "react";
import { FaStar } from "react-icons/fa";
import Review from "../Review/Review";

const Reviews = () => {
  return (
    <div>
      <h1 className="text-xl font-medium title-font pt-8 mb-3 border-b text-gray-600 flex items-center">
        <FaStar /> Reviews
      </h1>
      <Review></Review>
      <Review></Review>
      <Review></Review>
      <Review></Review>
    </div>
  );
};

export default Reviews;
