import React from "react";
import Img from "../Image/Image";
import favi from "../../Img/favicon.png";
import { NavLink as Anchor } from "react-router-dom";


function Header() {
  return (
    <div className=" text-white flex justify-between p-2 sm:p-5 sm:h-24 min-h-0">
      <div>
        <Anchor to="/"><Img className="h-12 " src={favi}></Img></Anchor>
      </div>
      <div className="flex items-center">
        <Anchor className="p-2 text-xl hover:underline focus:underline-offset-8" to="/">
          Home
        </Anchor>
        <Anchor className="p-2 text-xl hover:underline focus:underline-offset-8" to="/portfolio">
          PortFolio
        </Anchor>
        <Anchor className="p-2 text-xl hover:underline focus:underline-offset-8 " to="/contact">
          Contact
        </Anchor>
      </div>
    </div>
  );
}

export default Header;


