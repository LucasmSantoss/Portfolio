import React from "react";
import Img from "../Image/Image";
import wp from "../../Img/wp.png";
import github from "../../Img/GitHub.png";
import linkedin from "../../Img/linkedin.png";
import "./footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="links">
          <Img className="h-7" src={wp} alt="WhatsApp" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm pl-1 transition duration-700 ease-in-out bg-green rounded px-2 py-1 text-sm sm:text-sm"
            href="tel:+542235065893"
          >
            Whatsapp
          </a>
        </div>
        <div className="links">
          <Img className="h-7" src={github} alt="GitHub" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm pl-1 transition duration-700 ease-in-out bg-green rounded px-2 py-1 text-sm sm:text-sm"
            href="https://github.com/LucasmSantoss"
          >
            GitHub
          </a>
        </div>
        <div className="links">
          <Img className="h-7" src={linkedin} alt="LinkedIn" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm pl-1 transition duration-700 ease-in-out bg-green rounded px-2 py-1 text-sm sm:text-sm"
            href="https://www.linkedin.com/in/lucas-santos-b133001b9/"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
