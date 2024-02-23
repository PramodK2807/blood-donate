import React from "react";
import CommonSection from "./CommonSection";

const Section3 = () => {
  const additionalItems = [
    "Register Yourself",
    "Fill the form",
    "Enter hospital",
    "Donor will contact you",
    "Else our team will contact you",
  ];
  return (
    <>
      <CommonSection
        order1={2}
        order2={1}
        sectionTitle={"Process"}
        sectionText1={" How it works?"}
        sectionText2={
          "Submit your blood request through our user-friendly platform, providing essential details such as blood type, quantity needed, and location."
        }
        image={"/images/sec3.jpg"}
        additionalItems={additionalItems}
      />
    </>
  );
};

export default Section3;
