import React, { useState } from "react";
import Img from "../Image/Image";
import favi from "../../Img/favicon.png";
import { NavLink as Anchor } from "react-router-dom";
import "./header.css"; // Importa el archivo de estilos

function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
    document.body.classList.toggle('overflow-hidden', !showNav);
  };

  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Anchor to="/" className="focus:outline-none">
            <Img className="h-10 md:h-12" src={favi} alt="Logo" />
          </Anchor>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Anchor
                className="text-lg hover:text-gray-300 focus:outline-none"
                activeClassName="font-semibold text-indigo-500"
                exact
                to="/"
              >
                Home
              </Anchor>
            </li>
            <li>
              <Anchor
                className="text-lg hover:text-gray-300 focus:outline-none"
                activeClassName="font-semibold text-indigo-500"
                to="/portfolio"
              >
                PortFolio
              </Anchor>
            </li>
            <li>
              <Anchor
                className="text-lg hover:text-gray-300 focus:outline-none"
                activeClassName="font-semibold text-indigo-500"
                to="/contact"
              >
                Contact
              </Anchor>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleNav}
            className="focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
              {showNav ? (
                <path fillRule="evenodd" d="M18.27 15.27a1 1 0 0 1-1.41 1.41l-4.82-4.82-4.82 4.82a1 1 0 0 1-1.41-1.41l4.82-4.82-4.82-4.82a1 1 0 0 1 1.41-1.41l4.82 4.82 4.82-4.82a1 1 0 0 1 1.41 1.41l-4.82 4.82 4.82 4.82z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>

        <div className={`mobile-menu fixed top-full left-0 right-0 bg-gray-900 shadow-md py-4 transform transition duration-300 ease-in-out ${showNav ? 'open' : ''}`}>
          <nav className="px-6">
            <ul className="flex flex-col space-y-3">
              <li>
                <Anchor
                  className="block text-lg hover:text-gray-300 focus:outline-none"
                  activeClassName="font-semibold text-indigo-500"
                  exact
                  to="/"
                  onClick={toggleNav}
                >
                  Home
                </Anchor>
              </li>
              <li>
                <Anchor
                  className="block text-lg hover:text-gray-300 focus:outline-none"
                  activeClassName="font-semibold text-indigo-500"
                  to="/portfolio"
                  onClick={toggleNav}
                >
                  PortFolio
                </Anchor>
              </li>
              <li>
                <Anchor
                  className="block text-lg hover:text-gray-300 focus:outline-none"
                  activeClassName="font-semibold text-indigo-500"
                  to="/contact"
                  onClick={toggleNav}
                >
                  Contact
                </Anchor>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;