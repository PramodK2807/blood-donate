import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import "../../assets/style/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "rsuite";
import { setLogout } from "../../Redux/features/userSlice";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDD, setShowDD] = useState(false);
  const [loader, setLoader] = useState(false);
  const [updateDetails, setUpdateDetails] = useState({
    fullName: "",
    email: "",
  });
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log(userData);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(setLogout());
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showMenu]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(updateDetails.email);
  };

  return (
    <div className="position-fixed top-0 start-0 end-0 bg-white z-3">
      <div className="container-fluid">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="/images/icons/logo.png" alt="logo" />
              <span className="tag_line ms-2 color_red">
                Pulse Share
              </span>
            </Link>
          </div>
          <div className={`menus ${showMenu ? "show" : ""}`}>
            <ul className="d-flex gx-2 list">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/campaign"}>Campaign</Link>
              </li>
              <li>
                <Link to={"/gallery"}>Gallery</Link>
              </li>
              <li>
                <Link to={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link to={"/request"}>Blood Request</Link>
              </li>
            </ul>
          </div>
          {userData?.isLoggedIn || userData?.user !== null ? (
            <div class="position-relative" onClick={() => setShowDD(!showDD)}>
              <div className="bg_user_img cursor-pointer">
                <img src="/images/user.png" className="w-100 h-100" alt="" />
              </div>

              {showDD && (
                <div className="drop_menus py-4">
                  <p className="py-0">
                    <Link
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      View Profile
                    </Link>
                    <div
                      class="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                              View Profile
                            </h5>
                            <button
                              type="reset"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <form>
                              <div className="row">
                                <div className="col-12">
                                  <div className="d-flex align-items-center justify-content-center">
                                    <img
                                      src="/images/user.png"
                                      className="nav_user_profile"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <label htmlFor="name">Name</label>
                                  <input
                                    type="text"
                                    placeholder="Name..."
                                    defaultValue={userData?.user?.fullName}
                                    className="w-100 rounded-2 border-1 px-2 py-2"
                                    disabled
                                  />
                                </div>
                                <div className="col-12">
                                  <label htmlFor="name">Email</label>
                                  <input
                                    type="text"
                                    placeholder="Name..."
                                    defaultValue={userData?.user?.email}
                                    className="w-100 rounded-2 border-1 px-2 py-2"
                                    disabled
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </p>
                  <p className="py-0">
                    <Link
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop2"
                    >
                      Update Profile
                    </Link>
                    <div
                      class="modal fade"
                      id="staticBackdrop2"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                              Update Profile
                            </h5>
                            <button
                              type="reset"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <div className="row">
                              <div className="col-12">
                                <div className="d-flex align-items-center justify-content-center">
                                  <img
                                    src="/images/user.png"
                                    className="nav_user_profile"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <label htmlFor="name">Name</label>
                                <input
                                  type="text"
                                  placeholder="Name..."
                                  defaultValue={userData?.user?.fullName}
                                  className="w-100 rounded-2 border-1 px-2 py-2"
                                  onChange={(e) =>
                                    setUpdateDetails({
                                      ...updateDetails,
                                      fullName: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div className="col-12">
                                <label htmlFor="name">Email</label>
                                <input
                                  type="text"
                                  placeholder="Name..."
                                  defaultValue={userData?.user?.email}
                                  className="w-100 rounded-2 border-1 px-2 py-2"
                                  onChange={(e) =>
                                    setUpdateDetails({
                                      ...updateDetails,
                                      email: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>
                            <div className="text-end mt-3">
                              <Button
                                type="submit"
                                className="px-4"
                                appearance="primary"
                                // loading={loader}
                                // onClick={(e) => handleSubmit(e)}
                                onClick={() => alert("Hello")}
                              >
                                Update
                              </Button>
                              {/* <button   onClick={(e) => handleSubmit(e)} >update</button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </p>
                  <p className="py-0">
                    <Link>
                      Total requests{" "}
                      <span className="rounded_count">
                        {userData?.totalCount}
                      </span>
                    </Link>
                  </p>
                  {/* <p className="py-0">
                    <Link to={"/admin/add-hospitals"}>Admin Panel</Link>
                  </p> */}
                  <p className="py-0" onClick={handleLogout}>
                    <Link>Logout</Link>
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="">
              <Link to={"/login"}>
                <button className="comman_btn white_btn me-2 text-danger">
                  Sign Up
                </button>
              </Link>

              <Link to={"/login"}>
                <button className="comman_btn text-white">Login</button>
              </Link>
            </div>
          )}

          <div className="d-lg-none cursor-pointer" onClick={toggleMenu}>
            {showMenu ? (
              <div style={{ fontSize: "30px" }}>
                <IoCloseSharp />
              </div>
            ) : (
              <div style={{ fontSize: "30px" }}>
                <RiMenu3Fill />
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
