import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import ReactStars from "react-rating-stars-component";
import { useLoaderData } from "react-router-dom";
import AddReviews from "../../Components/AddReviews/AddReviews";
import { Page } from "../../Components/Page";
import Reviews from "../../Components/Reviews/Reviews";
import { serverUrl } from "../../Context/AuthContext";
import "./style.css";
const ServiceDetails = () => {
  const { _id, title, descriptions, thumbURL, price, rate, totalRating } =
    useLoaderData();
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
    <Page title={title}>
      <div className="bg-blue-50 py-12">
        <div className="md:w-10/12 mx-6 md:mx-auto bg-white rounded-md p-6 ">
          <div className="bg-gray-200">
            <PhotoProvider>
              <PhotoView src={thumbURL}>
                <img
                  src={thumbURL}
                  alt=""
                  className=" md:w-1/2 mx-auto   rounded-lg md:rounded-none mt-2"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="mb-3 mt-5">
            <h1 className="text-2xl text-gray-600 font-bold">{title}</h1>
          </div>
          <div>
            <div class="flex items-center justify-between p-3 mb-3 bg-sky-50 ">
              <div className="flex items-center">
                <button class="mr-1">
                  <ReactStars
                    count={5}
                    size={24}
                    value={rate}
                    isHalf={true}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </button>

                <span class="text-slate-400 font-medium">
                  {totalRating} reviews
                </span>
              </div>

              <div className="font-bold">
                <span className="text-gray-400"> Price :</span>{" "}
                <span className="text-red-500"> $ {price}</span>{" "}
              </div>
            </div>
          </div>
          <div className="mb-12 service-deatils">
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
    </Page>
  );
};

export default ServiceDetails;
