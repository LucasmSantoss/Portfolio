import React, { useEffect, useState } from "react";
import "./proyects.css";
import Img from "../Image/Image";
import matear from "../../Img/matearr.png";
import minga from "../../Img/minga.png";
import petshop from "../../Img/petshop.png";
import mingamobile from "../../Img/mingamobile.png";
import matearmobile from "../../Img/matearmobile.png";
import nextmovie from "../../Img/nextmovie.png"
import calculator from "../../Img/calculator.png";
import Swal from "sweetalert2";
import rigtharrow from "../../Img/flechaderecha.png";
import leftarrow from "../../Img/flechaizquierda.png"

const Proyects = () => {

  const [showDescription, setShowDescription] = useState(false);
  const [progress, setProgress] = useState(50);

  const handleLinkClick = (url) => {
    Swal.fire({
      title: "Redireccionar a YouTube",
      text: "¿Deseas continuar?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(url, "_blank");
      }
    });
  };

  const handleLinkClick2 = (url) => {
    Swal.fire({
      title: "Se va a redireccionar a una nueva pagina?",
      text: "¿Deseas continuar?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(url, "_blank");
      }
    });
  };

  const handleHover = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };


  const handleArrowClick = (direction) => {
    setProgress((prevProgress) => {
      if (direction === "next") {
        return Math.min(prevProgress + 10, 100);
      } else if (direction === "prev") {
        return Math.max(prevProgress - 10, 0);
      }
      return prevProgress;
    });
  };


  useEffect(() => {
    let progress = 50;
    let startX = 0;
    let active = 0;
    let isDown = false;

    const speedWheel = 0.02;
    const speedDrag = -0.1;

  

    const getZindex = (array, index) =>
      array.map((_, i) =>
        index === i ? array.length : array.length - Math.abs(index - i)
      );

    const $items = document.querySelectorAll(".carousel-item");
    const $cursors = document.querySelectorAll(".cursor");

    const displayItems = (item, index, active) => {
      const zIndex = getZindex([...$items], active)[index];
      item.style.setProperty("--zIndex", zIndex);
      item.style.setProperty("--active", (index - active) / $items.length);
    };

    const animate = () => {
      progress = Math.max(0, Math.min(progress, 100));
      active = Math.floor((progress / 100) * ($items.length - 1));

      $items.forEach((item, index) => displayItems(item, index, active));
    };
    animate();

    $items.forEach((item, i) => {
      item.addEventListener("click", () => {
        progress = (i / $items.length) * 100 + 10;
        animate();
      });
    });

    const handleWheel = (e) => {
      const wheelProgress = e.deltaY * speedWheel;
      progress = progress + wheelProgress;
      animate();
    };

    const handleMouseMove = (e) => {
      if (e.type === "mousemove") {
        $cursors.forEach(($cursor) => {
          $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
      }
      if (!isDown) return;
      const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const mouseProgress = (x - startX) * speedDrag;
      progress = progress + mouseProgress;
      startX = x;
      animate();
    };  
    

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    document.addEventListener("mousewheel", handleWheel);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchstart", handleMouseDown);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mousewheel", handleWheel);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchstart", handleMouseDown);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("touchend", handleMouseUp);
    };

  
    
  }, []);

  return (
    <div className="carousel animate-slide-in-left body">
      

    
      <p className="animate-bounce text-white flex justify-center text-1xl pt-12 m-5"> Use the mouse wheel to move between projects!</p>
      <div className={`carousel-item ${showDescription ? "show-description" : ""}`}
      
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
>
{/* <button
        className="carousel-arrow carousel-arrow-left"
        onClick={() => handleArrowClick("prev")}
      >
        <Img src={leftarrow} alt="Previous" />
      </button> */}
        <a
          onClick={() => handleLinkClick2("https://mate-ar.vercel.app/")}
          className="carousel-link"
        >
          <div className="carousel-box">
            <div className="title">Matear</div>
            <Img className="img" src={matear} alt="Matear" />
          </div>
        </a>
        {showDescription  && (
          <div className="description">
            <h2>Tecnologies</h2>
            <p>React Native | MongoDB | Nodejs | Express</p>
          </div>
        )}
      </div>

      <div className={`carousel-item ${showDescription ? "show-description" : ""}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
>
        <a

          
          onClick={() =>
            handleLinkClick(
              "https://www.youtube.com/watch?v=PGmOuw-OhoQ&t=5s&ab_channel=LucasSantosDev"
            )
          }
          className="carousel-link"
          
        >
          
          <div className="carousel-box">
            <div className="title">Matear Mobile</div>
            <Img className="img" src={matearmobile} alt="Matear Mobile" />
          </div>
        </a>
        {showDescription  && (
          <div className="description">
            <h2>Tecnologies</h2>
            <p>React Native | MongoDB | Nodejs | Express</p>
          </div>
        )}
      </div>

      <div className={`carousel-item ${showDescription ? "show-description" : ""}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}>
        <a
        
          onClick={() =>
            handleLinkClick2("https://mingaweb-5vmn.vercel.app/")
          }
          className="carousel-link"
        >
          <div className="carousel-box">
            <div className="title">Minga</div>
            <Img className="img" src={minga} alt="Minga" />
          </div>
        </a>
        {showDescription  && (
          <div className="description">
            <h2>Tecnologies</h2>
            <p>React Native | MongoDB | Nodejs | Express</p>
          </div>
        )}
      </div>

      <div className="carousel-item">
        <a
          onClick={() => handleLinkClick("https://youtu.be/7zwULEhREfQ")}
          className="carousel-link"
        >
          <div className="carousel-box">
            <div className="title">Minga Mobile</div>
            <Img className="img" src={mingamobile} alt="Minga Mobile" />
          </div>
        </a>
        <div className="description">
         <h2>Tecnologies</h2>
         <p>React Native | MongoDB | Nodejs | Express</p>
        </div>
      </div>

      <div className="carousel-item">
        <a
          onClick={() =>
            handleLinkClick2("https://lucasmsantoss.github.io/Pet-shop/")
          }
          className="carousel-link"
        >
          <div className="carousel-box">
            <div className="title">PetShop</div>
            <Img className="img" src={petshop} alt="PetShop" />
          </div>
        </a>
        <div className="description">
         <h2>Tecnologies</h2>
         <p>React Native | MongoDB | Nodejs | Express</p>
        </div>
      </div>
      
      <div className="carousel-item">
        <a
          onClick={() =>
            handleLinkClick2("https://calculator-six-bay.vercel.app/")
          }
          className="carousel-link"
        >
          <div className="carousel-box">
            <div className="title">Scientific Calculator 👨‍🔧🛠🛠</div>
            <Img className="img" src={calculator} alt="Calculator" />
          </div>
        </a>
        <div className="description">
         <h2>Tecnologies</h2>
         <p>React Native | MongoDB | Nodejs | Express</p>
        </div>
      </div>
      <div className="carousel-item">
        <a
          // onClick={() =>
          //   handleLinkClick2("https://lucasmsantoss.github.io/Pet-shop/")
          // }
          className="carousel-link"
        >
          <div className="carousel-box">
            <div className="title">Next Movie 👨‍🔧🛠🛠</div>
            <Img className="img" src={nextmovie} alt="PetShop" />
          </div>
        </a>
        {/* <button
        className="carousel-arrow carousel-arrow-right"
        onClick={() => handleArrowClick("next")}
      >
        <Img src={rigtharrow} alt="Next" />
      </button> */}
        <div className="description">
         <h2>Tecnologies</h2>
         <p>React Native | MongoDB | Nodejs | Express</p>
        </div>
      </div>
      <div id="glow" />
  
    </div>
  );
};

export default Proyects;
