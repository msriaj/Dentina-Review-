import React, { useEffect, useState } from "react";
import { PhotoView } from "react-photo-view";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { serverUrl } from "../../Context/AuthContext";
const SingleService = ({ info }) => {
  const { _id, title, descriptions, thumbURL, price } = info;
  const [reviewsData, setReviews] = useState({});

  useEffect(() => {
    fetch(`${serverUrl}/rating/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <PhotoView src={thumbURL}>
          <img
            className=" h-52 w-full bg-blue-100 rounded-t-lg"
            src={thumbURL}
            alt="productimage"
          />
        </PhotoView>

        <div className="px-5 pt-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>

          <p className="text-gray-400">{descriptions.slice(0, 100)}</p>
          <div className="flex items-center mt-2.5 ">
            <ReactStars
              count={5}
              size={24}
              value={reviewsData.avgRatingRound}
              isHalf={true}
              edit={false}
              // emptyIcon={<i className="far fa-star"></i>}
              // halfIcon={<i className="fa fa-star-half-alt"></i>}
              // fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {reviewsData.avgRatingRound}/5
            </span>
          </div>
          <div className="mb-5">Total Rating: {reviewsData.totalReviews}</div>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>

            <Link
              to={`/service/${_id}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
