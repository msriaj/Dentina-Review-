import React, { useEffect, useState } from "react";
import { serverUrl } from "../../Context/AuthContext";
import Review from "../Review/Review";

const Reviews = ({ serviceId }) => {
  const [reviewsData, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${serverUrl}/review/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

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
      {reviewsData.map((singelReview) => (
        <Review key={singelReview._id} info={singelReview}></Review>
      ))}
    </div>
  );
};

export default Reviews;
