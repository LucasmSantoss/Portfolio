import React from "react";
import Img from "../Image/Image";
import matear from "../../Img/matearr.png";
import minga from "../../Img/minga.png";
import petshop from "../../Img/petshop.png";
import mingamobile from '../../Img/mingamobile.png'
import matearmobile from '../../Img/matearmobile.png'
import Swal from 'sweetalert2';



function Proyects() {

  const handleLinkClick = () => {
    Swal.fire({
      title: 'Redireccionar a YouTube',
      text: '¿Deseas continuar?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí puedes agregar la lógica para redirigir al usuario a YouTube
        window.location.href = 'https://www.youtube.com/watch?v=PGmOuw-OhoQ&t=5s&ab_channel=LucasSantosDev';
      }
    });
  };

  const handleLinkClick2 = () => {
    Swal.fire({
      title: 'Redireccionar a YouTube',
      text: '¿Deseas continuar?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí puedes agregar la lógica para redirigir al usuario a YouTube
        window.location.href = 'https://youtu.be/7zwULEhREfQ';
      }
    });
  };


  
  return (
    <div className="h-auto w-auto p-5 text-white">
      <h2 className="text-center  p-6 text-7xl  animate-slide-in-down">
        Mis proyectos realizados hasta la fecha
      </h2>
      <div className="flex justify-center md:justify-around p-5 shadow-2xl ">
  <div className="flex w-2/4 h-auto md:h-1/4 p-1 m-1 rounded-md  animate-slide-in-left">
    <div className="p-3">
      <h2 className="text-center p-2  text-3xl ">
        Matear
      </h2>
      <a href="https://mate-ar.vercel.app/">
        <Img className="rounded-md object-contain max-h-full p-2" src={matear} />
      </a>
      <p className="text-1xl p-2">
        E-commerce dedicada a la industria nacional Argentina del mate y sus derivados, en búsqueda de exportar el producto a otros países.
      </p>
    </div>
  </div>
  <div className="flex w-2/4 h-auto md:h-1/4 p-1 m-1 rounded-md shadow-2xl  animate-slide-in-right">
    <div className="p-3  ">
      <h2 className="text-center p-2 text-3xl ">
        Matear Mobile
      </h2>
      <a className="items-center" onClick={handleLinkClick}>
        <Img className="rounded-md m-auto p-2 w-1/4" src={matearmobile} />
      </a>
      <p className="text-1xl p-2">
        E-commerce dedicada a la industria nacional Argentina del mate y sus derivados, en búsqueda de exportar el producto a otros países.
      </p>
    </div>
  </div>
</div>

        <div className="flex  justify-center md:justify-around p-5  ">
        <div className="flex w-2/4 h-auto md:h-1/4 p-1 m-1 rounded-md shadow-2xl animate-slide-in-left">
          <div className="p-3">
            <h2 className="text-center p-2 text-3xl ">
              Minga
            </h2>
            <a href="https://minga-gropublanco.vercel.app/">
              <Img className="rounded-md p-2" src={minga} />
            </a>
            <p className="text-1xl p-2">
              Website producida y dedicada para la lectura de Mangas, donde el
              usuario puede interactuar con la pagina, comentar y hasta agregar
              en su perfil su Manga Favorito!!.
            </p>
          </div>
        </div>
        <div className="flex w-2/4 h-auto md:h-1/4 p-1 m-1 rounded-md shadow-2xl animate-slide-in-right">
          <div className="p-3">
            <h2 className="text-center p-2 text-3xl ">
              Minga Mobile
            </h2>
            <a onClick={handleLinkClick2}>
              <Img className="rounded-md m-auto p-2 w-1/4" src={mingamobile} />
            </a>
            <p className="text-1xl p-2">
              Website producida y dedicada para la lectura de Mangas, donde el
              usuario puede interactuar con la pagina, comentar y esta agregar
              en su perfil su Manga Favorito!!.
            </p>
          </div>
        </div>
        </div>
      
        <div className="flex w-2/4 h-auto md:h-1/4 p-1 m-1 rounded-md shadow-2xl animate-slide-in-left">
          <div className="p-3">
            <h2 className="text-center p-2 text-3xl">
              Pet Shop
            </h2>
            <a href="https://lucasmsantoss.github.io/Pet-shop/">
              <Img className="rounded-md" src={petshop} />
            </a>
            <p className="text-1xl p-2">
              Eccomerce dedicada a las mascotas, donde podras encontrar
              productos de Jugueteria y Farmacia de Mascotas!.
            </p>
          </div>
        
       
        </div>
      
    </div>
  );
}

export default Proyects;
