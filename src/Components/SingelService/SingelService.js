import React from "react";
import { PhotoView } from "react-photo-view";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SingleService = ({ info }) => {
  const { _id, title, descriptions, rate, totalRating, thumbURL, price } = info;

  return (
    <div>
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md      ">
        <PhotoView src={thumbURL}>
          <img
            className=" h-52 w-full bg-blue-100 rounded-t-lg"
            src={thumbURL}
            alt="title"
          />
        </PhotoView>

        <div className="px-5 pt-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900   ">
            {title}
          </h5>

          <p className="text-gray-400">
            {descriptions
              .replace(/(<([^>]+)>)/gi, " ")
              .replace("&nbsp;", " ")
              .slice(0, 100)}
          </p>
          <div className="flex items-center mt-2.5 ">
            <ReactStars
              count={5}
              size={24}
              value={rate}
              isHalf={true}
              edit={false}
              activeColor="#ffd700"
            />

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded      ml-3">
              {rate}/5
            </span>
          </div>
          <div className="mb-5">Total Rating: {totalRating}</div>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900   ">
              ${price}
            </span>

            <Link
              to={`/services/${_id}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
