import React from "react";

const Card = () => {
  return (
    <>
      <div className="">
        <div className="container blood_cards ">
          <div className="row ">
            <div className="col-md-4 my-2 my-md-0 ">
              <div className="rounded-3 border border-danger px-3 h-100 card_cont">
                <div className="text-center card_img">
                  <img src="/images/card_donate.png" className="w-100" alt="" />
                </div>
                <div className="text-center px-1 pb-3">
                  <p className="fs-4 title">Donate Blood</p>
                  <p className="desc">
                    Dedicate a moment, donate blood – the gift of life. Blood
                    donation: a selfless act, always free, forever priceless.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2 my-md-0">
              <div className="rounded-3 border border-danger px-3 h-100 card_cont">
                <div className="text-center card_img">
                  <img src="/images/card_search.png" className="w-100" alt="" />
                </div>
                <div className="text-center px-1 pb-3">
                  <p className="fs-4 title">Search for Blood</p>
                  <p className="desc">
                    Amidst the search for blood, we stand by, ready to extend a
                    helping hand. Your support can make a life-saving difference
                    – together, let's make a meaningful impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2 my-md-0 ">
              <div className="rounded-3 border border-danger px-3 h-100 card_cont">
                <div className="text-center card_img">
                  <img src="/images/save.png" className="w-100" alt="" />
                </div>
                <div className="text-center px-1 pb-3">
                  <p className="fs-4 title">Save Blood</p>
                  <p className="desc">
                    Save blood, save lives – a precious gift for those in need.
                    Your donation can be a beacon of hope, a lifeline that makes
                    a lasting impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
