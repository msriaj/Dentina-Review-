import React, { useContext, useState } from "react";
import { FaNotesMedical } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { AuthContext, serverUrl } from "../../Context/AuthContext";
import { notify } from "../../utils/notify";

const AddReviews = ({ serviceId }) => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.reviewMsg.value;

    const data = {
      serviceId,
      review,
      userName: user.displayName,
      email: user.email,
      profile: user.photoURL,
      rating,
    };

    fetch(`${serverUrl}/review`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          notify("Review Successfully submitted !");
          form.reset();
        }
      });
  };

  return (
    <>
      <div className="bg-white rounded-lg border shadow p-6">
        <h1 className="text-xl   font-medium title-font mb-3 text-gray-600 flex items-center justify-center">
          <FaNotesMedical /> Write A Review
        </h1>
        <div className="flex">
          <img src={user?.photoURL} alt="" className="rounded-full h-12" />
          <div className="ml-2">
            <h2 className="text-gray-600 font-bold">{user?.displayName}</h2>
            <p className="text-gray-400">Posting Publicly</p>
          </div>
        </div>
        <form onSubmit={submitHandler}>
          <div className="flex justify-center">
            <ReactStars
              count={5}
              size={60}
              isHalf={true}
              onChange={(e) => {
                setRating(e);
              }}
              activeColor="#ffd700"
            />
          </div>
          <div>
            <textarea
              name="reviewMsg"
              placeholder="Share details of your own experience at this place"
              className="border p-3 w-full outline-sky-300 h-[100px]"
            ></textarea>
          </div>
          <div className="text-right">
            <button className="bg-blue-600 rounded px-4 py-3 text-white mt-5">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddReviews;
