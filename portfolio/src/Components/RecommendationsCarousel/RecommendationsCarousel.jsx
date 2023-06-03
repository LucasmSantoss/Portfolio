import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import recommendationsData from "../../data.json"; // Importar el archivo JSON
import Swal from "sweetalert2";

function RecommendationsCarousel() {
  
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Obtener las recomendaciones desde el archivo JSON
    setRecommendations(recommendationsData.recomendaciones);
  }, []);

  const handleLinkClick = async () => {
    const result = await Swal.fire({
      title: "Redireccionar a LinkedIn?",
      text: "¿Deseas continuar?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    });
  
    if (result.isConfirmed) {
      window.open(recommendations.perfil, "_blank"); // Redirigir a la URL del perfil en una nueva pestaña
    }
  };

  return (
    
    <div className="flex flex-col justify-center align-center gap-8 p-5 ">
      <h1
        className="text-white text-center text-2xl md:text-5xl p-4 animate-slide-in-down p-5"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1.5)" }}
      >
        Recomendaciones de otros colegas hechas en LinkedIn.
      </h1>
      <Carousel
      showArrows={true}
      emulateTouch={true}
      className="flex flex-col justify-center align-center p-5"
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 40,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 30,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 20,
        },
      }}
    >
      {recommendations.map((recommendation) => (
        <div
          key={recommendation.nombre}
          className="text-black flex flex-col items-center justify-center"
        >
          <div className="bg-white rounded-lg shadow-lg flex flex-col gap-5 p-4">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={recommendation.imagen}
                  alt={recommendation.nombre}
                />
              </div>
              <h3 className="font-bold">{recommendation.nombre}</h3>
            </div>
            <p className="font-bold">
              <span className="text-orange-600">Cargo:</span> {recommendation.cargo}
            </p>
            <p className="font-bold">{recommendation.recomendacion}</p>
            <p className="font-bold" onClick={handleLinkClick}>
              <span className="text-orange-600">Perfil:</span>{' '}
              <a href={recommendation.perfil}>{recommendation.perfil}</a>
            </p>
          </div>
        </div>
      ))}
    </Carousel>
    </div>
  );
}

export default RecommendationsCarousel;
