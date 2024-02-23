import React from "react";

const CommonSection = ({
  sectionTitle,
  sectionText1,
  sectionText2,
  order1,
  order2,
  image,
  additionalItems,
}) => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className={`col-md-5 order-md-${order2} order-1`}>
            <img
              src={image}
              className="w-100 img-fluid rounded-3"
              alt=""
              loading="lazy"
            />
          </div>
          <div className={`col-md-7 order-md-${order1} order-2`}>
            <div>
              <p className="blood_text">{sectionTitle}</p>
              <p className="blue_heading">{sectionText1}</p>
              <p className="">{sectionText2}</p>
            </div>
            {additionalItems && (
              <div>
                <ul>
                  {additionalItems?.map((item, index) => (
                    <li style={{ listStyle: "inside" }} key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonSection;
