import React from "react";
import ReactStars from "react-rating-stars-component";
import { formatDate } from "../../utils/dateFormat";
const Review = ({ info }) => {
  const { profile, rating, review, userName, createdAt } = info;
  return (
    <div className=" mb-10">
      <div className="flex items-center mb-4 space-x-4">
        <img
          className="w-12 h-12 border border-gray-200 p-1 shadow rounded-full"
          src={profile}
          alt=""
        />
        <div className="space-y-1 font-medium dark:text-white">
          <p>
            {userName}
            <time className="block text-sm text-gray-500 dark:text-gray-400">
              Posted On {formatDate(createdAt)}
            </time>
          </p>
        </div>
      </div>
      <div className="flex items-center mb-1">
        <ReactStars
          count={5}
          size={24}
          value={rating}
          isHalf={true}
          edit={false}
          activeColor="#ffd700"
        />
      </div>

      <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
        {review}
      </p>
    </div>
  );
};

export default Review;
