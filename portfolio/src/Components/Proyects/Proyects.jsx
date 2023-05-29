import React from "react";
import Img from "../Image/Image";
import matear from "../../Img/matearr.png";
import minga from "../../Img/minga.png";
import petshop from "../../Img/petshop.png";
import mingamobile from "../../Img/mingamobile.png";
import matearmobile from "../../Img/matearmobile.png";
import Swal from "sweetalert2";

function Proyects() {
  const handleLinkClick = () => {
    Swal.fire({
      title: "Redireccionar a YouTube",
      text: "¿Deseas continuar?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href =
          "https://www.youtube.com/watch?v=PGmOuw-OhoQ&t=5s&ab_channel=LucasSantosDev";
      }
    });
  };

  const handleLinkClick2 = () => {
    Swal.fire({
      title: "Redireccionar a YouTube",
      text: "¿Deseas continuar?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "https://youtu.be/7zwULEhREfQ";
      }
    });
  };

  return (
    <div className="p-5 text-white">
      <h2 className="text-center text-4xl md:text-7xl animate-slide-in-down p-4">
        Mis proyectos realizados hasta la fecha
      </h2>
      <div className="flex flex-wrap justify-center md:justify-around p-5 shadow-2xl">
        <div className="flex w-full md:w-2/4 h-auto md:h-1/4 p-1 m-1 rounded-md animate-slide-in-left">
          <div className="p-3">
            <h2 className="text-center text-2xl md:text-3xl p-2">Matear</h2>
            <a href="https://mate-ar.vercel.app/" className="block">
              <Img
                className="rounded-md object-contain h-auto md:h-full p-2 mx-auto"
                src={matear}
              />
            </a>
            <p className="text-sm md:text-lg p-2">
              E-commerce dedicada a la industria nacional Argentina del mate y
              sus derivados, en búsqueda de exportar el producto a otros países.
            </p>
          </div>
        </div>
        <div className="flex w-full md:w-2/4 h-auto md:h-1/4 p-1 m-1 rounded-md shadow-2xl animate-slide-in-right">
          <div className="p-3">
            <h2 className="text-center text-2xl md:text-3xl p-2">
              Matear Mobile
            </h2>
            <a className="block" onClick={handleLinkClick}>
              <Img
                className="rounded-md mx-auto p-2 w-1/4"
                src={matearmobile}
              />
            </a>
            <p className="text-sm md:text-lg p-2">
              E-commerce dedicada a la industria nacional Argentina del mate y
              sus derivados, en búsqueda de exportar el producto a otros países.
            </p>
          </div>
        </div>
        <div className="flex w-full md:w-2/4 h-auto md:h-1/4 p-1 m-1 rounded-md shadow-2xl animate-slide-in-left">
          <div className="p-3">
            <h2 className="text-center text-2xl md:text-3xl p-2">Minga</h2>
            <a href="https://minga-gropublanco.vercel.app/" className="block">
              <Img className="rounded-md p-2 mx-auto" src={minga} />
            </a>
            <p className="text-sm md:text-lg p-2">
              Website producida y dedicada para la lectura de Mangas, donde el
              usuario puede interactuar con la página, comentar y hasta agregar
              en su perfil su Manga Favorito.
            </p>
          </div>
        </div>
        <div className="flex w-full md:w-2/4 h-auto md:h-1/4 p-1 m-1 rounded-md shadow-2xl animate-slide-in-right">
          <div className="p-3">
            <h2 className="text-center text-2xl md:text-3xl p-2">
              Minga Mobile
            </h2>
            <a onClick={handleLinkClick2} className="block">
              <Img className="rounded-md mx-auto p-2 w-1/4" src={mingamobile} />
            </a>
            <p className="text-sm md:text-lg p-2">
              Website producida y dedicada para la lectura de Mangas, donde el
              usuario puede interactuar con la página, comentar y hasta agregar
              en su perfil su Manga Favorito.
            </p>
          </div>
        </div>
        <div className="flex w-full md:w-2/4 h-auto md:h-1/4 p-1 m-1 rounded-md shadow-2xl animate-slide-in-left">
          <div className="p-3">
            <h2 className="text-center text-2xl md:text-3xl p-2">Pet Shop</h2>
            <a
              href="https://lucasmsantoss.github.io/Pet-shop/"
              className="block"
            >
              <Img className="rounded-md" src={petshop} />
            </a>
            <p className="text-sm md:text-lg p-2">
              E-commerce dedicada a las mascotas, donde podrás encontrar
              productos de Juguetería y Farmacia de Mascotas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyects;
