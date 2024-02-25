import React from "react";
import Layout from "./Layout/Layout";
import Section1 from "./Home/Section1";
import Section2 from "./Home/Section2";
import Section3 from "./Home/Section3";
import Testimonials from "./Home/Testimonials";
import Card from "./Cards/Card";

const Homepage = () => {

  return (
    <Layout>
      <div className="mt-5">
        <Section1 />
      </div>
      <div className="my-5">
        <Section2 />
      </div>
      <div className="my-5">
        <Card />
      </div>
      <div className="my-5">
        <Section3 />
      </div>
      <div className="my-5">
        <Testimonials />
      </div>
    </Layout>
  );
};

export default Homepage;
