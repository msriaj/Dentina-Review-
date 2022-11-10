import React from "react";
import { FaMagnet, FaThumbsUp, FaUserInjured } from "react-icons/fa";

const Features = () => {
  return (
    <div className="bg-blue-50">
      <div className="mx-8 md:w-10/12 md:mx-auto">
        <section className=" pt-8 ">
          <div className=" container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="mb-8   bg-white  hover:bg-sky-50  p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                  <div className="bg-blue-600 text-white mb-8 flex   h-[70px] w-[70px] text-4xl items-center justify-center rounded-2xl">
                    <FaMagnet />
                  </div>
                  <h4 className="text-dark mb-3 text-xl font-semibold">
                    Awesome Technology
                  </h4>
                  <p className="text-body-color">
                    Awesome Technology operates as a specialist in the field of
                    making digital dentistry a reality for many clinics, labs
                    and organisations through supplying 3D equipment, software
                    and know how built from the inception of the sector.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="mb-8   bg-blue-900 text-white  hover:bg-blue-800  p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                  <div className="bg-blue-600   text-white mb-8 flex  h-[70px] w-[70px] text-4xl items-center justify-center rounded-2xl">
                    <FaUserInjured />
                  </div>
                  <h4 className="text-dark mb-3 text-xl font-semibold">
                    Professional
                  </h4>
                  <p className="text-body-color">
                    We dejoy working with discerning clients, people for whom
                    qualuty, service, integrity & aesthetics.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="mb-8   bg-white  hover:bg-sky-50  p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                  <div className="bg-blue-600 text-white mb-8 flex  h-[70px] w-[70px] text-4xl items-center justify-center rounded-2xl">
                    <FaThumbsUp />
                  </div>
                  <h4 className="text-dark mb-3 text-xl font-semibold">
                    Satisfaction Guarantee
                  </h4>
                  <p className="text-body-color">
                    A satisfaction guarantee is a promise a brand makes to
                    assure a buyer that a refund will be issued if the buyer is
                    not satisfied with a
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
