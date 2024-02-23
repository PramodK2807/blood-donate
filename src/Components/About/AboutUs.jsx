import React from "react";
import Layout from "../Layout/Layout";
import CommonSection from "../Home/CommonSection";

const AboutUs = () => {
  const additionalItems = [
    "Inspiring people to give blood",
    "Specialist blood donors and clinical supervision.",
    "Producing a safe and ready blood supply",
    "Increasing communication with our members.",
    "High quality assessment, diagnosis and treatment.",
  ];
  return (
    <Layout>
      <div className="mt-5">
        <div className="mt-5 pt-1">
          <div className="about_bg mt-4 text-white">
            <div className="container py-5">
              <div className="text-start">
                <h1 style={{ lineHeight: "1.5" }}>About Us</h1>
                <div className="row">
                  <p className="col-md-6 my-4" style={{ lineHeight: "2" }}>
                    Welcome to our blood donation platform, where compassionate
                    donors unite with those in need. Our mission is to bridge
                    the gap between donors and receivers, creating a lifesaving
                    connection. Join us in this noble cause, as every donation
                    brings hope and healing to those facing medical challenges.
                    Together, we make a difference, one drop at a time.
                  </p>
                </div>
                <div>
                  {/* Navigate to blood request page */}
                  <button className="comman_btn rounded-2 mt-5">
                    Become A Donor
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="my-5">
            <CommonSection
              order1={2}
              order2={1}
              sectionTitle={"About Us"}
              sectionText1={"Together We Can Make World More Health & Better"}
              sectionText2={
                "Blood Center is public donation center with blood donation members in the changing health care system. Founded in 1978, Blood Center is one of the nation’s oldest and largest nonprofit transfusion medicine organizations. We provide a blood and volunteer services across the US. With our national footprint, deep community roots and specialized services, we are the thread that connects people and resources together to fuel progress in transfusion medicine."
              }
              image={"/images/about.jpg"}
              additionalItems={additionalItems}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
