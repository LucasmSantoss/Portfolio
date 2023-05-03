import React from 'react';
import Img from '../Image/Image';
import matear from '../../Img/matearr.png';
import minga from '../../Img/minga.png';
import petshop from '../../Img/petshop.png';

function Proyects() {
  return (
    <div className='bg-neutral-900 text-orange-600 p-5'>
      <h2 className='text-center p-6 text-5xl font-black hover:font-bold'>
        Mis proyectos realizados hasta la fecha
      </h2>
      <div className='flex flex-wrap justify-center md:justify-around p-2 text-white'>
        <div className='w-full md:w-1/3 lg:w-1/4 p-4 m-1  rounded-md bg-neutral-800 text-white'>
          <div className='p-3'>
            <h2 className='text-center p-2 text-3xl font-black hover:font-bold'>
              Matear
            </h2>
            <a href='https://mate-ar.vercel.app/'>
              <Img className='rounded-md' src={matear} />
            </a>
            <p className='text-1xl p-2'>
              Eccomerce dedicada a la industria nacional Argentina del mate y
              sus derivados, en busqueda de exportar el producto a otros paises.
            </p>
          </div>
        </div>
        <div className='w-full md:w-1/3 lg:w-1/4 p-4 m-1  rounded-md bg-neutral-800'>
          <div className='p-3'>
            <h2 className='text-center p-2 text-3xl font-black hover:font-bold'>
              Minga
            </h2>
            <a href='https://minga-gropublanco.vercel.app/'>
              <Img className='rounded-md' src={minga} />
            </a>
            <p className='text-1xl p-2'>
              Website producida y dedicada para la lectura de Mangas, donde el
              usuario puede interactuar con la pagina, comentar y esta agregar
              en su perfil su Manga Favorito!!.
            </p>
          </div>
        </div>
        <div className='w-full md:w-1/3 lg:w-1/4 p-4 m-1 rounded-md bg-neutral-800'>
          <div className='p-3'>
            <h2 className='text-center p-2 text-3xl font-black hover:font-bold'>
              Pet Shop
            </h2>
            <a href='https://lucasmsantoss.github.io/Pet-shop/'>
              <Img className='rounded-md' src={petshop} />
            </a>
            <p className='text-1xl p-2'>
              Eccomerce dedicada a las mascotas, donde podras encontrar productos
              de Jugueteria y Farmacia de Mascotas!.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyects;
