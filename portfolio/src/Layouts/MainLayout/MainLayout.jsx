import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";



function MainLayout() {

   
  return (
    <div className="h-auto hero2" >
      <Header />
      <Outlet />
     
    </div>
  );
}

export default MainLayout;
