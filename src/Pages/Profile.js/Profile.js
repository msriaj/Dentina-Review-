import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { notify } from "../../utils/notify";

const Profile = () => {
  const [photoLink, setPhotoLink] = useState(null);

  const { user, setUser, updateProfileInfo } = useContext(AuthContext);
  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const info = { displayName: displayName, photoURL: photoLink };
    updateProfileInfo(info)
      .then(() => {
        setUser({
          ...user,
          displayName: displayName,
          photoURL: photoLink,
        });
        notify("Profie Updated Successfully !!");
        e.target.reset();
        setPhotoLink(null);
      })
      .catch((err) => notify(err.code, "error"));
  };

  return (
    <div className="bg-blue-50 py-12">
      <div className="bg-white md:w-10/12 md:mx-auto p-6 rounded-lg shadow-md">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Profile
              </h3>
              <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
                <img
                  src={user.uid && user?.photoURL}
                  alt=""
                  className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                />
                <div className="space-y-4 text-center divide-y divide-gray-700">
                  <div className="my-2 space-y-1">
                    <h2 className="text-xl font-semibold sm:text-2xl">
                      {user.uid && user?.displayName}
                    </h2>
                    <p className="px-5 text-xs sm:text-base font-semibold dark:text-gray-400">
                      {user.uid && user?.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={submitHandler}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          className="block w-full bg-gray-100 outline-sky-100 p-2 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder={user.uid && user?.displayName}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Photo Url
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="photoURL"
                          id="photoURL"
                          onBlur={(e) => setPhotoLink(e.target.value)}
                          className="bldisplayNameock w-full bg-gray-100 outline-sky-100 p-2 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder={user.uid && user?.photoURL}
                        />
                      </div>
                    </div>
                  </div>

                  {photoLink && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Preview photo
                      </label>
                      <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        <img src={photoLink} className="h-48" alt="" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
