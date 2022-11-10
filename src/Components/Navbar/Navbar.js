import React, { useContext, useState } from "react";
import { FaBars, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const logOutHandler = () => {
    logOut();
    localStorage.setItem("token", "");
  };

  const [show, setShow] = useState(false);

  return (
    <div>
      <header className="py-4 bg-white  text-gray-900          ">
        <div className="md:flex justify-between items-center md:w-10/12 md:mx-auto hidden">
          <div>
            <Link to="/" className="font-bold text-xl text-sky-500 mr-3">
              <span className="uppercase">Dantina</span>
            </Link>

            <Link
              className="py-2 rounded-lg hover:text-sky-600 hover:bg-white px-2 font-semibold text-sm "
              to="/"
            >
              Home
            </Link>

            <Link
              className="py-2 rounded-lg hover:text-sky-600 hover:bg-white px-2 font-semibold text-sm "
              to="/services"
            >
              Services
            </Link>

            {user?.uid && (
              <>
                <Link
                  className="py-2 rounded-lg hover:text-sky-600 hover:bg-white px-2 font-semibold text-sm "
                  to="/addservices"
                >
                  Add Services
                </Link>
                <Link
                  className="py-2 rounded-lg hover:text-sky-600 hover:bg-white px-2 font-semibold text-sm "
                  to="/myreviews"
                >
                  My Reviews
                </Link>
              </>
            )}
            <Link
              className="py-2 rounded-lg hover:text-sky-600 hover:bg-white px-2  font-semibold text-sm"
              to="/blogs"
            >
              Blogs
            </Link>
          </div>
          <div className="pt-3">
            {user?.uid ? (
              <div className="flex items-center ">
                <Link to="/profile">
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="inline-block w-10 rounded-full border-2 border-blue-400 mr-3"
                  />
                </Link>

                <span
                  onClick={logOutHandler}
                  className="  cursor-pointer hover:text-sky-400 transition-colors duration-500  text-3xl  px-4 "
                >
                  <ReactTooltip />
                  <p data-tip="Logout">
                    {" "}
                    <FaSignOutAlt />
                  </p>
                </span>
              </div>
            ) : (
              <>
                {" "}
                <Link
                  className="py-2 rounded-md border   text-sm   px-4 "
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="py-2 rounded-md bg-blue-600 border  border-blue-600  ml-2 text-sm text-white    px-4 "
                  to="/reg"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="flex justify-between md:hidden px-6">
          <div>
            <Link to="/" className="font-bold text-xl text-sky-500 mr-3">
              <span className="uppercase">Dantina</span>
            </Link>
          </div>
          <div>
            {!show ? (
              <FaBars onClick={() => setShow(!show)} />
            ) : (
              <FaTimes onClick={() => setShow(!show)} />
            )}
          </div>
        </div>
        {show && (
          <>
            <div className="flex flex-col ml-5">
              <Link
                className="py-2 rounded-lg hover:text-sky-600 hover:bg-white px-2 font-semibold text-sm "
                to="/"
              >
                Home
              </Link>

              <Link
                className="py-2 rounded-lg hover:text-sky-600 hover:bg-white px-2 font-semibold text-sm "
                to="/services"
              >
                Services
              </Link>

              {user?.uid && (
                <>
                  <Link
                    className="py-2 rounded-lg hover:text-sky-600 hover:bg-white px-2 font-semibold text-sm "
                    to="/addservices"
                  >
                    Add Services
                  </Link>
                  <Link
                    className="py-2 rounded-lg hover:text-sky-600 hover:bg-white px-2 font-semibold text-sm "
                    to="/myreviews"
                  >
                    My Reviews
                  </Link>
                </>
              )}
              <Link
                className="py-2 rounded-lg hover:text-sky-600 hover:bg-white px-2  font-semibold text-sm"
                to="/blogs"
              >
                Blogs
              </Link>
            </div>
            <div className="pt-3 ml-5">
              {user?.uid ? (
                <div className="flex items-center ">
                  <Link to="/profile">
                    <img
                      src={user?.photoURL}
                      alt=""
                      className="inline-block w-10 rounded-full border-2 border-blue-400 mr-3"
                    />
                  </Link>

                  <span
                    onClick={logOutHandler}
                    className="  cursor-pointer hover:text-sky-400 transition-colors duration-500  text-3xl  px-4 "
                  >
                    <ReactTooltip />
                    <p data-tip="Logout">
                      {" "}
                      <FaSignOutAlt />
                    </p>
                  </span>
                </div>
              ) : (
                <>
                  {" "}
                  <Link
                    className="py-2 rounded-md border   text-sm   px-4 "
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="py-2 rounded-md bg-blue-600 border  border-blue-600  ml-2 text-sm text-white    px-4 "
                    to="/reg"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default Navbar;
