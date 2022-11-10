import React, { useContext, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Page } from "../../Components/Page";
import { AuthContext, serverUrl } from "../../Context/AuthContext";
import { notify } from "../../utils/notify";
const EditReview = () => {
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const { _id, rating, serviceId, serviceName, thumbURL, review } =
    useLoaderData();

  const [drating, setdRating] = useState(rating);

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const newReview = form.reviewMsg.value;

    const data = {
      _id,
      serviceId,
      review: newReview,
      userName: user.displayName,
      email: user.email,
      profile: user?.photoURL,
      rating: drating,
      thumbURL,
      serviceName: serviceName,
    };
    fetch(`${serverUrl}/update-my-review`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          notify("Review Successfully Edited !");
          form.reset();
          navigate("/myreviews");
        }
      });
  };
  return (
    <Page title="Edit Service">
      <div>
        <div className="mt-5 md:col-span-2 bg-blue-50 py-12 md:mt-0">
          <div className="md:w-7/12 mx-auto ">
            <div className="bg-white rounded-lg border shadow p-6">
              <h1 className="text-xl   font-medium title-font mb-3 text-gray-600 flex items-center justify-center">
                Edit Review
              </h1>
              <div className="flex">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="rounded-full w-12 bg-gray-50 shadow border h-12"
                />
                <div className="ml-2">
                  <h2 className="text-gray-600 font-bold">
                    {user?.displayName}
                  </h2>
                  <p className="text-gray-400">Posting Publicly</p>
                </div>
              </div>
              <form onSubmit={submitHandler}>
                <div className="flex justify-center">
                  <ReactStars
                    count={5}
                    size={60}
                    value={drating}
                    isHalf={true}
                    onChange={(e) => {
                      setdRating(e);
                    }}
                    activeColor="#ffd700"
                  />
                </div>
                <div>
                  <textarea
                    name="reviewMsg"
                    placeholder="Share details of your own experience at this place"
                    className="border p-3 w-full outline-sky-300 h-[100px]"
                    defaultValue={review}
                  ></textarea>
                </div>
                <div className="text-right">
                  <button className="bg-blue-600 rounded px-4 py-3 text-white mt-5">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default EditReview;
