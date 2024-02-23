import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-4">
            <div className="logo">
              <Link to="/">
                <img
                  className="bg-white rounded-5"
                  src="/images/icons/logo.png"
                  alt="logo"
                />
                <span className="tag_line color_red ms-4">
                  Donate blood Save life
                </span>
              </Link>
            </div>
            <div class="intro text-white mt-5 ms-2">
              <p>Empowering Life Through Donation</p>
              <p>
                Your trusted platform for blood donation, striving to make a
                positive impact on lives. Join us in the journey of saving
                lives, one donation at a time.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-4 text-light">
            <div className="border_top mb-4"></div>
            <div>
              <h4>Quick Links</h4>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Register</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Gallery</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 text-light">
            <div className="border_top mb-4"></div>
            <div>
              <h4>Contact Us</h4>
              <div>
                <p>Jabalpur (M.P.) India, 482001 </p>
                <p className="mb-0 pb-0">Phone : +91 6260392809</p>
                <a href="mailto:pramodkushwaha1328@gmail.com">
                  pramod@gmail.com
                </a>
              </div>
            </div>

            <div>
              <div className="border_top my-4"></div>
              <div>
                <h4>Social Media</h4>
                <div>
                  <p>Jabalpur (M.P.) India, 482001 </p>
                  <p className="mb-0 pb-0">Phone : +91 6260392809</p>
                  <a href="mailto:pramodkushwaha1328@gmail.com">
                    pramod@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
