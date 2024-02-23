import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import "../../assets/style/navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
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

  return (
    <div className="position-fixed top-0 start-0 end-0 bg-white z-3">
      <div className="container-fluid">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="/images/icons/logo.png" alt="logo" />
              <span className="tag_line ms-2 d-none d-md-inline-block color_red">
                Donate blood Save life
              </span>
            </Link>
          </div>
          <div className={`menus ${showMenu ? "show" : ""}`}>
            <ul className="d-flex align-items-center gx-2 list">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/campaign"}>Campaign</Link>
              </li>
              <li>
                <Link to={"/"}>Gallery</Link>
              </li>
              <li>
                <Link to={"/"}>About Us</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <button className="comman_btn white_btn me-2">Sign Up</button>
            <button className="comman_btn">Login</button>
          </div>

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
