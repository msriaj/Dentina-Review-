import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {
  const { setUser, createUser, updateProfileInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const displayName = form.name.value;
    const photoURL = form.photo.value;
    const info = { displayName: displayName, photoURL: photoURL };

    createUser(email, password)
      .then((newUser) => {
        updateProfileInfo(info);
        setUser({
          ...newUser.user,
          displayName: displayName,
          photoURL: photoURL,
        });
        console.log({
          ...newUser.user,
          displayName: displayName,
          photoURL: photoURL,
        });
        navigate("/profile");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="bg-blue-50">
        <div className="flex flex-col p-12 justify-center items-center lg:flex-row  lg:w-10/12 mx-auto lg:py-20 lg:gap-12">
          <div className="lg:w-1/2 hidden lg:block">
            {/* <img src={img} alt="" /> */}
          </div>
          <div className="w-full lg:w-1/2 max-w-md p-8 space-y-3 bg-white rounded-xl shadow-xl dark:bg-gray-900 dark:text-gray-100">
            <h1 className="text-2xl font-bold text-center">Sign Up </h1>
            <form
              onSubmit={submitHandler}
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-1 text-sm">
                <label htmlFor="Name" className="block dark:text-gray-400">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  id="Name"
                  placeholder="Name"
                  className="w-full px-4  py-3 rounded-md bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="Photo" className="block dark:text-gray-400">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  id="Photo"
                  placeholder="Photo"
                  className="w-full px-4  py-3 rounded-md bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block dark:text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-4  py-3 rounded-md bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block dark:text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  required
                />
              </div>
              <button className="block w-full p-3 text-center   bg-blue-500 rounded-md text-white dark:text-gray-900 dark:bg-violet-400">
                Sign Up
              </button>
            </form>

            <p className="text-lg text-center sm:px-6 dark:text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className=" font-bold dark:text-gray-100">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
