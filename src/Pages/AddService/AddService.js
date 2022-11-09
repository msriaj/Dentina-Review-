import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AuthContext, serverUrl } from "../../Context/AuthContext";
import { notify } from "../../utils/notify";
import "./AddService.css";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const [photolink, setPhotoLink] = useState(null);

  const [content, setContent] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const thumbURL = form.thumbURL.value;
    const price = form.price.value;

    const data = {
      title,
      descriptions: content,
      thumbURL,
      price,
    };

    fetch(`${serverUrl}/addservice`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          notify("Successfully submitted !");
          form.reset();
          setPhotoLink(null);
        }
      });
  };

  return (
    <div className="bg-blue-50 py-12 md:px-12">
      <div className="md:w-7/12 mx-auto">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={handelSubmit} className="bg-white">
            <div className="  sm:overflow-hidden sm:rounded-md shadow-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <h1 className="font-bold text-gray-600">Add Service</h1>
                <div className="">
                  <div className="">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Service Title
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="block w-full bg-gray-100 shadow  outline-sky-100 p-2 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Service Title"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Service Descriptions
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <ReactQuill
                        theme="snow"
                        value={content}
                        onChange={setContent}
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Service Thumb Url
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="thumbURL"
                        id="thumbURL"
                        onBlur={(e) => setPhotoLink(e.target.value)}
                        className="bldisplayNameock w-full bg-gray-100 shadow  outline-sky-100 p-2 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder={user.uid && user?.photoURL}
                        required
                      />
                    </div>
                  </div>
                </div>

                {photolink && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Preview Thumb
                    </label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      {" "}
                      <img src={photolink} alt="" />{" "}
                    </div>{" "}
                  </div>
                )}

                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Service Price <span className="text-sky-300">(in $)</span>
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="number"
                        name="price"
                        className="block w-full bg-gray-100 shadow  outline-sky-100 p-2 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Price"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4 mb-6 py-3 text-left sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-sky-500 p-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add Service
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
