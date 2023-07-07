import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";

import Footer from "../../Components/Footer/Footer";


function IndexLayout() {
 

  return (
    <div className=" h-screen hero2" >
      <Header />
      <Outlet  />
      <Footer />
    </div>
  );
}

export default IndexLayout;
