// import React from "react";
// import Img from "../Image/Image";
// import matear from "../../Img/matearr.png";
// import minga from "../../Img/minga.png";
// import petshop from "../../Img/petshop.png";
// import mingamobile from "../../Img/mingamobile.png";
// import matearmobile from "../../Img/matearmobile.png";
// import Swal from "sweetalert2";
// import "animate.css";
// import { Element } from 'react-scroll';

// function Proyects() {
//   const handleLinkClick = (url) => {
//     Swal.fire({
//       title: "Redireccionar a YouTube",
//       text: "¿Deseas continuar?",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonText: "Aceptar",
//       cancelButtonText: "Cancelar",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         window.open(url, "_blank");
//       }
//     });
//   };

//   return (
//     <Element>
//       <div id="glow2" />
//       <div className="p-5 text-white animate__animated animate__fadeIn">

      
//         <h2 className="text-center text-4xl md:text-7xl animate__animated animate__slideInDown p-4" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1.5)" }}>
//           Mis proyectos realizados hasta la fecha
//         </h2>
//         <div className="flex flex-wrap justify-center md:justify-around p-5 shadow-2xl">
//           <div className="flex w-full md:w-2/4 h-auto md:h-1/4 p-1 m-1 rounded-md animate__animated animate__fadeInLeft">
//             <div className="p-3">
//               <h2 className="text-center text-2xl md:text-3xl p-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)' }}>Matear</h2>
//               <a href="https://mate-ar.vercel.app/" target="_blank" className="block">
//                 <Img
//                   className="rounded-md object-contain h-auto md:h-full p-2 mx-auto"
//                   src={matear}
//                 />
//               </a>
//               <p className="text-sm md:text-lg p-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)' }}>
//                 E-commerce dedicada a la industria nacional Argentina del mate y
//                 sus derivados, en búsqueda de exportar el producto a otros países.
//               </p>
//             </div>
//           </div>
//           <div className="flex w-full md:w-2/4 h-auto md:h-1/4 p-1 m-1 rounded-md shadow-2xl animate__animated animate__fadeInRight">
//             <div className="p-3">
//               <h2 className="text-center text-2xl md:text-3xl p-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)' }}>
//                 Matear Mobile
//               </h2>
//               <a className="block" onClick={() => handleLinkClick("https://www.youtube.com/watch?v=PGmOuw-OhoQ&t=5s&ab_channel=LucasSantosDev")}>
//                 <Img
//                   className="rounded-md mx-auto p-2 w-1/4"
//                   src={matearmobile}
//                 />
//               </a>
//               <p className="text-sm md:text-lg p-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)' }}>
//                 E-commerce dedicada a la industria nacional Argentina del mate y
//                 sus derivados, en búsqueda de exportar el producto a otros países.
//               </p>
//             </div>
//           </div>
//           <div className="flex w-full md:w-2/4 h-auto md:h-1/4 p-1 m-1 rounded-md shadow-2xl animate__animated animate__fadeInLeft">
//             <div className="p-3">
//               <h2 className="text-center text-2xl md:text-3xl p-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)' }}>Minga</h2>
//               <a href="https://minga-gropublanco.vercel.app/" target="_blank" className="block">
//                 <Img className="rounded-md p-2 mx-auto" src={minga} />
//               </a>
//               <p className="text-sm md:text-lg p-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)' }}>
//                 Website producida y dedicada para la lectura de Mangas, donde el
//                 usuario puede interactuar con la página, comentar y hasta agregar
//                 en su perfil su Manga Favorito.
//               </p>
//             </div>
//           </div>
//           <div className="flex w-full md:w-2/4 h-auto md:h-1/4 p-1 m-1 rounded-md shadow-2xl animate__animated animate__fadeInRight">
//             <div className="p-3">
//               <h2 className="text-center text-2xl md:text-3xl p-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)' }}>Minga Mobile</h2>
//               <a className="block" onClick={() => handleLinkClick("https://youtu.be/7zwULEhREfQ")}  >
//                 <Img className="rounded-md mx-auto p-2 w-1/4" src={mingamobile} />
//               </a>
//               <p className="text-sm md:text-lg p-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)' }}>
//                 Website producida y dedicada para la lectura de Mangas, donde el
//                 usuario puede interactuar con la página, comentar y hasta agregar
//                 en su perfil su Manga Favorito.
//               </p>
//             </div>
//           </div>
//           <div className="flex w-full md:w-2/4 h-auto md:h-1/4 p-1 m-1 rounded-md shadow-2xl animate__animated animate__fadeInLeft">
//             <div className="p-3">
//               <h2 className="text-center text-2xl md:text-3xl p-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)' }}>Pet Shop</h2>
//               <a
//                 href="https://lucasmsantoss.github.io/Pet-shop/"
//                 className="block"
//                 target="_blank"
//               >
//                 <Img className="rounded-md" src={petshop} />
//               </a>
//               <p className="text-sm md:text-lg p-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)' }}>
//                 E-commerce dedicada a las mascotas, donde podrás encontrar
//                 productos de Juguetería y Farmacia de Mascotas.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Element>
//   );
// }

// export default Proyects;
import React, { useEffect } from 'react';
import './proyects.css';
import Img from "../Image/Image";
import matear from "../../Img/matearr.png";
import minga from "../../Img/minga.png";
import petshop from "../../Img/petshop.png";
import mingamobile from "../../Img/mingamobile.png";
import matearmobile from "../../Img/matearmobile.png";

const Proyects = () => {
  useEffect(() => {
    let progress = 50;
    let startX = 0;
    let active = 0;
    let isDown = false;

    const speedWheel = 0.02;
    const speedDrag = -0.1;

    const getZindex = (array, index) =>
      array.map((_, i) => (index === i ? array.length : array.length - Math.abs(index - i)));

    const $items = document.querySelectorAll('.carousel-item');
    const $cursors = document.querySelectorAll('.cursor');

    const displayItems = (item, index, active) => {
      const zIndex = getZindex([...$items], active)[index];
      item.style.setProperty('--zIndex', zIndex);
      item.style.setProperty('--active', (index - active) / $items.length);
    };

    const animate = () => {
      progress = Math.max(0, Math.min(progress, 100));
      active = Math.floor((progress / 100) * ($items.length - 1));

      $items.forEach((item, index) => displayItems(item, index, active));
    };
    animate();

    $items.forEach((item, i) => {
      item.addEventListener('click', () => {
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
      if (e.type === 'mousemove') {
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

    document.addEventListener('mousewheel', handleWheel);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchstart', handleMouseDown);
    document.addEventListener('touchmove', handleMouseMove);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mousewheel', handleWheel);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchstart', handleMouseDown);
      document.removeEventListener('touchmove', handleMouseMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">Matear</div>
          <div className="num">01</div>
          <Img className="img" src={matear} alt="Matear" />
        </div>
      </div>
      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">Mater Mobile</div>
          <div className="num">02</div>
          <Img className="img" src={matearmobile} alt="Matear Mobile" />
        </div>
      </div>
      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">Minga</div>
          <div className="num">03</div>
          <Img className="img" src={minga} alt="Minga" />
        </div>
      </div>
      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">Minga Mobile</div>
          <div className="num">04</div>
          <Img className="img" src={mingamobile} alt="Minga Mobile" />
        </div>
      </div>
      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">PetShop</div>
          <div className="num">05</div>
          <Img className="img" src={petshop} alt="PetShop" />
        </div>
      </div>
    </div>
  );
};

export default Proyects;
