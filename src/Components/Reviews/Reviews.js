import React from "react";
import Review from "../Review/Review";

const Reviews = ({ reviewsData }) => {
  console.log(reviewsData);
  if (!reviewsData) {
    return (
      <div className="h-80 w-full flex justify-center items-center">
        <div className="w-48">No Reviews Added</div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {reviewsData.map((singelReview, idx) => (
        <Review
          key={singelReview?._id ? singelReview?._id : idx}
          info={singelReview}
        ></Review>
      ))}
    </div>
  );
};

export default Reviews;
