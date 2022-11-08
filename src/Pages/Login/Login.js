import React, { useContext, useEffect } from "react";
import Lottie from "lottie-react";
import loginAnimation from "./login.json";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const location = useLocation();
  const nextUrl = location?.state?.from.pathname || "/";

  const navigate = useNavigate();

  const notify = () => {
    toast.success("Logged Success", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const { user, googleSignIn } = useContext(AuthContext);

  const googleSignHandler = () => {
    googleSignIn()
      .then((result) => {
        notify();
        navigate(nextUrl);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    if (user?.uid) {
      navigate("/");
    }
  }, [navigate, user?.uid]);

  return (
    <div className="flex md:py-16 items-center">
      <div className="md:w-1/2 hidden md:block">
        <Lottie animationData={loginAnimation}> </Lottie>
      </div>
      <div className="w-full md:w-1/2 px-8 py-5 md:py-12 md:px-24">
        <div className="flex flex-col  p-6  rounded-md sm:p-10 text-white bg-sky-500 shadow-lg border-2 border-sky-500 dark:bg-gray-900 dark:text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <form
            novalidate=""
            action=""
            className="space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label for="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border bg-sky-100 text-gray-800 outline-0 rounded-md hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label for="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="/"
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border bg-sky-100 text-gray-800 outline-0 rounded-md hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="button"
                  className="w-full px-8 py-3 font-semibold rounded-md bg-sky-900 dark:bg-sky-400 dark:text-gray-900"
                >
                  Sign in
                </button>
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-400">
                Don't have an account yet?
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="hover:underline dark:text-sky-400"
                >
                  Sign up
                </a>
                .
              </p>
              <button
                onClick={googleSignHandler}
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md bg-sky-900 dark:bg-sky-400 dark:text-gray-900"
              >
                Google Sign in
              </button>
            </div>
          </form>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
};

export default Login;
