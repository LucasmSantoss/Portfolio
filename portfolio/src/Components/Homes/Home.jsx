
import Proyects from '../Proyects/Proyects';
import React from 'react';

function Home() {
  return (
    <div className='bg-white text-black'>
    <div className='flex justify-center '>
      <hr className='bg-white' />
        <h1 className='text-7xl font-black hover:font-bold  '>Lucas Santos</h1>
    </div>
    <p className='text-center   '>Full Stack MERN Developer & Mobile | HTML5 | CSS3 | Javascript | React | React Native | Express | MongoDB | NodeJS | Redux | Redux Toolkit | Github </p>
    <Proyects/>
    </div>
  );
}

export default Home;