import React from "react";
import "./index.css";

function Index() {
  return (
    <div className="text-emerald-50  flex flex-col justify-center items-center h-4/5 mx-auto">
      <div className="p-5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-3  animate-slide-in-left shadow-2xl">
          Lucas Santos
        </h1>
      </div>
      <div>
        <p className="p-5 text-center shadow-2xl text-lg sm:text-xl md:text-2xl pb-5 transition-transform transform translate-x-[-100%] sm:translate-x-0 animate-slide-in-right ">
          Mi nombre es Lucas Matias Santos y soy Full Stack MERN Developer & Mobile, desarrollo mis aplicaciones con estas tecnologias | HTML5 | CSS3 | Javascript | React |
          React Native | Express | MongoDB | NodeJS | Redux | Redux Toolkit |
          Github
        </p>
      </div>
    </div>
  );
}

export default Index;