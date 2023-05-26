import React from "react";
import Img from "../Image/Image";
import favi from "../../Img/favicon.png";
import { NavLink as Anchor } from "react-router-dom";


function Header() {
  return (
    <div className=" text-white flex justify-between p-2 sm:p-5 sm:h-24 min-h-0">
      <div>
        <Img className="h-12" src={favi}></Img>
      </div>
      <div className="flex items-center">
        <Anchor className="p-2 text-xl hover:underline focus:underline " to="/">
          Home
        </Anchor>
        <Anchor className="p-2 text-xl hover:underline focus:underline " to="/portfolio">
          PortFolio
        </Anchor>
        <Anchor className="p-2 text-xl hover:underline focus:underline " to="/contact">
          Contact
        </Anchor>
      </div>
    </div>
  );
}

export default Header;


