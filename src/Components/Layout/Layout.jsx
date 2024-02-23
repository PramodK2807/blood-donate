import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-vh-50">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
