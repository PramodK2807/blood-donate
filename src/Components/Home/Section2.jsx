import React from "react";
import CommonSection from "./CommonSection";

const Section2 = () => {
  return (
    <>
      <CommonSection
        order1={1}
        order2={2}
        sectionTitle={"Blood request"}
        sectionText1={" Can not find Blood ? Do no Worry..."}
        sectionText2={
          "  Facing difficulty finding blood? Don't worry, we've got you covered! Our dedicated team is here to help you connect with blood donors and ensure a steady supply for those in need. Your well-being is our priority."
        }
        image="/images/blood.jpg"
      />
    </>
  );
};

export default Section2;
