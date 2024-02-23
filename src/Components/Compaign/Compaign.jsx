import React from "react";
import HeaderLogo from "./HeaderLogo";
import Layout from "../Layout/Layout";
import CommonSection from "../Home/CommonSection";

const Compaign = () => {
    const additionalItems = [
        "Increase awareness about the importance of regular blood donation.",
        "Recruit new donors to expand our community of life-savers.",
        "Ensure a stable and sufficient blood supply for hospitals and medical facilities.",
        "Foster a sense of unity and responsibility within our community.",
      ];
  return (
    <Layout>
      <div className="mt-5">
        <HeaderLogo />
      </div>

      <div className="my-5">
        <CommonSection
          order1={1}
          order2={2}
          sectionTitle={"Why Donate Blood?"}
          sectionText1={"The Gift of Life: Why Your Contribution Matters"}
          sectionText2={
            "Every drop of blood donated has the potential to make a significant difference in someone's life. By donating blood, you are providing a lifeline to those in need, whether it's a patient undergoing surgery, a trauma victim, or someone with a chronic illness. Your act of kindness can truly be the gift of life for someone in their time of need."
          }
          image="/images/comp.avif"
        />
      </div>
      <div className="my-5">
        <CommonSection
          order1={2}
          order2={1}
          sectionTitle={"Campaign Goals"}
          sectionText1={"Our Mission: Achieving Impact Together"}
          sectionText2={
            "Our campaign aims to achieve several key goals:"
          }
          image="/images/comp.avif"
          additionalItems={additionalItems}
        />
      </div>
    </Layout>
  );
};

export default Compaign;
