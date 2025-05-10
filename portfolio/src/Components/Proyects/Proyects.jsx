import React from "react";
import "./proyects.css";
import Img from "../Image/Image";
import matear from "../../Img/matearr.png";
import minga from "../../Img/minga.png";
import petshop from "../../Img/petshop.png";
import nextmovie from "../../Img/nextmovie.png";
import calculator from "../../Img/calculator.png";

const Proyects = () => {
  const proyectos = [
    {
      nombre: "Matear",
      tecnologias: "React Native | MongoDB | Nodejs | Express | Redux ",
      descripcion: "Pagina dedicada a la venta de mates y sus derivados",
      link: "https://mate-ar.vercel.app/",
      imagen: matear,
    },
    {
      nombre: "Matear Mobile",
      tecnologias: "React Native | MongoDB | Nodejs | Express | Redux",
      descripcion: "Versión móvil de Matear.",
      link: "https://www.youtube.com/watch?v=PGmOuw-OhoQ&t=5s&ab_channel=LucasSantosDev",
      imagen: matear,
    },
    {
      nombre: "Minga",
      tecnologias: "React Native | MongoDB | Nodejs | Express | Redux",
      descripcion: "Pagina dedicada a la busqueda y lectura de manga.",
      link: "https://mingaweb-5vmn.vercel.app/",
      imagen: minga,
    },
    {
      nombre: "Minga Mobile",
      tecnologias: "React Native | MongoDB | Nodejs | Express | Redux",
      descripcion: "Versión móvil de Minga.",
      link: "https://youtu.be/7zwULEhREfQ",
      imagen: minga,
    },
    {
      nombre: "PetShop",
      tecnologias: "HTML | CSS | JavaScript",
      descripcion: "Pagina dedicada la compra de productos para mascotas.",
      link: "https://lucasmsantoss.github.io/Pet-shop/",
      imagen: petshop,
    },
    {
      nombre: "Scientific Calculator 👨‍🔧🛠🛠",
      tecnologias: "React",
      descripcion: "Calculadora científica en construccion.",
      link: "https://calculator-six-bay.vercel.app/",
      imagen: calculator,
    },
    {
      nombre: "Next Movie 👨‍🔧🛠🛠",
      tecnologias: "React",
      descripcion: "Proyecto en construccion sobre estrenos de peliculas y sus trailers.",
      link: "URL_DEL_PROYECTO_NEXT_MOVIE", // Reemplaza con la URL real
      imagen: nextmovie,
    },
  ];

  return (
    <div className="proyectos-container body">
      <h2 className="proyectos-titulo animate-fade-in">Mis Proyectos</h2>
      <p className="animate-fade-in proyectos-descripcion">
        Echa un vistazo a algunos de los proyectos en los que he trabajado.
      </p>
      {proyectos.map((proyecto, index) => (
        <div
          key={index}
          className={`proyecto-card animate-slide-in-${
            index % 2 === 0 ? "left" : "right"
          }`}
        >
          <a
            href={proyecto.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="proyecto-imagen">
              <Img src={proyecto.imagen} alt={proyecto.nombre} />
            </div>
            <div className="proyecto-info">
              <h3>{proyecto.nombre}</h3>
              <p className="proyecto-tecnologias">{proyecto.tecnologias}</p>
              <p className="proyecto-descripcion">{proyecto.descripcion}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Proyects;