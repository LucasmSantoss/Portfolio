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
    <div className="text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 sm:px-10">
        <div className="flex items-center">
          <Anchor to="/">
            <Img className="h-12" src={favi} alt="Logo" />
          </Anchor>
        </div>

        <div className="hidden sm:block">
          <nav>
            <ul className="flex space-x-4">
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
            </ul>
          </nav>
        </div>

        <div className="block sm:hidden">
          <button
            onClick={toggleNav}
            className="text-xl focus:outline-none"
            aria-label="Toggle Navigation"
          >
            ☰
          </button>
        </div>

        {showNav && (
          <div className=" left-0  py-2 px-6 sm:relative sm:flex sm:items-start sm:space-x-4">
            <nav className="flex-1">
              <ul className="flex flex-col">
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
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
