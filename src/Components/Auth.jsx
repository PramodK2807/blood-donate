import React from "react";
import Login from "./Auth/Login";
import Layout from "./Layout/Layout";
import "../assets/style/auth.css";
import Register from "./Auth/Register";

const Auth = () => {
  return (
    <>
      <Layout>
        <div className="auth_bg">
          <div className="container">
            <div className="row align-items-center justify-content-center py-5 ">
              <div className="mt-5 p-0 col-md-6 box_shadow bg-white">
                <ul
                  class="nav nav-tabs nav-justified mb-0"
                  id="ex1"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link active"
                      id="ex3-tab-1"
                      data-bs-toggle="tab"
                      href="#ex3-tabs-1"
                      role="tab"
                      aria-controls="ex3-tabs-1"
                      aria-selected="true"
                    >
                      Login
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link"
                      id="ex3-tab-2"
                      data-bs-toggle="tab"
                      href="#ex3-tabs-2"
                      role="tab"
                      aria-controls="ex3-tabs-2"
                      aria-selected="false"
                    >
                      Register
                    </a>
                  </li>
                </ul>

                <div class="tab-content" id="ex2-content">
                  <div
                    class="tab-pane fade show active auth_tab"
                    id="ex3-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex3-tab-1"
                  >
                    <Login />
                  </div>
                  <div
                    class="tab-pane fade auth_tab"
                    id="ex3-tabs-2"
                    role="tabpanel"
                    aria-labelledby="ex3-tab-2"
                  >
                    <Register />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Auth;
