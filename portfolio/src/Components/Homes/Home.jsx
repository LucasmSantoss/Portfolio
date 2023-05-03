import Proyects from '../Proyects/Proyects';
import React from 'react';

function Home() {
  return (
    <div className='bg-black text-orange-600'>
      <div className='flex justify-center p-5'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black hover:font-bold p-3 text-white'>Lucas Santos</h1>
      </div>
      <p className='text-center text-lg sm:text-xl md:text-2xl pb-5'>
        Full Stack MERN Developer & Mobile | HTML5 | CSS3 | Javascript | React | React Native | Express | MongoDB | NodeJS | Redux | Redux Toolkit | Github
      </p>
      <Proyects />
    </div>
  );
}

export default Home;
