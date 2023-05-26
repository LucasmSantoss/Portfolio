import React from 'react';
import Img from '../Image/Image';
import wp from '../../Img/wp.png';
import github from '../../Img/GitHub.png';
import linkedin from '../../Img/linkedin.png';
import email from '../../Img/Email.png';

function Footer() {
  return (
    <div className='fixed bottom-0 left-0 right-0 flex flex-col lg:flex-row justify-around text-orange-600 text-xl p-5 '>
      <div className='flex justify-around lg:items-start text-white'>
        <div className='flex m-3 p-1'>
          <Img className='h-7' src={wp}></Img>
          <a
            className='text-xl pl-1 transition duration-700 ease-in-out bg-green'
            href='tel:+542235065893'>
            Phone
          </a>
        </div>
        <div className='flex m-3 p-1'>
          <Img className='h-7' src={github}></Img>
          <a
            className='text-xl pl-1 transition duration-700 ease-in-out bg-green'
            href='https://github.com/LucasmSantoss'>
            GitHub
          </a>
        </div>
        <div className='flex m-3 p-1'>
          <Img className='h-7' src={linkedin}></Img>
          <a
            className='text-xl pl-1 transition duration-700 ease-in-out bg-green'
            href='https://www.linkedin.com/in/lucas-santos-b133001b9/'>
            LinkedIn
          </a>
        </div>
        <div className='flex m-3 p-1'>
          <Img className='h-7' src={email}></Img>
          <a
            className='text-xl pl-1 transition duration-700 ease-in-out bg-green'
            href='mailto:lucasmsantoss95@hotmail.com'>
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
