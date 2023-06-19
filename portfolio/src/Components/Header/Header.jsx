import React, { useState } from "react";
import Img from "../Image/Image";
import favi from "../../Img/favicon.png";
import { NavLink as Anchor } from "react-router-dom";

function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="text-white flex flex-col sm:flex-row justify-between items-center p-2 sm:p-5">
      <div>
        <Anchor to="/">
          <Img className="h-12" src={favi} alt="Logo" />
        </Anchor>
      </div>
      <nav className={`${showNav ? "block" : "hidden"} sm:block`}>
        <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <li>
            <Anchor
              className="text-xl hover:underline"
              activeClassName="font-bold"
              exact
              to="/"
            >
              Home
            </Anchor>
          </li>
          <li>
            <Anchor
              className="text-xl hover:underline"
              activeClassName="font-bold"
              to="/portfolio"
            >
              PortFolio
            </Anchor>
          </li>
          <li>
            <Anchor
              className="text-xl hover:underline"
              activeClassName="font-bold"
              to="/contact"
            >
              Contact
            </Anchor>
          </li>
          {/* <li>
            <Anchor
              className="text-xl hover:underline"
              activeClassName="font-bold"
              to="/recomendations"
            >
              Recommendations
            </Anchor>
          </li> */}
        </ul>
      </nav>
      <div className="sm:hidden">
        <button
          onClick={toggleNav}
          className="text-xl focus:outline-none"
          aria-label="Toggle Navigation"
        >
          ☰
        </button>
      </div>
    </div>
  );
}

export default Header;
