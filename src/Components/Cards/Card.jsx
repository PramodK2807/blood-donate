import React from "react";

const Card = () => {
  return (
    <>
      <div className="">
        <div className="container ">
          <div className="row ">
            <div className="col-md-4 ">
              <div className="rounded-3 border border-danger px-3">
                <div className="text-center card_img">
                  <img src="/images/card_search.png" className="w-100" alt="" />
                </div>
                <div className="text-center">
                  <p className="fs-4">Donate Blood</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptate voluptas accusamus quo est quas ullam quos
                    reiciendis magni praesentium quibusdam?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="rounded-3 border border-danger px-3">
                <div className="text-center card_img">
                  <img src="/images/card_search.png" className="w-100" alt="" />
                </div>
                <div className="text-center">
                  <p className="fs-4">Donate Blood</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptate voluptas accusamus quo est quas ullam quos
                    reiciendis magni praesentium quibusdam?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="rounded-3 border border-danger px-3">
                <div className="text-center card_img">
                  <img src="/images/card_donate.png" className="w-100" alt="" />
                </div>
                <div className="text-center">
                  <p className="fs-4">Donate Blood</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptate voluptas accusamus quo est quas ullam quos
                    reiciendis magni praesentium quibusdam?
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
