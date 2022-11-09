import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { AuthContext, serverUrl } from "../../Context/AuthContext";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviewsData, setReviews] = useState(null);

  useEffect(() => {
    fetch(`${serverUrl}/myreview?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user]);

  return (
    <div className="bg-blue-50">
      <div className="md:w-8/12 mx-auto ">
        <div className="flex flex-col justify-center ">
          <div className="w-full bg-white my-12 mx-auto rounded-sm border  ">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">My Reviews</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          {" "}
                          Service Details
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Review</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Time</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Actions</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {reviewsData &&
                      reviewsData.map((review) => (
                        <tr key={review._id} className="hover:bg-gray-100 ">
                          <td className="px-2 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                className="w-12 h-12 rounded shadow mr-2"
                                src={review?.thumbURL}
                                alt=""
                              />
                              <div className="font-medium text-gray-800">
                                <Link to={`/services/${review.serviceId}`}>
                                  {review?.serviceName}
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td className="px-2 py-4 whitespace-nowrap">
                            <div className="text-center flex flex-col items-center ">
                              <div className="flex">
                                <ReactStars
                                  count={5}
                                  size={6}
                                  value={review.rating}
                                  isHalf={true}
                                  edit={false}
                                  // emptyIcon={<i className="far fa-star"></i>}
                                  // halfIcon={<i className="fa fa-star-half-alt"></i>}
                                  // fullIcon={<i className="fa fa-star"></i>}
                                  activeColor="#ffd700"
                                />
                                <span className=" p-1 font-semibold">
                                  ( {review.rating})
                                </span>
                              </div>
                              {review.review}
                            </div>
                          </td>
                          <td className="px-2 py-4 whitespace-nowrap">
                            <div className="text-left  ">
                              {" "}
                              {review.createdAt}
                            </div>
                          </td>
                          <td className="px-2 py-4 whitespace-nowrap">
                            <span className="flex   justify-center gap-3">
                              <FaEdit className="text-green-600" />
                              <FaTrash className="text-red-600" />
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default MyReview;
