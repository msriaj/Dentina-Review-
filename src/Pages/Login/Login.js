import Lottie from "lottie-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { LoittaSpinner } from "../../Components/loader/LoittaSpinner";
import { Page } from "../../Components/Page";
import { AuthContext } from "../../Context/AuthContext";
import { notify } from "../../utils/notify";
import loginAnimation from "./login.json";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const nextUrl = location?.state?.from.pathname || "/";

  const { user, signInEmail, googleSignIn, createToken, setToken } =
    useContext(AuthContext);

  const [sping, setSping] = useState(false);

  const submitHandler = (e) => {
    setSping(true);
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInEmail(email, password)
      .then((user) => {
        setSping(false);
        navigate(nextUrl);
        notify("Login Successfully !!");
      })
      .catch((err) => {
        setSping(false);
        notify(err.code, "error");
      });
  };

  const googleSignHandler = () => {
    setSping(true);
    googleSignIn()
      .then(async (data) => {
        const token = await createToken(data.user.email);
        if (token) {
          localStorage.setItem("token", token.token);
          setToken(token.token);
          setSping(true);
          navigate(nextUrl);
          notify("Login Successfully !!");
        }
      })
      .catch((err) => notify(err.code, "error"));
  };

  useEffect(() => {
    if (user?.uid) {
      navigate(nextUrl);
    }
  }, [navigate, nextUrl, user?.uid]);

  return sping ? (
    <LoittaSpinner />
  ) : (
    <Page title="Login">
      <div className="flex md:py-16 items-center bg-blue-50">
        <div className="md:w-1/2 hidden md:block">
          <Lottie animationData={loginAnimation}> </Lottie>
        </div>
        <div className="w-full md:w-1/2 px-8 py-5 md:py-12 md:px-24">
          <div className="flex flex-col  p-6  rounded-md sm:p-10 text-gray-700 bg-white shadow-lg         ">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Sign in</h1>
              <p className="text-sm   ">Sign in to access your account</p>
            </div>
            <form
              onSubmit={submitHandler}
              className="space-y-12 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="leroy@jenkins.com"
                    className="w-full px-3 py-2 border bg-sky-100 text-gray-800 outline-0 rounded-md hover:bg-gray-50     "
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm">
                      Password
                    </label>
                    <a
                      rel="noopener noreferrer"
                      href="/"
                      className="text-xs hover:underline   "
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border bg-sky-100 text-gray-800 outline-0 rounded-md hover:bg-gray-50           "
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-white dark:bg-sky-400  "
                  >
                    Sign in
                  </button>
                </div>
                <p className="px-6 text-sm text-center   ">
                  Don't have an account yet?
                  <Link to="/reg" className="hover:underline dark:text-sky-400">
                    Sign up
                  </Link>
                  .
                </p>
                <button
                  onClick={googleSignHandler}
                  type="button"
                  className="w-full px-8 py-3 font-semibold rounded-md  bg-blue-600 text-white dark:bg-sky-400  "
                >
                  Google Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Login;
