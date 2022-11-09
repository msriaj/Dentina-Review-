import React from "react";
import ReactStars from "react-rating-stars-component";
const Review = ({ info }) => {
  const { profile, rating, review, userName, createdAt } = info;
  return (
    <div className=" mb-10">
      <div className="flex items-center mb-4 space-x-4">
        <img className="w-10 h-10 rounded-full" src={profile} alt="" />
        <div className="space-y-1 font-medium dark:text-white">
          <p>
            {userName}
            <time className="block text-sm text-gray-500 dark:text-gray-400">
              Posted On {createdAt.split("T")[0]}
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
          // emptyIcon={<i className="far fa-star"></i>}
          // halfIcon={<i className="fa fa-star-half-alt"></i>}
          // fullIcon={<i className="fa fa-star"></i>}
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
