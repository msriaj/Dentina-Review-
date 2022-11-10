import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import doctor from "././doctor.json";

const Hero = () => {
  return (
    <section className="rounded-lg">
      <div className="md:w-10/12 px-6 md:px-0 mx-auto">
        <div className=" flex flex-col justify-between   mx-auto sm:py-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center py-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Best medical care for your
              <span className="text-sky-400"> smile</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Best medical care for your smile{" "}
              <br className="hidden md:inline lg:hidden" />
              Dictum aliquam porta in condimentum ac integer
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/services"
                className="px-8 py-3 text-lg font-semibold rounded bg-sky-400 text-white  "
              >
                Services
              </Link>

              <Link
                to="/reg"
                className="px-8 py-3 text-lg font-semibold border rounded  "
              >
                Signup
              </Link>
            </div>
          </div>
          <div className="hidden  md:flex items-center justify-center">
            <Lottie animationData={doctor}> </Lottie>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
