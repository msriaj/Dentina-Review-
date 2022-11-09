import Lottie from "lottie-react";
import React from "react";
import data from "./data.json";

export const LoittaSpinner = () => {
  return (
    <div className="h-80 w-full flex justify-center items-center">
      <div className="w-48">
        <Lottie animationData={data} />
      </div>
    </div>
  );
};
