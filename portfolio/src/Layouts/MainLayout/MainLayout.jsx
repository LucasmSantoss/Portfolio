import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";
import fondo from '../../Img/fondo.jpg'


function MainLayout() {

    const backgroundStyle = {
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
  return (
    <div className="h-auto" style={backgroundStyle}>
      <Header />
      <Outlet />
     
    </div>
  );
}

export default MainLayout;
