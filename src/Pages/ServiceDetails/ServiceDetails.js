import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AddReviews from "../../Components/AddReviews/AddReviews";
import Reviews from "../../Components/Reviews/Reviews";
import { serverUrl } from "../../Context/AuthContext";

const ServiceDetails = () => {
  const { _id, title, descriptions, thumbURL, price } = useLoaderData();
  const [reviewsData, setReviews] = useState([]);

  const handleReviewsData = (data) => {
    setReviews(data);
  };

  useEffect(() => {
    fetch(`${serverUrl}/review/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);

  return (
    <div className="bg-blue-50 py-12">
      <div className="md:w-7/12 mx-auto bg-white rounded-md p-6 ">
        <img src={thumbURL} alt="" className="w-full rounded-lg mt-2" />
        <div className="mb-3 mt-5">
          <h1 className="text-2xl text-gray-600 font-bold">{title}</h1>
        </div>
        <div>
          <div class="flex justify-between p-3 mb-3 bg-sky-50 ">
            <div className="flex">
              <button class="mr-1">
                <svg
                  class="text-rose-400 w-5 h-auto fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                </svg>
              </button>

              <span class="text-slate-400 font-medium">
                {reviewsData.length} reviews
              </span>
            </div>

            <div className="font-bold">
              <span className="text-gray-400"> Price :</span>{" "}
              <span className="text-red-500"> $ {price}</span>{" "}
            </div>
          </div>
        </div>
        <div className="mb-12">
          <p className="text-gray-500">{parse(descriptions)}</p>
        </div>
        <AddReviews
          serviceId={_id}
          title={title}
          thumbURL={thumbURL}
          handleReviewsData={handleReviewsData}
          reviewsData={reviewsData}
        />
        <Reviews serviceId={_id} reviewsData={reviewsData} />
      </div>
    </div>
  );
};

export default ServiceDetails;
