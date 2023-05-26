import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";
import fondo from '../../Img/fondo.jpg'
import Footer from "../../Components/Footer/Footer";


function IndexLayout() {
  const backgroundStyle = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="h-screen" style={backgroundStyle}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default IndexLayout;
