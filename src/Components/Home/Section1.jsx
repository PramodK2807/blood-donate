import React from "react";

const Section1 = () => {
  return (
    <>
      <div className="blood_bg">
      <div className="container position-relative">
        <div className="position-absolute blood_animate">
          <img src="/images/blood.png" className="w-100 h-100" alt="" />
        </div>
        <div className="row min-vh-100 align-items-center">
          <div className="col-md-7 mt-4 mt-md-0 z-2">
            <div>
              <p className="big_text mt-5 mt-md-0">
                <span className="bold_text">Help</span> & Save Life by <br />
                Donating<span className="bold_text"> Blood</span>
              </p>
              <p className="normal_text">
                Embark on a life-changing journey with a single act of kindness
                – donate blood today. Your pint of generosity has the power to
                save lives, bringing hope to those in need. Join the noble
                community of donors and be the unsung hero that makes a
                remarkable difference in someone's story.
              </p>
            </div>
            <div>
              <button className="comman_btn rounded-2 mt-5">Contact Us</button>
            </div>
          </div>
          <div className="col-md-5">
            <img
            loading="lazy"
              src="/images/blood_don.png"
              className="w-100 h-100"
              alt=""
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Section1;
