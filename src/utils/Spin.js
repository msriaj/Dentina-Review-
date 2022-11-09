import { Lottie } from "lottie-react";
import React from "react";
import data from "./spin.json";

export const Spin = () => {
  return (
    <div>
      <div className="h-80 w-full flex justify-center items-center">
        <div className="w-48">
          <Lottie animationData={data}></Lottie>
        </div>
      </div>
    </div>
  );
};
